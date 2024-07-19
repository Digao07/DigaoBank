import React, { useContext } from 'react';
import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react';
import './Header.css';
import { AppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../../services/storage';

const Header: React.FC = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({login: false})
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex className='header' padding='5px' backgroundColor='#c90220' borderRadius='10px' marginBottom='20px'>
      <Box>
        <Center>
          <Text fontSize='3xl' fontWeight='bold'>
            Digao Bank
          </Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              onClick={() => logout()}
            >
              Sair
            </Button>
          </>
        )
      }
    </Flex>
    
  );
};

export default Header;