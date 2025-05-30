import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import { Provider } from 'react-redux'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailScreen from './screens/MealDetailScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import { store } from './store/redux/store'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigation = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneCOntentStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1'
    }}
  >
    <Drawer.Screen
      name='Categories'
      component={CategoriesScreen}
      options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => (
          <Ionicons name='list' color={color} size={size} />
        )
      }}
    />
    <Drawer.Screen
      name='Favoirites'
      component={FavoritesScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name='star' color={color} size={size} />
        )
      }}
    />
  </Drawer.Navigator>
)

export default function App () {
  return (
    <>
      <StatusBar style='dark' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' }
            }}
          >
            <Stack.Screen
              name='All categories'
              component={DrawerNavigation}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name='MealDetail'
              component={MealDetailScreen}
              options={{
                title: 'About the meal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {}
})
