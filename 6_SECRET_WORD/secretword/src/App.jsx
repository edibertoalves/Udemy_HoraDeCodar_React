import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// CSS
import "./App.css";

// React Hooks
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

const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(50)


  const pickWordAndCategory = (() => {
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
  const startGame = useCallback(() => {
    // clear all letters
    setGuessedLetters([])
    setWrongLetters([])
    setGuesses(guessesQty)
    setScore(50)



    // pick word and category
    const { category, word } = pickWordAndCategory()

    // create an array of letters and convert to lowercase
    let wordLetters = word.split('')
    wordLetters = wordLetters.map(letter => letter.toString().toLowerCase())
    
    console.log(word, category)
    console.log(wordLetters)

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    
    setGameStage(stages[1].name)
  })
  
  // process the letter input 
  const verifyLetter = (letter) => {
    console.log(letter)
    
    const normalizedLetter = letter.toString().toLowerCase() 
    // check if letter has already been guessed
    if(guessedLetters.includes(normalizedLetter) || 
        wrongLetters.includes(normalizedLetter)) {
      return
    }

    // push guessed letters or remove a guess letters
    if(letters.includes(normalizedLetter)) {
      setGuessedLetters(actualGuessedLetters => [...actualGuessedLetters, normalizedLetter])
    } else {
      setWrongLetters(actualWrongLetters => [...actualWrongLetters, normalizedLetter])
      
      // remove a guess word
      setGuesses(actualGuesses => actualGuesses - 1)
    }

    // console.log the guessed letter and the wrong letters
    console.log(guessedLetters)
    console.log(wrongLetters)
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  // restarts the secret word game 
  useEffect(() => {
    if(guesses <= 0) {
      // reset all values
      clearLetterStates()

      // restart the game
      setGameStage(stages[2].name)
    }
  }, [guesses])

  // check win condition
  useEffect(() => {
    // if all letters are guessed
    const uniqueLetters = [...new Set(letters)]

    console.log(uniqueLetters)

    // win condition
    if(guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => (actualScore += 100))

      // restart the game with new word
      startGame()
    }

    
  }, [guessedLetters])

  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);

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
        {gameStage === 'game' && <Game verifyLetter={verifyLetter} endGame={endGame} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score}/>}  
        {gameStage === 'end' && <GameOver retry={retry} score={score} />}       

      </div>
    </>
  );
}

export default App;
