import {createContext, useContext} from 'react'

const RecipesContext = createContext(null)

 export const useRecipesContext = () => useContext(RecipesContext)

 export default RecipesContext