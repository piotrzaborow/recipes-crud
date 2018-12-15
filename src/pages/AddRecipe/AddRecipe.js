import React, {useState, Fragment} from 'react'
import {useRecipesContext} from "../../context"
import uuid from 'uuid/v4'
import {Link} from "react-router-dom"
import {withRouter} from "react-router-dom"
import Navigation from "../../components/Navigation/Navigation"
import {Icon} from 'react-icons-kit'
import {iosPlusEmpty} from 'react-icons-kit/ionicons/iosPlusEmpty'
import {iosArrowBack} from 'react-icons-kit/ionicons/iosArrowBack'
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
  font-size: 15px;
`

const TextArea = styled.textarea`
  padding: 15px;
  border:none;
  border-bottom: 1px solid rgba(0,0,0, 0.15);
  background-color: #fff;
  outline:none;
  font-size: 15px;
  resize: vertical;
`

const SubmitButton = styled.input`
  padding: 20px;
  border: none;
  background-color: #fff;
  outline:none;
  margin-top: 20px;
  color: rgb(0, 122, 255);
  font-size: 15px;
  
  :disabled{
    background-color: rgba(255,255,255, .3);
    color: rgb(0, 122, 255, .3);
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

    const submit = e => {
        addRecipe({id: uuid(), title: title, ingredients: ingredients})
        history.push('/list')
        e.preventDefault()
    }

    const isInvalid = () => {
        return title === '' || ingredients === ''
    }

    return (
        <div>
            <Navigation title={'New Recipe'} BackComponent={<IconLink to={'/'}>Cancel</IconLink>}/>

            <Form onSubmit={(e) => submit(e)} id={'recipeForm'}>
                <Input type="text" placeholder={'Title'} value={title} onChange={(e) => setTitle(e.target.value)}/>

                <TextArea form='recipeForm' placeholder={'Ingredients'} value={ingredients}
                          onChange={(e) => setIngredients(e.target.value)}/>

                <SubmitButton type='submit' value='Add Recipe' disabled={isInvalid()}/>
            </Form>

        </div>
    )
}

export default withRouter(AddRecipe)