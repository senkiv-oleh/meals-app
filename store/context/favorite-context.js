import { useState, createContext } from 'react'

export const FavoiritesContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {}
})

const FavoiritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([])

  const addFavorite = id =>
    setFavoriteMealIds(currentFavIds => [...currentFavIds, id])

  const removeFavorite = id =>
    setFavoriteMealIds(currentFavIds =>
      currentFavIds.filter(mealId => mealId !== id)
    )

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  }

  return (
    <FavoiritesContext.Provider value={value}>
      {children}
    </FavoiritesContext.Provider>
  )
}

export default FavoiritesContextProvider
