import { FlatList, Text } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import { useNavigation } from '@react-navigation/native'

function CategoriesScreen ({ navigation }) {
  const renderCategoryItem = itemData => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview')
    }
    
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen
