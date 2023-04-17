import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { Header } from './components/Header'
import { GifGrid } from './components/GifGrid'

/**
 * GifExpertApp es el componente principal de la aplicación que permite
 * agregar y mostra categorías de GIFs.
 */

export default function GifApp() {
  const [categories, setCategories] = useState([])

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <Header />
      <AddCategory onAddCategory={addCategory} />
      <main>
        <div className="wrapper">
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </div>
      </main>
    </>
  )
}
