import React, {useState, useEffect, Fragment} from 'react'
import {useRecipesContext} from "../../context"
import {withRouter, Link} from "react-router-dom"
import {Icon} from "react-icons-kit"
import {iosArrowBack} from 'react-icons-kit/ionicons/iosArrowBack'
import Navigation from "../../components/Navigation/Navigation"
import styled from "styled-components"

const IconLink = styled(Link)`
  outline: none;
  text-decoration: none;
  color:  rgb(0, 122, 255);
`

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
        <div>
            <Navigation title={title} BackComponent={<IconLink to={'/'}><Icon icon={iosArrowBack} size={32}/>Recipes
                List</IconLink>}/>
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
        </div>
    )
}

export default withRouter(EditRecipe)