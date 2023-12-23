import "./Game.css";

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
        <form>
          <input type="text" name="letterInput" maxLength="1" />
          <button onclick={verifyLetter}>Jogar</button>
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
