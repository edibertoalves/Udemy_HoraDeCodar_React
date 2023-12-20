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

  // starts the secret word game
  const startGame = (() => {
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
