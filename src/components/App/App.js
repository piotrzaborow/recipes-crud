import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {AddRecipePage, EditRecipePage, RecipesListPage} from '../../pages'
import RecipesContext from '../../context'
import withRecipes from '../withRecipes/withRecipes'

const App = ({context}) => {
    return (
        <RecipesContext.Provider value={context}>
            <Router basename='https://piotrzaborow.gitlab.io/recipes-crud/'>
                <Switch>
                    <Route exact path='/' component={RecipesListPage}/>
                    <Route path='/list' component={RecipesListPage}/>
                    <Route path='/add' component={AddRecipePage}/>
                    <Route path='/edit/:recipeId' component={EditRecipePage}/>
                </Switch>
            </Router>
        </RecipesContext.Provider>
    )
}

export default withRecipes(App)