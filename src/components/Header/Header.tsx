// src/components/Header.tsx
import React from 'react';
import { Center, Text } from '@chakra-ui/react';
import './Header.css';

export const Header: React.FC = () => {
    return (
        <Center className='header' padding='10px' backgroundColor='#FFFFFF' borderRadius='10px' marginBottom='20px'>
            <Text fontSize='3xl' fontWeight='bold'>
                Digao Bank
            </Text>
        </Center>
    );
};
