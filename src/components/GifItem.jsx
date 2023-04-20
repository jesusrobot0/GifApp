import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast, { Toaster } from 'react-hot-toast'
import '../styles/GridItem.css'

export function GifItem({ gif: { title, url, username, urlShort } }) {
  const notify = () =>
    toast.success('Gif Copiado', {
      position: 'bottom-right',
      style: {
        boxShadow: 'none',
        border: '1px solid #ccc',
      },
    })

  return (
    <>
      <CopyToClipboard text={urlShort}>
        <article className="GridItem">
          <div className="GridItem__overlay" onClick={notify}></div>
          <div className="GridItem__description">
            <p>{title}</p>
            <span>
              {username && 'by'} {username}
            </span>
          </div>
          <img src={url} alt={title} className="GridItem__image" />
        </article>
      </CopyToClipboard>
      <Toaster />
    </>
  )
}
