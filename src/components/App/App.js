import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {AddRecipePage, RecipesListPage} from '../../pages'
import RecipesContext from "../../context"

const App = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        if (window.localStorage.getItem('recipes')) {
            setRecipes(JSON.parse(window.localStorage.getItem('recipes')))
        }
    }, [])

    useEffect(() => localStorage.setItem('recipes', JSON.stringify(recipes)), [recipes])


    const addRecipe = (recipe) => {
        setRecipes([...recipes, recipe])
    }

    const updateRecipe = () => {

    }

    const deleteRecipe = () => {

    }

    return (
        <RecipesContext.Provider value={{recipes: recipes, addRecipe: addRecipe}}>
            <Router>
                <Switch>
                    <Route exact path='/' component={RecipesListPage}/>
                    <Route path='/list' component={RecipesListPage}/>
                    <Route path='/add' component={AddRecipePage}/>
                </Switch>
            </Router>
        </RecipesContext.Provider>
    )
}

export default App