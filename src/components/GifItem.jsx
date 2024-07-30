import React from 'react'

export const GifItem = ({tittle, url}) => {

  return (
    //<li key={id}>{tittle}</li>
    <div className='card'>
        <img src={url} alt={tittle} />
        <p>{tittle}</p>
    </div>
  )
}
