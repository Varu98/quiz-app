import React from 'react';
import { Button, ChakraProvider, Heading, HStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import HomePage from './Pages/HomePage';
import RulesPage from './Pages/RulesPage';
import QuizDisplay from './Pages/QuizDisplay';
import Router from './Routes/Router';
import { useNavigate } from 'react-router-dom';
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
