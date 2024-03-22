import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingPlayingMovies } from "../utils/moviesSlice";

const useUpcomingPlayingMovies=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchUpcomingPlayingMovies();
    },[]);

    const fetchUpcomingPlayingMovies=async()=>{
        const Data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', MOVIE_OPTIONS);
        const json=await Data.json();
        dispatch(addUpcomingPlayingMovies(json));

    }

}

export default useUpcomingPlayingMovies;