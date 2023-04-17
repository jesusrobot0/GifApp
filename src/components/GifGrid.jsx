import '../styles/GifGrid.css'

export function GifGrid({ category }) {
  return (
    <section className="Grid">
      <h2 className="Grid__title">{category}</h2>
    </section>
  )
}
