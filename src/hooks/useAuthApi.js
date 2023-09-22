import { users } from "../data/users"

export const useAuthApi = () => ({

    validarToken: async(token) => {
        const user = users.find(user => user.token === token)
        if(user){
            return Promise.resolve({
                name: user.name,
                email: user.email,
                password: user.password,
                level: user.level
            })
        } else {
            return null
        }
    },

    entrar: async (email, password) => {

        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            return Promise.resolve({
                name: user.name,
                email: user.email,
                password: user.password,
                level: user.level,
                token: user.token,
            });
        } else {
            return Promise.reject(new Error('Usuario inválido'))
        }
        
    }

})

