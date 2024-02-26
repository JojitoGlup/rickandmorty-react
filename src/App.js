import imageRickandMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Character from './img/components/character';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi =async()=>{
    const api = await fetch('https://rickandmortyapi.com/api/character');

    const characterApi = await api.json();

    setCharacters(characterApi.results);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Character characters={characters} setCharacters={setCharacters}></Character>
        ):(
          <>
          <img src={imageRickandMorty} alt="Rick and Morty" className='img-home'></img>
          <button onClick={reqApi} className='btn-search'>Buscar personajes</button>
          </>
        )}
        
      </header>
    </div>
  );
}

export default App;
