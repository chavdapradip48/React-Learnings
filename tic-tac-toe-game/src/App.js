import "./App.css";
import {useState} from "react"


export default function App() {
  return (
      <Board />
  );
}

function Board(){
  const boardSize = 3;
  const defaultValue = "";
  const [xIsNext, setXIsNext] = useState(true);
  const [won, setWon] = useState("");
  const [squares, setSquares] = useState(() => 
      Array.from({ length: boardSize }, () => Array(boardSize).fill(defaultValue)));

  function handleSquareClick(row, col){
    const nextSquares = squares.slice();

    if(won) {
      alert("!! "+won+" player already won the match.")
      return;
    }

    if(nextSquares[row][col] ) {
      alert("!! Already "+nextSquares[row][col]+" filled this square.")
      return;
    }

    nextSquares[row][col] = xIsNext ? "X" : "O";

    setXIsNext(!xIsNext)
    setSquares(nextSquares);
    const result = calculateWinner(squares);

    if(result){
      setWon(result);
      alert("!! "+result+" Player won the match.")
      return;
    }
  }

  return (
    <div className="board">
      {squares.map((row, index) => {
          return <SquareRow row={row} rowIndex={index} handler={handleSquareClick} />;
      })}   
    </div>
  );
}

function SquareRow({row, rowIndex, handler}) {
  return (
    <div className="square-row ">
      {row.map((col, colIndex) => {
          return <Square boxValue={col} row={rowIndex} col={colIndex} handler={handler} />;
      })}
    </div>
  );
}

function Square({boxValue, row, col, handler}) {
  
  return (<>
    <div className="square" onClick={() => {handler(row,col)}}>
      <div className="square-data">{boxValue}</div>
    </div>
  </>);
}

function calculateWinner(squares) {
  const winningPosibilities = [
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]],
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]],
    [[0,0],[1,1],[2,2]],
    [[0,2],[1,1],[2,0]]
  ];
  
  for (let i = 0; i < winningPosibilities.length; i++) {
    
    const [a, b, c] = winningPosibilities[i];

    if(squares[a[0]][a[1]] && squares[a[0]][a[1]] === squares[b[0]][b[1]] &&
      squares[a[0]][a[1]] === squares[c[0]][c[1]]) {
        return squares[a[0]][a[1]];
    }
  }
  return null;
}
