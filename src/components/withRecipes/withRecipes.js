import React, {Fragment, useEffect, useState} from 'react'

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
        <Fragment>
            <Component {...props} context={recipesContext}/>
        </Fragment>
    )
}


export default withRecipes