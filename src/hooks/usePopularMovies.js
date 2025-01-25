import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const usePopularMovies = () => {

// Fetch Data from TMDB API and update and store

const dispatch = useDispatch();

const popularMovies = useSelector((store) => store.movies.popularMovies )

const getPopularMoives = async () => {

  const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);

  const json = await data.json();
  console.log(json.results);

  dispatch(addPopularMovies(json.results)); // put the 20 movies from the above api call inside the store

};

useEffect(() => {
  !popularMovies && getPopularMoives(); // memoization
}, []);
}

export default usePopularMovies;