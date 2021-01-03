import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const APP_ID = '6c4d9439';
  const APP_KEY = 'c87dda81a39a5084cb991ce98be967f3';
  
  useEffect(() => {
    
  }, []);


 const getRecipes = async () => {
   const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
   const data = await response.json();
   console.log(data);
 }

  
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-btn" type="submit">
          search
        </button>
      </form>
    </div>
  );
}

export default App;
