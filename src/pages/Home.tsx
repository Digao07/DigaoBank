import { Box, Center, Input, Text } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { login } from "../services/login";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { DButton } from "../components/DButton";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password);

        if(!loggedIn){
            return alert('Email ou senha inválidos');
        }

        setIsLoggedIn(true);
        changeLocalStorage({ login: true });
        navigate('/conta/1');
    };

    return(
        <Box padding="25px">
            <Card>
                <Center>
                    <Text as="h1" fontSize="2xl" fontWeight="bold">
                        Faça o login
                    </Text>
                </Center>
                <Input
                    placeholder='email'
                    marginY='10px'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    placeholder='password'
                    type='password'
                    marginY='10px'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Center>
                    <DButton
                        onClick={() => validateUser(email, password)}
                    />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;
