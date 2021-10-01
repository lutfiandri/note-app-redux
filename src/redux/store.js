import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './note';
import themeReducer from './theme';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    theme: themeReducer,
    user: userReducer,
  },
});
