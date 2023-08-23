import { WINNER_COMBOS } from "../components/constants"
export const checkWinnerFrom = (boardToCheck) => {
  //revisamos todas las combinaciones ganadoras
  //para ver si X u O gano
for (const combo of WINNER_COMBOS) {
  const [a, b, c] = combo
  if (
    boardToCheck[a] &&
    boardToCheck[a] == boardToCheck[b] &&
    boardToCheck[a] == boardToCheck[c]
  ) {
    return boardToCheck[a]
  }
}
//si no hay ganador
return null
}