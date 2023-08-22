const TURNS = {
  X:"x",
  O:"o"
}

const board = Array(9).fill(null)



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className="">
      <h1>TIC TAC TOE</h1>
    </main>
      
      <section className="game">
      {
        board.map((_, index) => {
          <div className="cell" key ={index}>
            <span className="cell_content">
              {index}
            </span>
          </div>
        })
      }
      </section>
    </>
  )
}

export default App
