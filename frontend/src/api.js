const API = 'http://127.0.0.1:8000/api'

export const getToken = () => localStorage.getItem('access')

export async function login(username, password) {
  const res = await fetch(`${API}/token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  if (!res.ok) throw new Error('Usuario o contraseña incorrectos')
  const { access, refresh } = await res.json()
  localStorage.setItem('access', access)
  localStorage.setItem('refresh', refresh)
}

export function logout() {
  localStorage.removeItem('access')
  localStorage.removeItem('refresh')
}

export async function getPrivado() {
  const res = await fetch(`${API}/privado`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  })
  if (res.status === 401) throw new Error('401')
  return res.json()
}
