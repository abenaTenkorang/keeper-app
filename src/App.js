import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Note
        title="This is the title"
        content="This is the content"
      />
      <Footer />
    </div>
  );
} export default App;
