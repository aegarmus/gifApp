import { useState } from 'react'

export const InputSearch = ({onNewSearch}) => {

    const [ inputSearch, setInputSearch ] = useState('')

    const onInputChange = ({target}) => {
        console.log(target.value)
        setInputSearch(target.value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(inputSearch.trim().length <= 1) return
        setInputSearch('')
        onNewSearch(inputSearch.trim())


    }

    return(
        <form onSubmit = {onSubmit}>
            <input 
                type="text" 
                placeholder="Ingrese el contenido del gif que deseas buscar"
                value = {inputSearch}
                onChange = {onInputChange}
                />
        </form>       
    )
}