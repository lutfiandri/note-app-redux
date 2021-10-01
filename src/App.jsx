import { useState } from 'react';
import logo from './logo.svg';
import Input from './components/Input';
import NoteList from './components/NoteList';
import Navbar from './components/Navbar';
import useActiveUser from './hooks/auth/useActiveUser';

function App() {
  useActiveUser();
  return (
    <>
      <Navbar />
      <main className="container my-4">
        <Input />
        <NoteList />
      </main>
    </>
  );
}

export default App;
