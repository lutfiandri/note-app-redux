import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 'light',
  light: {
    primary: '#eeeeee',
    secondary: 'cccccc',
    accent: '#333333',
  },
  dark: {
    primary: '#111111',
    secondary: '#333333',
    accent: '#eeeeee',
  },
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.type = state.type === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
