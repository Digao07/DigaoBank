// src/services/login.test.ts
import { login } from './login';

// Mocking the alert function
global.alert = jest.fn();

describe('login', () => {
  it('deve exibir uma mensagem de boas-vindas ao ser chamado', () => {
    login();
    expect(global.alert).toHaveBeenCalledWith('Bem-vindo ao Digao Bank!');
  });
});
