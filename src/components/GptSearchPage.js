import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
    <div className='absolute w-screen -z-10'>
        <img src= {BG_URL} />
      </div>

      {/* Gpt search bar
          Gpt Moive Suggestion
       */}
       
       <GptSearchBar/>
       <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
