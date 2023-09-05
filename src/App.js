import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header';
import Bar from './components/Bar';

function App() {
  return (
    <ChakraProvider>
      <Header></Header>
      <Bar moves={1} totMoves={10} ></Bar>
      <Bar moves={2} totMoves={10} ></Bar>
      <Bar moves={3} totMoves={10} ></Bar>
      <Bar moves={4} totMoves={10} ></Bar>
      <Bar moves={5} totMoves={10} ></Bar>
      <Bar moves={6} totMoves={10} ></Bar>
      <Bar moves={7} totMoves={10} ></Bar>
      <Bar moves={8} totMoves={10} ></Bar>
      <Bar moves={9} totMoves={10} ></Bar>
      <Bar moves={10} totMoves={10} ></Bar>

    </ChakraProvider>
  );
}

export default App;
