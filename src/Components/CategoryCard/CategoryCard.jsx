import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaArrowAltCircleRight, FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CategoryCard = () => {
  const navigate = useNavigate();
  return (
    <Box
      background={'whiteAlpha.50'}
      borderRadius="md"
      maxW={'sm'}
      boxShadow="lg"
      p={'5'}
    >
      <VStack spacing={'5'}>
        <Image src="https://m.media-amazon.com/images/M/MV5BNGI0NzNiZjItZDMyMS00ODZjLWIxZDAtNDc5ZGQ0NzQ0ZDAzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" />
        <Heading>Game Of Thrones</Heading>
        <Text fontSize={'sm'} as="b">
          "A mind needs books like a sword needs a whetstone." — Tyrion
          Lannister
        </Text>
        <Text noOfLines={'3'} fontSize={'xs'} as={'i'}>
          Game of Thrones is an American fantasy drama television series created
          by David Benioff and D. B. Weiss for HBO. It is an adaptation of A
          Song of Ice and Fire, a series of fantasy novels by George R. R.
          Martin, the first of which is A Game of Thrones. The show was shot in
          the United Kingdom, Canada, Croatia, Iceland, Malta, Morocco, and
          Spain. It premiered on HBO in the United States on April 17, 2011, and
          concluded on May 19, 2019, with 73 episodes broadcast over eight
          seasons.
        </Text>
        <Button
          rightIcon={<FaArrowAltCircleRight />}
          size={'lg'}
          variant="ghost"
          colorScheme={'blue'}
          onClick={() => {
            navigate('rules');
          }}
        >
          Play
        </Button>
      </VStack>
    </Box>
  );
};

export default CategoryCard;
