import { Box, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import GOTQuizCard from '../Components/GOTQuizCard';
import PanchayatQuizCard from '../Components/PanchayatQuizCard';
import { useData } from '../Context/DataContext';

const QuizDisplay = () => {
  const { dataState } = useData();
  const { displayQuiz } = dataState;
  const { gameOfThrones, panchayat } = dataState;

  useEffect(() => {
    console.log(gameOfThrones);
    console.log(panchayat);
  }, [dataState]);

  return (
    <Box p={6}>
      {displayQuiz === 'panchayat' ? <PanchayatQuizCard /> : <GOTQuizCard />}
    </Box>
  );
};

export default QuizDisplay;
