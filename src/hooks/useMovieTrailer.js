import { useDispatch } from "react-redux";
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = () => {

    const dispatch = useDispatch();

  // const [trailerId, setTrailerId] = useState(null); // for handling dynamic video trailer on the website


    // fetch trailer video and updating the store with trailer video data
    
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/558449/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        console.log(json);

        const filterData = json.results.filter((video) => video.type ==="Trailer");
        const trailer = filterData.length ? filterData[0]: json.results[0];
        console.log(trailer);

        // setTrailerId(trailer.key);

        dispatch(addTrailerVideo(trailer));

    };

    useEffect(() => {
    getMovieVideos();
    }, []);





}

export default useMovieTrailer;