import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import InfoCardList from './components/InfoCardList';
import EmojiService from './services/emojiService';
import values from './emojis';

function App() {
  const [emojis, setEmojis] = useState(values);

  // useEffect(() => {
  //   EmojiService.get().then(result => {
  //     setEmojis(result)
  //   })
  // }, [setEmojis]);

  useEffect(() => {
    debugger;
  },[])

  return (
    <div className="App">
      <Header title="Emoji Library" />
      <InfoCardList list={emojis} />

    </div>
  );
}

export default App;
