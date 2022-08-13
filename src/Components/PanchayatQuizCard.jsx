import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { useData } from '../Context/DataContext';
import {
  ADD_PANCHAYAT_SELECTED_OPTION,
  ADD_PANCHAYAT_USER_ANSWER,
} from '../Reducers/Constants';
import { useNavigate } from 'react-router-dom';

const PanchayatQuizCard = () => {
  const { dataState, dataDispatch } = useData();
  const { panchayat, panchayatSelectedOption, panchayatAnswersByUser } =
    dataState;

  const [arrayIndex, setArrayIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(panchayatSelectedOption, panchayatAnswersByUser);
  });

  const OptionButton = ({ item }) => {
    return panchayatSelectedOption.some(option => option === item) ? (
      <Button
        onClick={() => {
          dataDispatch({ type: ADD_PANCHAYAT_SELECTED_OPTION, payload: item });
        }}
        colorScheme={'green'}
        py={10}
        w={'100%'}
      >
        {item}
      </Button>
    ) : (
      <Button
        onClick={() => {
          dataDispatch({ type: ADD_PANCHAYAT_SELECTED_OPTION, payload: item });
        }}
        colorScheme={'blue'}
        py={10}
        w={'100%'}
      >
        {item}
      </Button>
    );
  };

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

  return (
    <>
      {arr.slice(arrayIndex, arrayIndex + 1).map(quiz => {
        return (
          <VStack spacing={'6'} margin={'auto'}>
            <Heading>Panchayat</Heading>
            <Heading maxWidth={'2xl'} as="h4" size={'md'}>
              Weeknd hota hai sir, log party karte hai weekend pe… aur main kya
              kar raha tha? Lauki cheel raha tha yaha pe…
            </Heading>
            <Text>{`Panchayat, Abhishek Tripathi (Sachiv Ji)`}</Text>
            <Box maxW={'xs'}>
              <Box
                as="video"
                src={quiz.gif}
                type="video/mp4"
                autoPlay
                muted
                loop
              />
            </Box>
            <SimpleGrid
              p={6}
              w={['30', 'md', 'md']}
              columns={'1, 1fr'}
              spacing={10}
            >
              <GridItem>
                <Text>{quiz.question}</Text>
              </GridItem>
              {quiz.options.map(item => (
                <GridItem>
                  <OptionButton item={item} />
                </GridItem>
              ))}
            </SimpleGrid>
            <HStack
              minW={'xl'}
              justifyContent={'space-between'}
              alignContent={'space-between'}
            >
              <Button
                width={'full'}
                onClick={() => {
                  arrayIndex === 4
                    ? navigate('/results-panchayat')
                    : setArrayIndex(prev => prev + 1);

                  dataDispatch({
                    type: ADD_PANCHAYAT_USER_ANSWER,
                    payload: panchayatSelectedOption,
                  });
                }}
              >
                Next
              </Button>
            </HStack>
          </VStack>
        );
      })}
    </>
  );
};

export default PanchayatQuizCard;
