import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { Header } from './components/Header'

/**
 * GifExpertApp es el componente principal de la aplicación que permite
 * agregar y mostra categorías de GIFs.
 */

export default function GifApp() {
  const [categories, setCategories] = useState([])
  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
    // Otra forma: útil para casos en los que no tenemos acceso a la var del state
    // setCategories(categories => ['My Hero Academy', ...categories])
  }
  return (
    <>
      <Header />
      <AddCategory onAddCategory={addCategory} />
    </>
  )
}
