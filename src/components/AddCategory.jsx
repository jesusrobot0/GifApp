import { useState } from 'react'
import '../styles/AddCategory.css'

/**
 * AddCategory es un componente que permite agregar nuevas categorías
 * de GIFs a través de un formulario.
 */

export function AddCategory({ onAddCategory }) {
  const [inputValue, setInputValue] = useState('')

  const handleChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = inputValue.trim()

    if (value.length <= 1) return

    onAddCategory(value)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="FormCategory wrapper">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={handleChange}
        className="FormCategory__input"
      />
      <input type="submit" value="Agregar" className="FormCategory__button" />
    </form>
  )
}
