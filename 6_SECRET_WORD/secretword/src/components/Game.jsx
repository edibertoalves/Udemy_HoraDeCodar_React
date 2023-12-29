import "./Game.css";
import { useState, useRef } from "react";

// implement the verifyLetter function
const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  // submit letter input
  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus();

    
  };

  // render the game
  // return the game
  return (
    <div className="game">
      <p className="points">
        <span>Pontos: {score}</span>
      </p>
      <h1>Advinhe a palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>
        Você ainda tem <span>{guesses}</span> tentativa(s).
      </p>
      <div className="wordContainer">
        {letters.map((letter, i) => {
          return guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          );
        })}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letterInput"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button onClick={verifyLetter}>Jogar</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Letras ja utilizadas:</p>
        {wrongLetters.map((letter, i) => {
          return <span key={i}>{letter},</span>;
        })}
      </div>
    </div>
  );
};

export default Game;
