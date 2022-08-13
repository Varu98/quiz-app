import React from 'react';
import { Text, VStack, Heading, Flex, SimpleGrid } from '@chakra-ui/react';
import GOTCategoryCard from '../Components/CategoryCard/GOTCategoryCard';
import PanchayatCategoryCard from '../Components/CategoryCard/PanchayatCategoryCard';
const HomePage = () => {
  return (
    <>
      <Flex
        margin={'auto'}
        wrap={'wrap'}
        justifyContent={'center'}
        fontSize="xl"
      >
        <VStack spacing={'10'}>
          <Heading fontSize={['5xl', '5xl', '9xl']} flexBasis={'1'} as="h1">
            Quizzly.io
          </Heading>
          <Text
            px={['10', '24', '52']}
            flexBasis={'1'}
            fontSize={['sm', 'sm', 'lg']}
          >
            Proficient Test Prep’s Online Testing platform ‘Quizzly’, vows to
            make your test prep better with its fantastic features that help you
            track your progress and improve your scores.
          </Text>
        </VStack>
        <SimpleGrid
          justifyContent="center"
          justifyItems="center"
          templateColumns={{
            base: '1',
            md: 'repeat(2,1fr)',
            lg: 'repeat(2,1fr)',
          }}
          gap="10"
          p="10"
        >
          <GOTCategoryCard />
          <PanchayatCategoryCard />
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default HomePage;
