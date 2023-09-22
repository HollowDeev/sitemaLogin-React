import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export function PainelAdm() {

  const auth = useContext(AuthContext)

  const navigate = useNavigate()

  const level = auth.user.level

  const handleButton = () => {
    auth.sair() 
    navigate('/')
  }

  return (
    
    <div>
      <h1>Painel de administracao</h1>
      {level >= 1 && <button onClick={() => navigate('/adm/lista-colaboradores')}>Lista de colaboradores</button>}
      <br />
      <button onClick={() => handleButton()}>Sair</button>
    </div>

  )
}
