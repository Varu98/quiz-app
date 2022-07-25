import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  OrderedList,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const RulesPage = () => {
  return (
    <SimpleGrid
      spacing={'10'}
      placeContent="center"
      minW={'100vw'}
      minH="100vh"
    >
      <Heading>Rules</Heading>
      <Text maxWidth={'lg'} fontSize="2xl">
        Before we attempt the quiz a few pointers to keep in mind...
      </Text>
      <OrderedList
        borderRadius={'md'}
        m="0"
        shadow="lg"
        p={'10'}
        spacing={'10'}
        fontSize="2xl"
        bgColor={'whiteAlpha.100'}
      >
        <ListItem>There are five questions in Quiz</ListItem>
        <ListItem>You can choose only one option</ListItem>
        <ListItem>4 marks for each Question</ListItem>
        <ListItem>There is no negative marking</ListItem>
      </OrderedList>
    </SimpleGrid>
  );
};

export default RulesPage;
