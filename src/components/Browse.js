import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';


const Browse = () => {

useNowPlayingMovies();
usePopularMovies();
useTrendingMovies();
useUpcomingMovies();
useTopRatedMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

      {/* 
      
      Main Container
      - Video Background
      - Video Title
      Secondary Container
      - MovieList * N (there can be many rows)
      - cards * N
      
      
      
       */}
    </div>
  )
}

export default Browse
