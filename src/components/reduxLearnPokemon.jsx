import { useState } from 'react';
import { useGetPokemonByNameQuery } from '../redux/pokemon/pokemon';

const ReduxLearnPokemon = () => {
    const [pokemonName, setPokemonName] = useState('')
  const { data, error, isLoading, isFetching, isError } = useGetPokemonByNameQuery(pokemonName, {
      skip: pokemonName === '',
      refetchOnFocus: true
  });

  const handelSubmit = e => {
      e.preventDefault();
    //   console.log(e.target.elements.pokemonName.value)
      setPokemonName(e.target.elements.pokemonName.value);
  }
  return (
    <>
      <form autoComplete="off" onSubmit={handelSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Search</button>
      </form>

      {isFetching && <h3>Загружаем...</h3>}

      {isError && error.data === 'Not Found' && <p>Упс, извените нет {pokemonName} </p>}

      {data && !isFetching && isError && <h2>{data.name}</h2>}
    </>
  );
};

export default ReduxLearnPokemon;
