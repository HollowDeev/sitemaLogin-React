import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"


export function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [error, setError] = useState(null)
  
  const auth = useContext(AuthContext)

  
  useEffect(() => {
      if(auth.authorization){
        navigate('/')
      }
  }, [navigate, auth.authorization])

  const handleLogin = async () => {
    try{
       await auth.entrar(email, senha)
       navigate('/')
     } catch (error){
        setError(error.message)
        setEmail('')
        setSenha('')
     }
  }

  return (
    <>
      <h2>Login</h2>
      <label htmlFor="email">Email:</label>
      <input type="text" name='email' value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
      <label htmlFor="email">Senha:</label>
      <input type="password" value={senha} placeholder="senha" onChange={(e) => setSenha(e.target.value)}/>
      <br />
      <button onClick={() => handleLogin()}>Entrar</button>

      {error && <h3>{error}</h3>}
    </>
  )
}
