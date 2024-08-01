import React from 'react'
import PropTypes from "prop-types";

export const GifItem = ({tittle, url}) => {

  return (
    //<li key={id}>{tittle}</li>
    <div className='card'>
        <img src={url} alt={tittle} />
        <p>{tittle}</p>
    </div>
  )
}

GifItem.PropTypes = {
  tittle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}