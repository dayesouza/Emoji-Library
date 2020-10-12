import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import InfoCardList from "./components/InfoCardList";
import EmojiCardList from "./components/EmojiCardList";
import Footer from "./components/Footer";
import values from "./emojis";
import SearchInput from "./components/SearchInput";

function App() {
  const [emojis, setEmojis] = useState(values);

  const onSearch = (value) => {
    if (!value.length) {
      setEmojis(values);
      return;
    }

    const list = values.filter((x) => {
      return x.unicodeName.includes(value) || x.subGroup.includes(value);
    });
    setEmojis(list);
  };

  useEffect(() => {}, []);

  return (
    <div className="app">
      <div className="content">
        <Header title="Emoji Library" />
        <InfoCardList list={values} />

        <SearchInput onInput={onSearch} />

        <EmojiCardList list={emojis} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
