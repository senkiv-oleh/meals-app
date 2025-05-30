import { useLayoutEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealsList from '../components/MealsList/MealsList'

function MealsOverviewScreen ({ route, navigation }) {
  const catId = route.params.categoryId

  const displayMeals = MEALS.filter(
    mealItem => mealItem.categoryIds.indexOf(catId) >= 0
  )

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId
    ).title

    navigation.setOptions({
      title: categoryTitle
    })
  }, [catId, navigation])

  return <MealsList items={displayMeals} />
}

export default MealsOverviewScreen
