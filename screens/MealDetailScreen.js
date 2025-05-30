import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native'

import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'

import { MEALS } from '../data/dummy-data'
import IconButton from '../components/IconButton'
import { addFavorite, removeFavorite } from '../store/redux/favorite'

const MealDetailScreen = ({ route, navigation }) => {
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)
  const dispatch = useDispatch()

  const { mealId } = route.params
  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  const mealIsFavorite = favoriteMealIds.includes(mealId)

  function changeFavoriteStatusHandler () {
    if (mealIsFavorite) {
      dispatch(
        removeFavorite({
          id: mealId
        })
      )
    } else {
      dispatch(
        addFavorite({
          id: mealId
        })
      )
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          color='white'
          onPress={changeFavoriteStatusHandler}
        />
      )
    })
  }, [navigation, changeFavoriteStatusHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 300
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginVertical: 8
  },
  detailText: {
    color: 'white'
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    width: '80%'
  }
})
