import React from 'react';
import './App.css';
import { Header } from './components/Header';
import InfoCardList from './components/InfoCardList';

function App() {
  return (
    <div className="App">
      <Header title="Emoji Library" />
      <InfoCardList />

    </div>
  );
}

export default App;
