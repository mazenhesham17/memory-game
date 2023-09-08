import { Button, Center, ChakraProvider, HStack, VStack } from '@chakra-ui/react';
import { generateLevels } from './logic/levels';
import { generateBoard } from './logic/board';
import Header from './components/Header';
import Bar from './components/Bar';
import Board from './components/Board';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // intiliaze the levels
  const levels = generateLevels();
  // intiliaze all the required states
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore') || 0);
  const [currentLevel, setCurrentLevel] = useState(0);
  let { n, m } = levels[currentLevel];
  const [currentMoves, setCurrentMoves] = useState(n * m + 1);
  const [totalMoves, setTotalMoves] = useState(n * m + 1);
  const [board, setBoard] = useState(generateBoard(n, m));
  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false);

  // intiliaze flip states
  const [flipState, setFlipState] = useState(
    Array.from({ length: n }, () =>
      Array.from({ length: m }, () => true)
    )
  );

  // intiliaze correct states
  const [correctState, setCorrectState] = useState(
    Array.from({ length: n }, () =>
      Array.from({ length: m }, () => false)
    )
  );

  const reset = () => {
    setCurrentScore(0);
    setCurrentLevel(0);
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

  const updateFlipState = (i, j, val) => {
    const temp = [...flipState];
    temp[i][j] = val;
    setFlipState(temp);
  }

  const updateCorrectState = (i, j, val) => {
    const temp = [...correctState];
    temp[i][j] = val;
    setCorrectState(temp);
  }

  const updateLevel = () => {
    if (currentLevel + 1 == levels.length)
      return false;
    setCurrentLevel(currentLevel + 1);
    return true;
  }

  useEffect(() => {
    let { n, m } = levels[currentLevel];
    setTotalMoves(n * m + 1);
    setCurrentMoves(n * m + 1);
    setFlipState(Array.from({ length: n }, () =>
      Array.from({ length: m }, () => true)
    ));
    setCorrectState(Array.from({ length: n }, () =>
      Array.from({ length: m }, () => false)
    ));
    updateBoard(n, m);
  }, [currentLevel]);

  useEffect(() => {
    if (currentScore >= highScore) {
      localStorage.setItem("highScore", currentScore);
      setHighScore(currentScore);
    }
  }, [currentScore]);


  useEffect(() => {
    let stack = [];
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < m; j++) {
        if (!flipState[i][j] && !correctState[i][j]) {
          stack.push({ "i": i, "j": j });
        }
      }
    }
    setTimeout(() => {
      if (stack.length === 1) {
        if (board[stack[0].i][stack[0].j] === "+1") {
          incrementAllMoves();
          updateCorrectState(stack[0].i, stack[0].j, true);
        }
      } else if (stack.length == 2) {
        if (board[stack[0].i][stack[0].j] === board[stack[1].i][stack[1].j]) {
          incrementScore(10);
          updateCorrectState(stack[0].i, stack[0].j, true);
          updateCorrectState(stack[1].i, stack[1].j, true);
        } else {
          updateFlipState(stack[0].i, stack[0].j, true);
          updateFlipState(stack[1].i, stack[1].j, true);
        }
        decrementMoves();
      }
    }, 250);

  }, [flipState]);

  useEffect(() => {
    var cnt = 0;
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < m; j++) {
        if (!correctState[i][j]) {
          cnt++;
        }
      }
    }
    if (!cnt) {
      setTimeout(updateLevel, 250);
    }
  }, [correctState]);

  const toggle = () => {
    setWon(!won);
  }

  return (
    <ChakraProvider>
      <Center height={"100vh"}>
        <VStack>
          <Header score={currentScore} highScore={highScore} action={reset} />
          <Board tiles={board} flip={flipState} setFlip={updateFlipState} correct={correctState} level={currentLevel + 1} ></Board>
          <Bar moves={currentMoves} totMoves={totalMoves} />
          <Button onClick={toggle}> toggle </Button>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
