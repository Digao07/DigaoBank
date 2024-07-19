import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage";

const digaoBank = {
    login: false
};

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
    it('Deve retornar o objeto no localstorage com a chave digaoBank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
        getAllLocalStorage();
        expect(mockGetItem).toHaveBeenCalledWith('digaobank');
    });

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage();
        expect(mockSetItem).toHaveBeenCalledWith('digaobank', JSON.stringify(digaoBank));
    });

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(digaoBank);
        expect(mockSetItem).toHaveBeenCalledWith('digaobank', JSON.stringify(digaoBank));
    });
});