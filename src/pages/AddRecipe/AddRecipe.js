import React, {useState, Fragment} from 'react'
import {useRecipesContext} from "../../context"
import uuid from 'uuid/v4'
import {Link} from "react-router-dom"

const AddRecipe = () => {
    const [title, setTitle] = useState('')
    const {addRecipe} = useRecipesContext()

    return (
        <Fragment>
            <form onSubmit={(e) => {
                addRecipe({id: uuid(), title: title})
                e.preventDefault()
            }}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            <Link to={'/'}>Go back to List</Link>
        </Fragment>
    )
}

export default AddRecipe