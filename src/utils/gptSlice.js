import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        toggleGptSearch:false,
        movieNames:null,
        movieNamesResults:null,
        searchQuery:null
    },
    reducers:{
        addToggleGptSearch:(state)=>{
            state.toggleGptSearch=!state.toggleGptSearch;
        },
        addRecommendedMovies:(state,action)=>{
            const {movieNames,movieNamesResults}=action.payload;
            state.movieNames=movieNames;
            state.movieNamesResults=movieNamesResults;
        },
        setSearchQuery:(state,action)=>{
            state.searchQuery=action.payload
        }
    }
})

export const {addToggleGptSearch,addRecommendedMovies,setSearchQuery}=gptSlice.actions;
export default gptSlice.reducer;