import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// CSS
import "./App.css";

// React
import { useCallback, useEffect, useState } from "react";

// data
import { wordsList } from "./data/words";

// Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 0, name: "start" },
  { id: 1, name: "game" },
  { id: 2, name: "end"  }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = useCallback(() => {
    // píck a random category
    const categories = Object.keys(words)

    //const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // test category with console.log
    console.log(category)

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]    

    // test word with console.log
    console.log(word)

    return { category, word }

  })

  // starts the secret word game
  const startGame = (() => {
    // pick word and category
    const { category, word } = pickWordAndCategory()

    // create an array of letters and convert to lowercase
    let wordLetters = word.split('')
    wordLetters = wordLetters.map(letter => letter.toLowerCase())
    
    console.log(word, category)
    console.log(wordLetters)

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)
    
    setGameStage(stages[1].name)
  })
  
  // process the letter input 
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // restarts the secret word game 
  const retry = () => {
    setGameStage(stages[0].name)
  }

  // ends the secret word game
  const endGame = () => {
    setGameStage(stages[2].name);
  };

  return (
    <>
      <div className="App">
        {gameStage === 'start' && <StartScreen startGame={startGame} />}
        {gameStage === 'game' && <Game verifyLetter={verifyLetter} endGame={endGame} />}  
        {gameStage === 'end' && <GameOver retry={retry} />}        
      </div>
    </>
  );
}

export default App;
