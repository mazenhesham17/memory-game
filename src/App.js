import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Score from './components/Score';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider>
      <Header></Header>
      
    </ChakraProvider>
  );
}

export default App;
