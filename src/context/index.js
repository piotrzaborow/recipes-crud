 import React, {createContext, useContext} from 'react'

 const RecipesContext = createContext({
     recipes: [],
     addRecipe: () => {}
 })

 export const useRecipesContext = () => useContext(RecipesContext)

 export default RecipesContext