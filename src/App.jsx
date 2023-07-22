import { useState } from "react"
import { GifCards } from "./components/GifCards"
import { InputSearch } from "./components/InputSearch"

export const App = () => {

  const [search, setSearch] = useState([])

  const onAddSearch = (newSearch) => {
    if (search.includes(newSearch)) return
    setSearch([setSearch, ...search])
  }

  return (
    <>
      <h1>Bienvenido a mi App</h1>

      {/* input */}
      <InputSearch onNewSearch={onAddSearch}  />

      {/* mostrar tarjetas */}
      <GifCards search = {search}/>
    </>
  )
}