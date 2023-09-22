import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

export function Home() {

    const auth = useContext(AuthContext)

    const handleButton = () => {
      auth.sair() 
      window.location.reload()
    }
  return (
    <>
      <div>Home</div>
      <br />
      {auth.authorization && <button onClick={() => handleButton()}>Sair</button>}
    </>
  )
}
