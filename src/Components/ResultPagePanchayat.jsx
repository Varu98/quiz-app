import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useData } from '../Context/DataContext';
import { INCREMENT_PANCHAYAT_SCORE } from '../Reducers/Constants';

const ResultPagePanchayat = () => {
  const { dataState, dataDispatch } = useData();
  const { panchayat, panchayatScore, panchayatAnswersByUser } = dataState;

  const objectToArr = () => {
    const arr = [];
    //eslint-disable-next-line
    panchayat.map(quiz => {
      for (const item in quiz) {
        arr.push(quiz[item]);
      }
    });
    return arr;
  };
  const arr = [...objectToArr()];

  const answers = arr.slice(0, 5).reduce((accum, curr) => {
    accum.push(curr.answer);
    return accum;
  }, []);

  const updateScore = panchayatAnswersByUser.reduce((accum, curr) => {
    answers.map(answer => (answer === curr ? accum.push(curr) : accum));
    console.log(curr);
    return accum;
  }, []);

  useEffect(() => {
    dataDispatch({
      type: INCREMENT_PANCHAYAT_SCORE,
      payload: updateScore,
    });
    //eslint-disable-next-line
  }, []);
  console.log(updateScore, panchayatScore);
  return (
    <>
      <VStack spacing={10}>
        <Heading>Result Page Panchayat</Heading>
        <Heading>Score: {panchayatScore}</Heading>
        <HStack spacing={20}>
          <VStack alignItems={'flex-start'} spacing={10}>
            <Text fontSize={30}>Answers By User:</Text>
            {panchayatAnswersByUser.map((item, index) => (
              <Box key={index} as="span">
                <Heading size={'md'}>Answer {index + 1}</Heading>
                <Button mt={'4'} colorScheme={'yellow'}>
                  {item}
                </Button>
              </Box>
            ))}
          </VStack>
          <VStack alignItems={'flex-start'} spacing={10}>
            <Text fontSize={30}>Correct Answers:</Text>
            {arr
              .slice(0, 5)
              .map(quiz =>
                quiz.options.filter(option => option === quiz.answer)
              )
              .map((item, index) => (
                <Box key={index} as="span">
                  <Heading size={'md'}>Answer {index + 1}</Heading>
                  <Button mt={'4'} colorScheme={'green'}>
                    {item}
                  </Button>
                </Box>
              ))}
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default ResultPagePanchayat;
