import React, {useState} from 'react'
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

const Form = styled.form`
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
  padding: 20px 15px;
  border: none;
  border-bottom: 1px solid rgba(0,0,0, 0.15);
  background-color: #fff;
  outline:none;
  font-size: 16px;
  margin: 0;
`

const TextArea = styled.textarea`
  padding: 15px;
  border:none;
  border-bottom: 1px solid rgba(0,0,0, 0.15);
  background-color: #fff;
  outline:none;
  font-size: 16px;
  resize: vertical;
  margin: 0;
`

const NavButton = styled.div`
  outline: none;
  text-decoration: none;
  color:  rgb(0, 122, 255);
  padding: 10px;
  
  :hover{
  cursor: pointer;
  }
`

const DeleteButton = styled.button`
  padding: 20px;
  border: none;
  background-color: #fff;
  outline:none;
  margin-top: 20px;
  color: rgb(255, 59, 48);
  font-size: 15px;
  border-radius: 0px;
  width: 100%;
  
  :hover{
    cursor: pointer;
  }
`

const Field = styled.div`
  font-weight: ${props => props.bold ? 'bold' : 'initial'};
  font-size: ${props => props.bold ? '22px' : '16px'};
  padding-left: 20px;
  padding-top: 20px;
`

const EditRecipe = ({match, history}) => {
    const recipeId = match.params.recipeId
    const {getRecipe, updateRecipe, deleteRecipe} = useRecipesContext()

    const recipe = getRecipe(recipeId)
    const [title, setTitle] = useState(recipe.title || '')
    const [ingredients, setIngredients] = useState(recipe.ingredients || '')
    const [editable, setEditable] = useState(false)

    const submitUpdate = () => {
        updateRecipe(recipeId, {
            ...recipe,
            title: title,
            ingredients: ingredients
        })
        setEditable(false)
    }

    return (
        <div>
            <Navigation title={'Recipe Details'}
                        BackComponent={<IconLink to={'/'}><Icon icon={iosArrowBack} size={32}/>Back</IconLink>}
            >
                {editable && <NavButton title="Done Editing" onClick={() => submitUpdate()}>Done</NavButton>}
                {!editable && <NavButton title="Edit Recipe" onClick={() => setEditable(true)}>Edit</NavButton>}
            </Navigation>


            {!editable &&
            <div>
                <Field bold>{title}</Field>
                <Field>{ingredients}</Field>
            </div>
            }

            {editable &&
            <Form>
                <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} disabled={!editable}
                       title="Recipe Title"/>
                <TextArea value={ingredients} onChange={(e) => setIngredients(e.target.value)} disabled={!editable}
                          title="Recipe Ingredients"/>
            </Form>
            }

            <DeleteButton title="Delete Recipe" onClick={() => {
                deleteRecipe(recipeId)
                history.push('/list')
            }}>
                Delete Recipe
            </DeleteButton>
        </div>
    )
}

export default withRouter(EditRecipe)