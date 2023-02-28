import React from "react";
import Card from '../Card';
import { v4 as uuidv4 } from 'uuid';



const PokemonList = ({data}) => {
  return <section>{data.map((pokemon) => <Card data={pokemon} key={uuidv4()} />)}</section>;
};

export default PokemonList;
