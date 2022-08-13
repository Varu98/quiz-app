import {
  Button,
  Heading,
  ListItem,
  OrderedList,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { sendData } from '../firebase-config';

const RulesPage = () => {
  const navigate = useNavigate();
  return (
    <SimpleGrid spacing={'10'} px="10" justifyContent="center" minH="100vh">
      <Heading>Rules</Heading>
      <Text maxWidth={'lg'} fontSize="2xl">
        Before we attempt the quiz a few pointers to keep in mind...
      </Text>
      <OrderedList
        borderRadius={'md'}
        m="0"
        shadow="2xl"
        p={['10', '20', '20']}
        spacing={'10'}
        fontSize={['lg', '2xl', '2xl']}
        bgColor={'whiteAlpha.100'}
      >
        <ListItem>There are five questions in Quiz</ListItem>
        <ListItem>You can choose only one option</ListItem>
        <ListItem>4 marks for each Question</ListItem>
        <ListItem>There is no negative marking</ListItem>
      </OrderedList>
      <Button
        onClick={() => {
          navigate('/quiz-display');
        }}
        colorScheme={'green'}
        color={'white'}
        py={10}
      >
        Let's Go!!
      </Button>
      <Button
        onClick={() => {
          // navigate('/');
          // sendData();
          // getData();
        }}
        color={'white'}
        colorScheme={'blue'}
      >
        HomePage
      </Button>
    </SimpleGrid>
  );
};

export default RulesPage;
