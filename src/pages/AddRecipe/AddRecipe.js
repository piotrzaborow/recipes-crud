import React, {useState} from 'react'
import {useRecipesContext} from "../../context"
import uuid from 'uuid/v4'
import {Link} from "react-router-dom"
import {withRouter} from "react-router-dom"
import Navigation from "../../components/Navigation/Navigation"
import styled from 'styled-components'

const IconLink = styled(Link)`
  outline: none;
  text-decoration: none;
  color:  rgb(0, 122, 255);
  padding: 10px;
`

const Form = styled.form`
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
  padding: 20px;
  border: none;
  border-bottom: 1px solid rgba(0,0,0, 0.15);
  background-color: #fff;
  outline:none;
  font-size: 16px;
  border-radius: 0px;
  margin:0;
`

const TextArea = styled.textarea`
  padding: 15px;
  border:none;
  border-bottom: 1px solid rgba(0,0,0, 0.15);
  background-color: #fff;
  outline:none;
  font-size: 16px;
  resize: vertical;
  border-radius: 0px;
  margin:0;
`

const SubmitButton = styled.button`
  padding: 20px;
  border: none;
  background-color: #fff;
  outline:none;
  margin-top: 20px;
  color: rgb(0, 122, 255);
  font-size: 15px;
  border-radius: 0px;
  
  :disabled{
    background-color: rgba(255,255,255, .3);
    color: rgb(0, 122, 255, .3);
     -webkit-text-fill-color: rgba(0, 122, 255, .3);
    :hover{
      cursor: initial;
    }
  }
  
  :hover{
    cursor: pointer;
  }
`

const AddRecipe = ({history}) => {
    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const {addRecipe} = useRecipesContext()

    const onSubmit = () => {
        addRecipe({id: uuid(), title: title, ingredients: ingredients})
        history.push('/list')
    }

    const isInvalid = () => {
        return title === '' || ingredients === ''
    }

    return (
        <div>
            <Navigation title={'New Recipe'} BackComponent={<IconLink title="Cancel" to={'/'}>Cancel</IconLink>}/>

            <Form>
                <Input type="text" placeholder={'Title'} value={title} onChange={(e) => setTitle(e.target.value)}
                       title="Recipe Title"
                />

                <TextArea form='recipeForm' placeholder={'Ingredients'} value={ingredients}
                          title="Recipe Ingredients"
                          onChange={(e) => setIngredients(e.target.value)}/>

                <SubmitButton title="Add Recipe" disabled={isInvalid()} onClick={onSubmit}>Add Recipe</SubmitButton>
            </Form>

        </div>
    )
}

export default withRouter(AddRecipe)