import './App.css';
import React, { useState, useEffect } from 'react';
import starPeopleFetch from './services/starPeopleFetch';
import Hero from './HeroesList/Hero';
function App() {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    starPeopleFetch().then((response) => {
      return setHeroes(response.results);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header"></header>
      {heroes.map((hero) => {
        return <Hero hero={hero} key={Math.random()} />;
      })}
    </div>
  );
}

export default App;
