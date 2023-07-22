import { useState } from 'react';
import { InputSearch, GifCards } from './components';

export const App = () => {
    
    const [ searches, setSearches ] = useState([ ]);
    
    const onAddSearch = ( newSearch ) => {
        if ( searches.includes(newSearch) ) return;
        setSearches([ newSearch, ...searches ]);
    }
    

    return (
        <>

            <h1>GifExpertApp</h1>

            <InputSearch
                onNewSearch={ (value) => onAddSearch(value) }
            />                                                                                          

            { 
                searches.map( ( search ) => (
                    <GifCards  
                        key={ search } 
                        search={ search } />
                ))
            }

        </>
    )
}
