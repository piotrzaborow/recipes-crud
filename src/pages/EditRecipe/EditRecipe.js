import React, {useState, useEffect} from 'react'
import {useRecipesContext} from "../../context"
import {withRouter} from "react-router-dom"

const EditRecipe = ({match, history}) => {
    const recipeId = match.params.recipeId
    const {getRecipe, updateRecipe, deleteRecipe} = useRecipesContext()

    const recipe = getRecipe(recipeId)
    const [title, setTitle] = useState(recipe.title || '')
    const [ingredients, setIngredients] = useState(recipe.ingredients || '')

    const isValid = () => {
        return title === recipe.title
    }

    const onSubmit = e => {
        updateRecipe(recipeId, {
            ...recipe,
            title: title,
            ingredients: ingredients
        })
        history.push('/list')
        e.preventDefault()
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </label>

            <label>
                Ingredients:
                <input type="textarea" value={ingredients} onChange={(e) => setIngredients(e.target.value)}/>
            </label>

            <input type="submit" value="Submit" disabled={isValid}/>

            <button onClick={() => {
                deleteRecipe(recipeId)
                history.push('/list')
            }}>
                Delete recipe
            </button>
        </form>
    )
}

export default withRouter(EditRecipe)