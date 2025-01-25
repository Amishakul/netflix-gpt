import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies = () => {

// Fetch Data from TMDB API and update and store

const dispatch = useDispatch();

const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

const getNowPlayingMovies = async () => {

  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);

  const json = await data.json();
  console.log(json.results);

  dispatch(addNowPlayingMovies(json.results)); // put the 20 movies from the above api call inside the store

};

useEffect(() => {
  // if(!nowPlayingMovies) getNowPlayingMovies();
  !nowPlayingMovies && getNowPlayingMovies(); // memoization
}, []);
}

export default useNowPlayingMovies;