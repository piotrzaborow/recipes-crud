import React, {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {AddRecipePage, EditRecipePage, RecipesListPage} from '../../pages'
import RecipesContext from '../../context'
import withRecipes from '../withRecipes/withRecipes'


const App = ({context}) => {

    const {recipes, setRecipes} = context

    useEffect(() => {
        if (window.localStorage.getItem('recipes')) {
            setRecipes(JSON.parse(window.localStorage.getItem('recipes')))
        }
    }, [])

    useEffect(() => localStorage.setItem('recipes', JSON.stringify(recipes)), [recipes])

    return (
        <RecipesContext.Provider value={context}>
            <Router>
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