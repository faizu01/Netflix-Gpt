import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularPlayingMovies: null,
    topRatedPlayingMovies: null,
    upcomingPlayingMovies: null,
    movieDetails: null,
    movieVideos: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularPlayingMovies: (state, action) => {
      state.popularPlayingMovies = action.payload;
    },
    addTopRatedPlayingMovies: (state, action) => {
      state.topRatedPlayingMovies = action.payload;
    },
    addUpcomingPlayingMovies: (state, action) => {
      state.upcomingPlayingMovies = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    addMovieVideos: (state, action) => {
      state.movieVideos = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularPlayingMovies,
  addTopRatedPlayingMovies,
  addUpcomingPlayingMovies,
  addMovieDetails,
  addMovieVideos,
} = moviesSlice.actions;
export default moviesSlice.reducer;
