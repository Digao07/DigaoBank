const conta = {
    email: 'rodrigo@hotmail.com',
    password: '123456',
    name: 'Rodrigo Barros',
    balance: 2000.00,
    id: "1"
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
    
})