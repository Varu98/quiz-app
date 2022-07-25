import {
  Box,
  Button,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const QuizDisplay = () => {
  return (
    <Box p={6}>
      <VStack spacing={'6'} margin={'auto'}>
        <Heading>Game Of Thrones</Heading>
        <Heading maxWidth={'2xl'} as="h4" size={'md'}>
          “Not this time. We’ll be staying at the finest castles and inns. No
          one turns away a Lannister.”
        </Heading>
        <Text>– S01E03, “Lord Snow”</Text>
        <Box maxW={'xs'}>
          <Box
            as="video"
            src="https://c.tenor.com/e3cmrjXcmqwAAAPo/game-of-thrones-i-demand-a-trial.mp4"
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
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              sapiente quam inventore quaerat amet ut odit beatae voluptatibus
              obcaecati? Repudiandae asperiores perferendis accusantium aliquam
              totam in consequuntur sequi blanditiis beatae!
            </Text>
          </GridItem>
          <GridItem>
            <Button py={10} w={'100%'}>
              Tyrion Lannister
            </Button>
          </GridItem>
          <GridItem>
            <Button py={10} w={'100%'}>
              Jamie Lannister
            </Button>
          </GridItem>
          <GridItem span>
            <Button py={10} w={'100%'} span>
              Cersie Lannister
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default QuizDisplay;
