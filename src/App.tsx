// src/App.tsx
import React from 'react';
import { ChakraProvider, Box, Center, Text } from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import Card from './components/Card';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Header />
        <Card>
          <Center>
            <Text as="h1" fontSize="2xl" fontWeight="bold">
              Faça o login
            </Text>
          </Center>
          <LoginForm />
        </Card>
      </Box>
    </ChakraProvider>
  );
}

export default App;
