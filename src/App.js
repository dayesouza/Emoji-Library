import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import InfoCardList from "./components/InfoCardList";
import EmojiCardList from "./components/EmojiCardList";
import Footer from "./components/Footer";
import values from "./emojis";

function App() {
  // const [emojis, setEmojis] = useState(values);

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
        <InfoCardList list={values} />

        <EmojiCardList list={values} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
