import React from "react";
import { render, screen } from '@testing-library/react';
import AllPokemons from "./AllPokemons";
import { BrowserRouter } from "react-router-dom";

describe("AllPokemons", () => {
  test("matches snapshot", () => {
    let pokemon = {
      id: 5,
      name: "charmeleon",
      sprites:
      {
        other:
        {
          "official-artwork":
            { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" }
        }
      },
      types: [
        {
          type: {
            name: "normal"
          }

        },
        {
          type: {
            name: "flying"
          }

        }
      ]

    }

    const pokemonCreated = {
      id: 6,
      name: "pokemon creado por el usuario",
      sprites:
      {
        other:
        {
          "official-artwork":
            { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" }
        }
      }

    }
    render(<BrowserRouter>
      <AllPokemons data={pokemon} created={pokemonCreated} i={4} />
    </BrowserRouter>

    );
    expect(screen).toMatchSnapshot();
  });
});
