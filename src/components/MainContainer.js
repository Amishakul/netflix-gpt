import { useSelector } from 'react-redux'
import VideoBg from './VideoBg';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies); // these has 20 movies from the store

    if (!movies) return; // early return -> if there are no movies present in the api call return without fetching anything from the api

    const mainMovie = movies[0];
    console.log(mainMovie);

    const {original_title, overview, id} = mainMovie;



  return (
    <div>
      <VideoTitle title={original_title} overview={overview} movieId={id} />
      <VideoBg/>
    </div>
  )
}

export default MainContainer;
