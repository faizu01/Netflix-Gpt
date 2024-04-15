import { createSlice } from "@reduxjs/toolkit";

const hamBurgerSlice = createSlice({
  name: "hamburger",
  initialState: {
    toggleHamBurger: false,
    toggleuser:false,
  },
  reducers: {
    setToggleHamBurger: (state) => {
      state.toggleHamBurger = !state.toggleHamBurger;
    },
    setToggleUser:(state)=>{
      state.toggleuser=!state.toggleuser;
    }
  },
});

export const { setToggleHamBurger, setToggleSign ,setToggleUser} = hamBurgerSlice.actions;
export default hamBurgerSlice.reducer;
