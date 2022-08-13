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
import { useNavigate } from 'react-router-dom';
import {
  ADD_GOT_SELECTED_OPTION,
  ADD_GOT_USER_ANSWER,
} from '../Reducers/Constants';

const GOTQuizCard = () => {
  const { dataState, dataDispatch } = useData();
  const { gameOfThrones, gotSelectedOption, gotAnswersByUser } = dataState;
  const [arrayIndex, setArrayIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(gotSelectedOption, gotAnswersByUser);
  });
  const OptionButton = ({ item }) => {
    return gotSelectedOption.some(option => option === item) ? (
      <Button
        onClick={() => {
          dataDispatch({ type: ADD_GOT_SELECTED_OPTION, payload: item });
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
          dataDispatch({ type: ADD_GOT_SELECTED_OPTION, payload: item });
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
    gameOfThrones.map(quiz => {
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
            <Heading>Game Of Thrones</Heading>
            <Heading maxWidth={'2xl'} as="h4" size={'md'}>
              “Not this time. We’ll be staying at the finest castles and inns.
              No one turns away a Lannister.”
            </Heading>
            <Text>– S01E03, “Lord Snow”</Text>
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
                    ? navigate('/results-got')
                    : setArrayIndex(prev => prev + 1);

                  dataDispatch({
                    type: ADD_GOT_USER_ANSWER,
                    payload: gotSelectedOption,
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

export default GOTQuizCard;
