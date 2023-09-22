import { createContext, useEffect, useState } from "react"
import { useAuthApi } from "../hooks/useAuthApi"


export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export default function AuthProvider({children}) {

    const setToken = (token) => {
        localStorage.setItem('authtoken', token)
   }


    const [authorization, setAuth] = useState(false)
    const [user, setUser] = useState({})

    const api = useAuthApi()

    useEffect(() => {

        const varificarToken = async () => {
            
            const tokenSalvo = localStorage.getItem('authtoken')

            if(tokenSalvo){
                const userData = await api.validarToken(tokenSalvo)
                console.log(userData)
            
                if(userData){
                    setUser(userData)
                    setAuth(true)
                } else {
                    setToken('')
                }
            }
        }

        varificarToken()

    }, [])

   const entrar = async (email , password) => {
        const userData = await api.entrar(email, password)
        if(userData) {
            setUser(userData)
            setAuth(true)
            setToken(userData.token)
        } 
   }


   const sair = () => {
        setUser({})
        setToken('')
        console.log(user)
   }
   

  return (
    <AuthContext.Provider value={{user, entrar, sair, authorization}}>
        {children}
    </AuthContext.Provider>
  )
}


