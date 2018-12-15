import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 50%;
  height: calc(100vh - 100px);
  padding-top: 80px;
  margin: 0 auto;
  
  @media(max-width: 1024px){
    width: 100%;
  }
`

const withRecipes = Component => props => {

    const [recipes, setRecipes] = useState(JSON.parse(window.localStorage.getItem('recipes')) || [])

    useEffect(() => localStorage.setItem('recipes', JSON.stringify(recipes)), [recipes])

    const addRecipe = (recipe) => {
        setRecipes([...recipes, recipe])
    }

    const getRecipe = (id, array = recipes) => {
        return array.find(recipe => recipe.id === id)
    }

    const updateRecipe = (id, recipeData) => {
        const localRecipes = [...recipes]
        const recipe = getRecipe(id, localRecipes)
        const recipeIndex = localRecipes.indexOf(recipe)
        localRecipes[recipeIndex] = recipeData
        setRecipes(localRecipes)
    }

    const deleteRecipe = (id) => {
        const localRecipes = [...recipes]
        const recipe = getRecipe(id)
        localRecipes.splice(localRecipes.indexOf(recipe), 1)
        setRecipes(localRecipes)
    }

    const recipesContext = {
        recipes: recipes,
        setRecipes: setRecipes,
        addRecipe: addRecipe,
        updateRecipe: updateRecipe,
        deleteRecipe: deleteRecipe,
        getRecipe: getRecipe,
    }

    return (
        <Wrapper>
            <Component {...props} context={recipesContext}/>
        </Wrapper>
    )
}


export default withRecipes