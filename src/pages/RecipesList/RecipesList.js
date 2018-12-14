import React, {Fragment} from 'react'
import styled from 'styled-components'
import {useRecipesContext} from "../../context"
import {Link} from 'react-router-dom'

const List = styled.ul`

`

const RecipesList = () => {

    const {recipes} = useRecipesContext()
    console.log(recipes)
    return (
        <Fragment>
        <ul>
            {recipes.map(recipe =>
                <li key={recipe.id}>{recipe.title}</li>
            )}
        </ul>
            <Link to={'/add'}>Add Recipe</Link>
        </Fragment>
    )
}

export default RecipesList