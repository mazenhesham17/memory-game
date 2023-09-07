import { Center, ChakraProvider, VStack } from '@chakra-ui/react';
import { generateLevels } from './logic/levels';
import { generateBoard } from './logic/board';
import Header from './components/Header';
import Bar from './components/Bar';
import Board from './components/Board';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const levels = generateLevels() ;
  const [currentScore,setCurrentScore] = useState(null) ;
  const [currentLevel,setCurrentLevel] = useState(null) ;
  const [currentMoves,setCurrentMoves] = useState(null) ;
  const [totalMoves,setTotalMoves] = useState(null) ;
  const [board,setBoard] = useState(null) ;

  const levelUp = () => {
    const updatedLevel = currentLevel + 1;
    setCurrentLevel(updatedLevel);
    console.log("hello");
  
    // Use the updatedLevel variable to access the correct level configuration
    const levelConfig = levels[updatedLevel];
  
    if (levelConfig) {
      setTotalMoves(levelConfig.n * levelConfig.m + 1);
      setCurrentMoves(levelConfig.n * levelConfig.m + 1);
      setBoard(generateBoard(levelConfig.n, levelConfig.m));
    }
  };
  
  const init = () => {
    setCurrentScore(0);
    console.log("Hello2");
    setCurrentLevel(-1);
    levelUp() ;
  };
  
  useEffect(() => {
    init();
  }, []);
  
  // Watch for changes in currentLevel and trigger levelUp when it changes
  { useEffect(() => {
    setInterval( () => {
      if ( currentLevel < levels.length ){
        levelUp() ;
      }
    } , 10000) ;
  }, []);  }

  return (
    <ChakraProvider>
      <Center>
        <VStack>
          <Header score={currentScore} />
          <Board tiles={ board || [[]] } level={currentLevel+1} ></Board>
          <Bar moves={currentMoves} totMoves={totalMoves} />
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
