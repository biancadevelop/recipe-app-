import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './recipe'

function App() {

  const APP_ID = '6c4d9439';
  const APP_KEY = 'c87dda81a39a5084cb991ce98be967f3';

  const [recipes, setRecipes] = useState([]);
  const [Search, setSearch] = useState('');
  
  useEffect(() => {
    getRecipes();
  }, [Search]);

//this gets the data from the API 
 const getRecipes = async () => {
   const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
   const data = await response.json();
   setRecipes(data.hits);
   console.log(data.hits);
 }

 //function for the search input, makes it able to type inside seach
 const updateSearch = e => {
  setSearch(e.target.value);
  console.log(Search);
 }

  
  return (
    <div className="App">
      <form className="search-form">
        <input onChange={updateSearch} value={Search} className="search-bar" type="text"/>
        <button className="search-btn" type="submit">
          search
        </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe 
        kay={recipe.recipe.label} //this just gets rid of a react error for needing keys
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
