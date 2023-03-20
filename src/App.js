import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { pokemonContext } from './context/pokemonContext';
import { newPokemonContext } from './context/newPokemonContext';



function App() {

  const [namePokemon, setNamePokemon] = useState(""); // Para guardar el nombre del pokemon
  const [objectPokemon, setObjectPokemon] = useState([]); // Para guardar todos los objetos con cada pokemon
  const [arrayNamePokemons, setArrayNamePokemons] = useState([]) //para filtrar
  const [status, setStatus] = useState(0);  //Para llamar a los componentes que renderizan en caso de que la respuesta de la api sea correcta
  const [savePokemon, setSavePokemon] = useState([]); //Para guardar los pokemons que se crean en un array que luego se pasará por context a home para mostrarse en un listado distinto al de pokemons originales.
  // const [newPokemon, setNewPokemon] = useState([]);

  const pokemonsDatas = {
    namePokemon,
    setNamePokemon,
    objectPokemon,
    setObjectPokemon,
    arrayNamePokemons,
    setArrayNamePokemons,
    status,
    setStatus

  }

  const newPokemonsList = {
    savePokemon,
    setSavePokemon
    // newPokemon, setNewPokemon

  }
  return (
    <div className="App">
      <pokemonContext.Provider value = {pokemonsDatas}>
      <newPokemonContext.Provider value={newPokemonsList}>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      </newPokemonContext.Provider>
      </pokemonContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
