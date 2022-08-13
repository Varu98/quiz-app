import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Router from './Routes/Router';
import Navbar from './Components/Navbar';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Router />
    </ChakraProvider>
  );
}

export default App;
