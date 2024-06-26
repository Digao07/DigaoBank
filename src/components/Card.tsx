// src/components/Card.tsx
import React from 'react';
import { Box } from '@chakra-ui/react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
      {children}
    </Box>
  );
};

export default Card;
