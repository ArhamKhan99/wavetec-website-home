import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme:'dark',
};

const themesSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
   
  },
});

export const { setTheme } = themesSlice.actions;
export default themesSlice.reducer;