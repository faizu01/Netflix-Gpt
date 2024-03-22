import { createSlice } from "@reduxjs/toolkit";
const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        toggleGptSearch:false,
    },
    reducers:{
        addToggleGptSearch:(state)=>{
            state.toggleGptSearch=!state.toggleGptSearch;
        }
    }
})

export const {addToggleGptSearch}=gptSlice.actions;
export default gptSlice.reducer;