import React, {useState, Fragment} from 'react'
import {useRecipesContext} from "../../context"
import uuid from 'uuid/v4'
import {Link} from "react-router-dom"
import {withRouter} from "react-router-dom"

const AddRecipe = ({history}) => {
    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const {addRecipe} = useRecipesContext()

    return (
        <Fragment>
            <form onSubmit={(e) => {
                addRecipe({id: uuid(), title: title, ingredients: ingredients})
                history.push('/list')
                e.preventDefault()
            }}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </label>
                <label>
                    Ingredients:
                    <input type="textarea" value={ingredients} onChange={(e) => setIngredients(e.target.value)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            <Link to={'/'}>Go back to List</Link>
        </Fragment>
    )
}

export default withRouter(AddRecipe)