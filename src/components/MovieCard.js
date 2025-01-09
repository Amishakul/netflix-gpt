import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4 hover:cursor-pointer'>
      <img alt='Movie Card' src={IMG_CDN_URL + posterPath} className='shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 ' />
    </div>
  )
}

export default MovieCard
