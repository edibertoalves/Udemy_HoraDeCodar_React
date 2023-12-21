import './Game.css'

// implement the verifyLetter function
const Game = ( {verifyLetter} ) => {
  return (
    <div className='game'>
      <p className="points">
        <span>Pontos:</span>
      </p>
      <h1>Advinhe a palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>Dica... </span>
      </h3>
      <p>Você ainda tem <span>XXX</span> tentativa(s).</p>
      <div className="wordContainer">
        <span className='letter'>A</span>
        <span className="blankSquare"></span>
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
        <span>a,</span>
        <span>b, </span>
      </div>
    </div>
  )
}

export default Game