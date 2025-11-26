import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: '',
};

const languagesSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLangugae(state, action) {
      state.lang = action.payload;
    },
  },
});

export const { setLangugae } = languagesSlice.actions;
export default languagesSlice.reducer;
