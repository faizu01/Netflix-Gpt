import { createSlice } from "@reduxjs/toolkit";

const hamBurgerSlice=createSlice({
    name:"hamburger",
    initialState:{
        toggleHamBurger:false,
        toggleSign:false,
    },
    reducers:{
        setToggleHamBurger:(state)=>{
            state.toggleHamBurger=!state.toggleHamBurger
        },
        setToggleSign:(state)=>{
            state.toggleSign=!state.toggleSign
        }
    }
})

export const {setToggleHamBurger,setToggleSign} =hamBurgerSlice.actions;
export default hamBurgerSlice.reducer;