import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { newPokemonContext } from "../../../context/newPokemonContext";
import { v4 as uuidv4 } from 'uuid';
import Types from './types.json';


const Form = () => {

  const { /*savePokemon,*/ setSavePokemon } = useContext(newPokemonContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    // console.log(data);

    const newPokemon = {
      id: '-' + data.id,
      name: data.name.toLowerCase(),
      sprites: {
        other: {
          dream_world: {
            front_default: data.image

          },
          home: {
            front_default: data.image

          },
          // eslint-disable-next-line
          ["official-artwork"]: {
            front_default: data.image
          }
        },
      },
      typeOne: data.typeOne,
      typeTwo: data.typeTwo,
      stats: [{ base_stat: data.life }, { base_stat: data.attack }, { base_stat: data.defense }, { base_stat: data.special_attack }, { base_stat: data.special_defense }, { base_stat: data.speed }],
      moves: [{ move: { name: data.nameMove } }],
      weight: data.weight,
      height: data.height
    }
    // console.log(newPokemon);
    if (data.typeOne !== data.typeTwo) {
      setSavePokemon(pokemon => pokemon.concat(newPokemon));
      // console.log(savePokemon);
      alert('Pokemon added!');

    } else {
      alert('Pokemon cannot is the same type twice');
    }

  }
  //PENDIENTE DE REFACTORIZACION
  //Encontrar solucion a porque react-hook-form da error al intentar mapear los inputs debido al metodo register..

  return <section>

    <h2>Create a Pokemon!</h2>

    <form onSubmit={handleSubmit(onSubmit)} >

      <input type='number' placeholder='Id' {...register("id", { required: true, message: "error message" })} />
      <input placeholder='Name of Pokemon' {...register("name", { required: true, minLength: 3, message: "error message" })} />
      <input type='url' placeholder='Url Image' {...register("image", { required: true })} />
      <input type='number' placeholder='Points of Life' {...register("life", { message: "error message" })} />
      <input type='number' placeholder=' Points of attack' {...register("attack", { message: "error message" })} />
      <input type='number' placeholder='Points of defense' {...register("defense", { message: "error message" })} />
      <input type='number' placeholder='Points of special-attack' {...register("special_attack", { message: "error message" })} />
      <input type='number' placeholder='Points of special-defense' {...register("special_defense", { message: "error message" })} />
      <input type='number' placeholder='Points of speed' {...register("speed", { message: "error message" })} />
      <input type='number' placeholder='Weight' {...register("weight", { message: "error message" })} />
      <input type='number' placeholder='Height' min="10"{...register("height", { message: "error message" })} />
      <input placeholder='Name of Move' {...register("nameMove", { minLength: 3, message: "error message" })} />
      <select {...register("typeOne", { required: true, message: "error message" })}>
        {Types.map((type) => <option value={type} key={uuidv4()}>{type}</option>)}
      </select>
      <select {...register("typeTwo")}>
        {Types.map((type) => <option value={type} key={uuidv4()}>{type}</option>)}
      </select>

      <input type="submit" />
    </form>


  </section>;
};

export default Form;