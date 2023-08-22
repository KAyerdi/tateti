import confetti from "canvas-confetti"
import { useState } from "react"
import { Square } from "./components/Square"
import { TURNS, WINNER_COMBOS } from "./components/constants"

function App() {

  const [board, setBoard]  = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard (Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  
  const checkEndGame = (newBoard) => {
    //revisamos si hay un empate
    // si no hay mas espacios vacios
    // en el tablero
    return newBoard.every((square) => square != null)
  }
  const updateBoard = (index) => {
    // no actualizamos esta posicion
    // si ya tiene algo
    if (board[index] || winner) return
    //actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiar el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti ()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) //empate
  }
  }
  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
      {
        board.map((square, index) => {
          return (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
        })
      }
      </section>
      <section className="turn">
        <Square isSelected={turn == TURNS.X}> {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}
        </Square>
      </section>
      {
  winner !== null && (
    <section className="winner">
      <div>
        <h2>
          {winner === false ? 'Empate' : `Gano: ${winner}`}
        </h2>
        <header className="win">
          {winner !== false && <Square>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}

    </main>
  )
}

export default App
