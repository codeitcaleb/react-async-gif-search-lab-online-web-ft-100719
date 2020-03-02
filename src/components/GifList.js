import React from 'react'

export const GifList = ({ gifs }) => {
  return (
    <div>
      <ul>
        {gifs.map(gif => (
          <li>
            <img src={gif.images.original.url} />
          </li>
        ))}
      </ul>
    </div>
  )
}
