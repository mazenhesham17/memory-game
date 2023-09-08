import {  Button, Center, ChakraProvider, HStack, VStack } from '@chakra-ui/react';
import { generateLevels } from './logic/levels';
import { generateBoard } from './logic/board';
import Header from './components/Header';
import Bar from './components/Bar';
import Board from './components/Board';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const levels = generateLevels();
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore') || 0);
  const [currentLevel, setCurrentLevel] = useState(0);
  let { n, m } = levels[currentLevel];
  const [currentMoves, setCurrentMoves] = useState(n * m + 1);
  const [totalMoves, setTotalMoves] = useState(n * m + 1);
  const [board, setBoard] = useState(generateBoard(n, m));
  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false);


  const reset = () => {
    setCurrentScore(0);
    setCurrentLevel(0);
  }

  const updateLevel = () => {
    if (currentLevel + 1 == levels.length)
      return false;
    setCurrentLevel(currentLevel + 1);
    return true;
  }

  const incrementScore = (val) => {
    setCurrentScore(currentScore + val);
  }

  const incrementAllMoves = () => {
    setTotalMoves(totalMoves + 1);
    setCurrentMoves(currentMoves + 1);
  }

  const decrementMoves = () => {
    setCurrentMoves(currentMoves - 1);
  }

  const updateBoard = (n, m) => {
    setBoard(generateBoard(n, m));
  }


  useEffect(() => {
    let { n, m } = levels[currentLevel];
    setTotalMoves(n * m + 1);
    setCurrentMoves(n * m + 1);
    updateBoard(n, m);
  }, [currentLevel]);

  useEffect(() => {
    if (currentScore >= highScore) {
      localStorage.setItem("highScore", currentScore);
      setHighScore(currentScore);
    }
  }, [currentScore]);

  const toggle = () => {
    setWon(!won);
  }

  return (
    <ChakraProvider>
      <Center>
        <VStack>
          <Header score={currentScore} highScore={highScore} action={reset} />
          <Board tiles={board} flip={flipState} setFlip={setFlipState} correct={correctState} level={currentLevel + 1} ></Board>
          <Button onClick={updateLevel}> Update  </Button>
          <HStack>
            <Button onClick={() => incrementScore(10)} > update score </Button>
            <Button onClick={decrementMoves} > decrement moves </Button>
            <Button onClick={incrementAllMoves} > update moves </Button>
          </HStack>
          <Bar moves={currentMoves} totMoves={totalMoves} />
          <Button onClick={toggle}> toggle </Button>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
