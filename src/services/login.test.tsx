// src/services/__tests__/login.test.ts
import { login } from './login';

describe('login', () => {
  const mockEmail = 'rodrigo@hotmail.com';
  const mockPassword = '123456';

  it('deve retornar true caso o email e a senha sejam válidos', async () => {
    const response = await login(mockEmail, mockPassword);
    expect(response).toBeTruthy();
  });

  it('deve retornar false caso o email seja inválido', async () => {
    const response = await login('email@invalido.com', mockPassword);
    expect(response).toBeFalsy();
  });

  it('deve retornar false caso a senha seja inválida', async () => {
    const response = await login(mockEmail, 'senha_invalida');
    expect(response).toBeFalsy();
  });
});
