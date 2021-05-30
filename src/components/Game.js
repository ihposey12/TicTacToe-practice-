import { useState } from 'react'
import { calculateWinner } from '../helper'
import Board from './Board'

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])
    const x0 = xIsNext ? 'X' : '0'

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1)
        const current = historyPoint[stepNumber]
        const squares = [...current]
        
        if(winner || squares[i]) return;

        squares[i] = x0
        setHistory([...historyPoint, squares])
        setStepNumber(historyPoint.length)
        setXIsNext(!xIsNext)
    }

    const jumptTo = (step) => {
        setStepNumber(step)
        setXIsNext(step % 2 === 0)
    }

    const renderMoves = () =>
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : 'Go to Start'
            return(
                <li key={move}>
                    <button onClick={() => jumptTo(move)}>{destination}</button>
                </li>
            )
        })
        
    return(
        <>
            <h1>React Tic Tac Toe</h1>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div className='info-wrapper'>
                <div>
                    <h3>History</h3>
                    {renderMoves()}
                </div>
                <h3>{winner ? 'Winner: ' + winner : 'Next Player: ' + x0}</h3>
            </div>
        </>
    )
}

export default Game