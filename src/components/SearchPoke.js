import React from 'react';

const SearchPoke = ({onSearchPoke}) =>{
    return(
        <input
            type='search'
            placeholder='Search for a Poke'
            className='form-control w-25 m-0 p-3 bg-dark bg-opacity-75 text-light border-light text-center'
            onChange={onSearchPoke}
        />
    )
}

export default SearchPoke;