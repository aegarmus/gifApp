import { useState } from 'react';


export const InputSearch = ({ onNewSearch }) => {

    const [ inputSearch, setInputSearch ] = useState('');

    const onInputChange = ({ target }) => {
        setInputSearch( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputSearch.trim().length <= 1) return;
        setInputSearch('');
        onNewSearch( inputSearch.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputSearch }
                onChange={ onInputChange }
            />
        </form>
    )
}
