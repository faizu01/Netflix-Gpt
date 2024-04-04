import { createSlice } from "@reduxjs/toolkit";

const hamBurgerSlice = createSlice({
  name: "hamburger",
  initialState: {
    toggleHamBurger: false,
  },
  reducers: {
    setToggleHamBurger: (state) => {
      state.toggleHamBurger = !state.toggleHamBurger;
    },
  },
});

export const { setToggleHamBurger, setToggleSign } = hamBurgerSlice.actions;
export default hamBurgerSlice.reducer;
