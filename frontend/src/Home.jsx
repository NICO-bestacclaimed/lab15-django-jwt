import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPrivado, getToken, logout } from './api'

export default function Home() {
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  const salir = () => {
    logout()
    navigate('/login')
  }

  useEffect(() => {
    // token vencido o inválido: se elimina y se vuelve al login
    getPrivado().then(setData).catch(salir)
  }, [])

  return (
    <div className="card">
      <h1>Página privada</h1>
      {data ? (
        <>
          <p>Respuesta del backend: <b>{data.mensaje}</b></p>
          <p>Usuario: <b>{data.usuario}</b></p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
      <p className="token">Token: {getToken()?.slice(0, 40)}...</p>
      <button onClick={salir}>Cerrar sesión</button>
    </div>
  )
}
