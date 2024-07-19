interface IDigaoBank {
    login: boolean;
}

const digaoBank: IDigaoBank = {
    login: false
};

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('digaobank');
}

export const createLocalStorage = (): void => {
    localStorage.setItem('digaobank', JSON.stringify(digaoBank));
}

export const changeLocalStorage = (digaoBank: IDigaoBank): void => {
    localStorage.setItem('digaobank', JSON.stringify(digaoBank));
}
