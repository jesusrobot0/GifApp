import '../styles/GridItem.css'

export function GifItem({ gif: { title, url, username } }) {
  return (
    <article className="GridItem">
      <div className="GridItem__overlay"></div>
      <div className="GridItem__description">
        <p>{title}</p>
        <span>
          {username && 'by'} {username}
        </span>
      </div>
      <img src={url} alt={title} className="GridItem__image" />
    </article>
  )
}
