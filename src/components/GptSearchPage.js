import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    <div className='fixed inset-0 -z-10'>
        <img className='w-full h-full object-cover' src= {BG_URL} alt="logo" />
      </div>
      <div className=''>

      {/* Gpt search bar
          Gpt Moive Suggestion
       */}
       
       <GptSearchBar/>
       <GptMovieSuggestions/>
    </div>
    </>
    
  )
}

export default GptSearch
