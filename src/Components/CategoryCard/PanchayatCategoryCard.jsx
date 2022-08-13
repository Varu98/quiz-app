import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../Context/DataContext';
import { DISPLAY_PANCHAYAT_QUIZ } from '../../Reducers/Constants';

const PanchayatCategoryCard = () => {
  const navigate = useNavigate();
  const { dataDispatch } = useData();

  return (
    <Box
      background={'whiteAlpha.50'}
      borderRadius="md"
      maxW={'sm'}
      boxShadow="lg"
      p={'5'}
    >
      <VStack spacing={'5'}>
        <Image src="https://assets.gadgets360cdn.com/pricee/assets/product/202205/panchayat_season_2_story_1652177375.jpeg?downsize=680:*" />
        <Heading>Panchayat</Heading>
        <Text fontSize={'sm'} as="b">
          "Jab shaadi hoga, bachcha hoga aur 20 hazzar me ghar chalana padega
          tab aap bhi sharabi ban jayiega." — Drunk Jeep Driver
        </Text>
        <Text noOfLines={'3'} fontSize={'xs'} as={'i'}>
          An engineering graduate, Abhishek, is unable to find a job of his
          calibre. So, he ends up working for a panchayat in a remote Indian
          village and deals with several mundane challenges.
        </Text>
        <Button
          rightIcon={<FaArrowAltCircleRight />}
          size={'lg'}
          variant="ghost"
          colorScheme={'blue'}
          onClick={() => {
            navigate('rules');
            dataDispatch({
              type: DISPLAY_PANCHAYAT_QUIZ,
              payload: 'panchayat',
            });
          }}
        >
          Play
        </Button>
      </VStack>
    </Box>
  );
};

export default PanchayatCategoryCard;
