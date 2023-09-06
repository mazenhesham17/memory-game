import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Bar from './components/Bar';
import Board from './components/Board';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Header></Header>
      <Board></Board>
      <Bar moves={6} totMoves={10} ></Bar>
    </ChakraProvider>
  );
}

export default App;
