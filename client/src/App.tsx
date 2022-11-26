import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'

import { Main } from './features/main';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Main />
      </div>
    </ChakraProvider>
  );
}

export default App;
