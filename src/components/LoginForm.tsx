// src/components/LoginForm.tsx
import React from 'react';
import { Input, Center, Button } from '@chakra-ui/react';
import { login } from '../services/login';

const LoginForm: React.FC = () => {
  return (
    <>
      <Input placeholder='email' marginY='10px' />
      <Input placeholder='password' type='password' marginY='10px' />
      <Center>
        <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
          Login
        </Button>
      </Center>
    </>
  );
};

export default LoginForm;
