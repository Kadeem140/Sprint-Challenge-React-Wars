import React, {useState , useEffect }  from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
     const [ starWarsData, setStarWarsData ] = useState([]);

      useEffect(() => {
          axios.get(`https://swapi.co/api/people`)
            .then(res => {
              setStarWarsData(res.data.results)
              })
            .catch(err => console.log(err))
    
      },[]);
    
  return (
    <div className="App">
      <h1 className="Header">Kadeem's React StarWars!</h1>

      <CharacterCard starWarsData={starWarsData}/>
    </div>
  );
}

export default App;
