import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

export function PainelColaboradores() {

    const auth = useContext(AuthContext)

  const navigate = useNavigate()


  const handleButton = () => {
    auth.sair() 
    navigate('/')
    
  }
  return (
    <div>
        <h1>Painel para adicionar e editar colaboradores</h1>
        <button onClick={() => handleButton()}>Sair</button>
    </div>
    
  )
}
