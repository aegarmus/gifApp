import { useState } from 'react'

export const InputSearch = () => {

    const [ inputSearch, setInputSearch ] = useState('')

    const onInputChange = ({target}) => {
        console.log(target.value)
        setInputSearch(target.value)
    }


    return(
        <form>
            <input 
                type="text" 
                placeholder="Ingrese el contenido del gif que deseas buscar"
                value = {inputSearch}
                onChange = {onInputChange}
                />
        </form>       
    )
}