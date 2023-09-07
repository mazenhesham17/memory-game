import { Button, Center, ChakraProvider, HStack, VStack } from '@chakra-ui/react';
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
  const [currentLevel, setCurrentLevel] = useState(0);
  let { n, m } = levels[currentLevel];
  const [currentMoves, setCurrentMoves] = useState(n * m + 1);
  const [totalMoves, setTotalMoves] = useState(n * m + 1);
  const [board, setBoard] = useState(generateBoard(n, m));


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

  const updateCurrentMoves = (val) => {
    setCurrentMoves(val);
  }

  const updateTotalMoves = (val) => {
    setTotalMoves(val);
  }

  const updateBoard = (n, m) => {
    setBoard(generateBoard(n, m));
  }


  useEffect(() => {
    let { n, m } = levels[currentLevel];
    updateCurrentMoves(n * m + 1);
    updateTotalMoves(n * m + 1);
    updateBoard(n, m);
  }, [currentLevel]);

  return (
    <ChakraProvider>
      <Center>
        <VStack>
          <Header score={currentScore} action={reset} />
          <Board tiles={board} level={currentLevel + 1} ></Board>
          <Button onClick={updateLevel}> Update  </Button>
          <HStack>
            <Button onClick={() => incrementScore(10)} > update score </Button>
            <Button onClick={() => updateCurrentMoves(currentMoves - 1)} > decrement moves </Button>
            <Button onClick={() => { updateTotalMoves(totalMoves + 1); updateCurrentMoves(currentMoves + 1) }} > update moves </Button>
          </HStack>
          <Bar moves={currentMoves} totMoves={totalMoves} />
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
