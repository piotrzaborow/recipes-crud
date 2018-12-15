import React, {Fragment} from 'react'
import styled from 'styled-components'
import {useRecipesContext} from "../../context"
import {Link, withRouter} from 'react-router-dom'

const List = styled.ul`

`

const RecipesList = ({history}) => {

    const {recipes} = useRecipesContext()

    return (
        <Fragment>
        <ul>
            {recipes.map(recipe =>
                <li key={recipe.id} onClick={() => history.push(`/edit/${recipe.id}`)}>{recipe.title}</li>
            )}
        </ul>
            <Link to={'/add'}>Add Recipe</Link>
        </Fragment>
    )
}

export default withRouter(RecipesList)