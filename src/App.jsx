import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import CategoryCard from './Components/CategoryCard/CategoryCard';
import HomePage from './Pages/HomePage';
import RulesPage from './Pages/RulesPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <HomePage /> */}
      <RulesPage />
    </ChakraProvider>
  );
}

export default App;
