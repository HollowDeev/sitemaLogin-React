
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'

import { PainelAdm } from './Pages/Adm/PainelAdm'
import { Login }from './Pages/Login/Login'

import { PainelColaboradores } from './Pages/Adm/PainelColaboradores'
import { RequireAuth } from './context/requireAuth'

function App() {

  return (
    <>
        <h2>Menu</h2>
        <Link to='/'>Home</Link>
        <Link to='/adm'>Painel Adm</Link>
        <hr />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/adm' element={
            <RequireAuth>
              <PainelAdm />
            </RequireAuth>
          } />
          <Route path='/login' element={<Login />}/>
          <Route path='/adm/lista-colaboradores' element={
            <RequireAuth level='1'>
              <PainelColaboradores />
            </RequireAuth>
          } />
        </Routes>
    </>
  )
}

export default App
