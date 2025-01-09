import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useTrendingMovies = () => {

// Fetch Data from TMDB API and update and store

const dispatch = useDispatch();

const getTrendingMoives = async () => {

  const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_OPTIONS);

  const json = await data.json();
  console.log(json.results);

  dispatch(addTrendingMovies(json.results)); // put the 20 movies from the above api call inside the store

};

useEffect(() => {
  getTrendingMoives();
}, []);
}

export default useTrendingMovies;