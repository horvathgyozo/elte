import Buttons from "./Buttons";
import Hangman from "./Hangman";
import Result from "./Result";
import Word from "./Word";
import { wordList } from "https://cdn.jsdelivr.net/gh/vimtaai/elte-efop-feladattar@926d45a525eecee2f8ca159faa585192263ab196/tasks/hangman/solutions/04/words.js";
import { useState } from "react";

const random = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

const App = () => {
  console.log("App kezdete");
  // Application state (data)
  const maxBadTips = 9;
  const word = "alma";
  const [tips, setTips] = useState([]);
  const buttonText = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";

  // Event handlers
  const handleClick = (letter) => {
    // const newTips = JSON.parse(JSON.stringify(tips));
    setTips([...tips, letter]);
    // setTips(tips.concat(letter));
  };

  // Computed values
  const won = word.split("").every((letter) => tips.includes(letter));
  // const lost = ... // rossz tippek száma >= maxBadTips
  const letters = word.split("").map((letter) => ({
    letter,
    visible: tips.includes(letter),
    // missing: ... // lost és letter nincs benne a tippekben
  }));

  return (
    <>
      <h1>Hangman</h1>

      <Word letters={letters} won={won} />

      <button>New game</button>
      <Buttons onClick={handleClick} />

      <Result />

      <Hangman />
    </>
  );
};

export default App;
