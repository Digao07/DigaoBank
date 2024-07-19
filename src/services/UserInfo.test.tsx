// src/pages/__tests__/UserInfo.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import UserInfo from '../pages/UserInfo';

describe('UserInfo', () => {
    const renderWithContext = (isLoggedIn: boolean) => {
        render(
            <BrowserRouter>
                <AppContext.Provider value={{ user: 'Rodrigo', isLoggedIn, setIsLoggedIn: jest.fn() }}>
                    <UserInfo />
                </AppContext.Provider>
            </BrowserRouter>
        );
    };

    it('deve exibir informações do usuário se estiver logado', () => {
        renderWithContext(true);
        expect(screen.getByText('Informações do Usuário')).toBeInTheDocument();
        expect(screen.getByText('Nome: Rodrigo')).toBeInTheDocument();
        expect(screen.getByText('Email: rodrigo@hotmail.com')).toBeInTheDocument();
    });

    it('deve redirecionar para a página de login se não estiver logado', () => {
        renderWithContext(false);
        expect(screen.queryByText('Informações do Usuário')).not.toBeInTheDocument();
    });
});
