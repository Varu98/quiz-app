import { Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <HStack p={6} justifyContent={'space-between'}>
      <Button
        onClick={() => {
          navigate('/');
        }}
        fontSize={30}
        size={'lg'}
        variant={'unstyled'}
      >
        Quizzly.io
      </Button>
      <ColorModeSwitcher />
    </HStack>
  );
};

export default Navbar;
