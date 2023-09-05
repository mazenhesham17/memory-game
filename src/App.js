import { ChakraProvider , Text } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Text>Hello World</Text>
    </ChakraProvider>
  );
}

export default App;
