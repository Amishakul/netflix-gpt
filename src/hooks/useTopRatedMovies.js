import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useTopRatedMovies = () => {

// Fetch Data from TMDB API and update and store

const dispatch = useDispatch();

const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

const getTopRatedMoives = async () => {

  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);

  const json = await data.json();
  console.log(json.results);

  dispatch(addTopRatedMovies(json.results)); // put the 20 movies from the above api call inside the store

};

useEffect(() => {
  !topRatedMovies && getTopRatedMoives();
}, []);
}

export default useTopRatedMovies;