import { useContext, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { AppContext } from '../components/AppContext';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
    const { isLoggedIn, user } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) {
        return null; // Adicionamos este retorno para evitar renderização antes do redirecionamento
    }

    return (
        <Box padding="25px">
            <Text fontSize="2xl" fontWeight="bold">
                Informações do Usuário
            </Text>
            <Text fontSize="xl">
                Nome: {user}
            </Text>
            <Text fontSize="xl">
                Email: rodrigo@hotmail.com
            </Text>
        </Box>
    );
};

export default UserInfo;
