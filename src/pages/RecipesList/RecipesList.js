import React from 'react'
import styled from 'styled-components'
import {useRecipesContext} from "../../context"
import {Link, withRouter} from 'react-router-dom'
import Navigation from "../../components/Navigation/Navigation"
import {Icon} from 'react-icons-kit'
import {iosPlusEmpty} from 'react-icons-kit/ionicons/iosPlusEmpty'
import {iosArrowForward} from 'react-icons-kit/ionicons/iosArrowForward'

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0px;
`
const ListElement = styled.li`
  padding: 15px;
  border-bottom: 1px solid rgba(0,0,0, 0.15);
  background-color: #fff;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  :hover{
    cursor: pointer;
  }
`

const IconLink = styled(Link)`
  outline: none;
  text-decoration: none;
  color: rgb(0, 122, 255);
`

const RecipesList = ({history}) => {

    const {recipes} = useRecipesContext()

    return (
        <div>
            <Navigation title={'Recipes List'}>
                <IconLink to={'/add'} title="Add Recipe"><Icon icon={iosPlusEmpty} size={42}/></IconLink>
            </Navigation>
            <List>
                {recipes.map(recipe =>
                    <ListElement title={recipe.title} key={recipe.id}
                                 onClick={() => history.push(`/edit/${recipe.id}`)}>
                        {recipe.title}
                        <Icon icon={iosArrowForward} size={27}/>
                    </ListElement>
                )}
            </List>
        </div>
    )
}

export default withRouter(RecipesList)