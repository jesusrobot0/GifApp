import { useEffect, useState } from 'react'
import { getGifs } from '../api/giphy'
import { GifItem } from './GifItem'
import '../styles/GifGrid.css'

export function GifGrid({ category }) {
  const [gifs, setGifs] = useState([])

  const getGifsByCategory = async () => {
    const gifs = await getGifs(category)
    setGifs(gifs)
  }

  useEffect(() => {
    // Tanto esta forma como la funcion getGifsByCategory funcionan
    // getGifs(category).then((gifs) => setGifs(gifs))

    getGifsByCategory()
  }, [])

  return (
    <section className="Grid">
      <h2 className="Grid__title">{category}</h2>
      <div className="Grid__list">
        {gifs.map((gif) => (
          <GifItem key={gif.id} gif={gif} />
        ))}
      </div>
    </section>
  )
}
