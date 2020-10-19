import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import InfoCardList from "./components/InfoCardList";
import EmojiCardList from "./components/EmojiCardList";
import Footer from "./components/Footer";
import values from "./emojis";
import SearchInput from "./components/SearchInput";
import TonePicker from "./components/TonePicker";

function App() {
  const [emojis, setEmojis] = useState(values);
  const [tone, setTone] = useState("default-skin-tone");

  const onSearch = (value) => {
    if (!value.length) {
      setEmojis(values);
      return;
    }

    const list = values.filter((x) => {
      return (
        x.unicodeName.includes(value) ||
        x.subGroup.includes(value) ||
        x.character.includes(value) ||
        (x.variants && x.variants.find((v) => v.character.includes(value)))
      );
    });
    setEmojis(list);
  };

  const onChangeTone = () => {
    if (tone === "default-skin-tone") {
      setTone("light-skin-tone");
    } else if (tone === "light-skin-tone") {
      setTone("medium-light-skin-tone");
    } else if (tone === "medium-light-skin-tone") {
      setTone("medium-skin-tone");
    } else if (tone === "medium-skin-tone") {
      setTone("medium-dark-skin-tone");
    } else if (tone === "medium-dark-skin-tone") {
      setTone("dark-skin-tone");
    } else if (tone === "dark-skin-tone") {
      setTone("default-skin-tone");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="app">
      <div className="content">
        <Header title="Emoji Library" />
        <InfoCardList list={values} />

        <div className="flex">
          <SearchInput onInput={onSearch} />
          <TonePicker skinTone={tone} onChangeTone={onChangeTone} />
        </div>

        <EmojiCardList skinTone={tone} list={emojis} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
