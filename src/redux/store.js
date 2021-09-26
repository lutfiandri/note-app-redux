import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './note';
import themeReducer from './theme';

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    theme: themeReducer,
  },
});
