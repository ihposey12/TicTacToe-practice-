import { useState } from 'react'
import { calculateWinner } from '../helper'
import Board from './Board'

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner
}