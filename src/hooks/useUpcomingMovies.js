import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useUpcomingMovies = () => {

// Fetch Data from TMDB API and update and store

const dispatch = useDispatch();

const getUpcomingMoives = async () => {

  const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);

  const json = await data.json();
  console.log(json.results);

  dispatch(addUpcomingMovies(json.results)); // put the 20 movies from the above api call inside the store

};

useEffect(() => {
  getUpcomingMoives();
}, []);
}

export default useUpcomingMovies;