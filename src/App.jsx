import { useState } from 'react';
import logo from './logo.svg';
import Input from './components/Input';
import NoteList from './components/NoteList';
import Navbar from './components/Navbar';

function App() {
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
