import { createSlice } from '@reduxjs/toolkit';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, googleAuthProvider } from '../firebase';

const initialState = {
  uid: null,
  email: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
    },
  },
});

export const { setActiveUser } = userSlice.actions;

export default userSlice.reducer;
