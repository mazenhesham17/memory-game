import { Center, ChakraProvider, VStack } from '@chakra-ui/react';
import { generateLevels } from './logic/levels';
import { generateBoard } from './logic/board';
import Header from './components/Header';
import Bar from './components/Bar';
import Board from './components/Board';
import './App.css';
import { useEffect } from 'react';

function App() {
  const curLevel = 20 ;
  const levels = generateLevels() ;
  return (
    <ChakraProvider>
      <Center>
        <VStack>
          <Header></Header>
          <Board tiles={generateBoard( levels[curLevel].n , levels[curLevel].m )} ></Board>
          <Bar moves={6} totMoves={10} ></Bar>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
