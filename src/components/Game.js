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
        
        if(winner || squares[i]) return

        squares[i] = x0
        setHistory([...historyPoint, squares])
        setStepNumber(historyPoint.length)
        setXIsNext(!xIsNext)
    }

    const jumptTo = (step) => {
        setStepNumber(step)
        setXIsNext(step % 2 === 0)
    }

    const renderMoves = () => {
        
    }
}