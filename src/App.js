import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import InfoCardList from "./components/InfoCardList";
import Footer from "./components/Footer";
import values from "./emojis";

function App() {
  const [emojis, setEmojis] = useState(values);

  // useEffect(() => {
  //   EmojiService.get().then(result => {
  //     setEmojis(result)
  //   })
  // }, [setEmojis]);

  useEffect(() => {}, []);

  return (
    <div className="app">
      <div className="content">
        <Header title="Emoji Library" />
        <InfoCardList list={emojis} />

        <Footer />
      </div>
    </div>
  );
}

export default App;
