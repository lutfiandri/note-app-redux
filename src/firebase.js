// import { initializeApp } from 'firebase/app';
// import { GoogleAuthProvider } from 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDwxCwN2eZQNQ4F02iOE6mFsHqYQG3WRMY',
  authDomain: 'note-app-9e0e9.firebaseapp.com',
  projectId: 'note-app-9e0e9',
  storageBucket: 'note-app-9e0e9.appspot.com',
  messagingSenderId: '459304610267',
  appId: '1:459304610267:web:660fd8f25bd4edf3b99ffe',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
