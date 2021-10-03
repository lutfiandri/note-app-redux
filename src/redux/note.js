import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  value: [],
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      const note = {
        id: uuidv4(),
        created_at: action.payload.created_at,
        title: action.payload.title,
        body: action.payload.body,
      };

      state.value = [...state.value, note];
    },
    deleteNote: (state, action) => {
      state.value = state.value.filter((note) => note.id !== action.id);
    },
    deleteAllNotes: (state) => {
      state.value = [];
    },
  },
});

export const { addNote, deleteNote, deleteAllNotes } = noteSlice.actions;

export default noteSlice.reducer;
