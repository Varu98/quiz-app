import React from 'react';
import {
  Button,
  ChakraProvider,
  Heading,
  HStack,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import HomePage from './Pages/HomePage';
import RulesPage from './Pages/RulesPage';
import QuizDisplay from './Pages/QuizDisplay';
import Router from './Routes/Router';
import { useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Router />
    </ChakraProvider>
  );
}

export default App;
