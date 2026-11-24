import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { login, getToken } from './api'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  if (getToken()) return <Navigate to="/" replace />

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(username, password)
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <form className="card" onSubmit={onSubmit}>
      <h1>Iniciar sesión</h1>
      <label htmlFor="user">Usuario</label>
      <input id="user" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <label htmlFor="pass">Contraseña</label>
      <input id="pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      {error && <p className="error" role="alert">{error}</p>}
      <button type="submit">Ingresar</button>
    </form>
  )
}
