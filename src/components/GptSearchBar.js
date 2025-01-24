import React, { useRef } from 'react'
import lang from '../utils/LanguageConstants'
import { useDispatch, useSelector } from 'react-redux'
// import client from "../utils/openai";
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import { GEMINI_API } from '../utils/constants';
import { GoogleGenerativeAI } from '@google/generative-ai';

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);

    const dispatch = useDispatch();

    const searchText = useRef(null);

    // Search Movie in TMDB

    const searchMovieTMDB = async (movie) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);

      const json = await data.json()

      return json.results;


    }




    const handleGptSearchClick = async () => {
      console.log(searchText.current.value);

      // Make an API call to Gemini API and get Movies results

      const geminiQuery = "Act as a Movie Recommendation System and suggest some movies for the query : " + searchText.current.value + "only give me names of 5 movies, comma separated like the example the result given ahead Example Result: Gadar, Sholay, Don, Golmal, Koi Mill Gaya ";

      // const gptResults = await client.chat.completions.create({
      //   messages: [{ role: 'user', content: gptQuery }],
      //   model: 'gpt-3.5-turbo',
      // });

      const genAI = new GoogleGenerativeAI(GEMINI_API);

// The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = geminiQuery;

      const geminiResults = await model.generateContent(prompt);
      const response =  geminiResults.response;
      const text = response.text();
      
      if (!geminiResults) {
        console.log("Results are not fetched properly")
      }


      //console.log(gptResults.choices?.[0]?.message.content);
      console.log(text);

      // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane bhi Do yaaro, Padosan

      //const gptMovies = gptResults.choices?.[0]?.message.content.split(","); // will give array of movies

      const geminiMovies = text.split(",");

      // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane bhi Do yaaro", "Padosan"]
      
      // For each movie I will search TMDB API

      // For each array of string I will fetch data from tmdb api

      const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));

      // searchMovieTMDB will not return me 5 movies, it will return me 5 promise, as the API call from tmdb website is an async operation [promise, promise, promise, promise, promise]

      // resolve all the promises and get me the results

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);

      dispatch(addGptMovieResult({movieNames: geminiMovies, movieResults: tmdbResults}));
      
      // geminiMovies -> is from the gemini api result and movieResults -> is movie name lists from tmdb api

    }

  return (

    
    <div className='pt-[10%] flex justify-center '>
      <form className=' bg-black w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>

        <input ref={searchText}  type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>

        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>  {lang[langKey].search}</button> 
      </form>
    </div>
  )
}

export default GptSearchBar
