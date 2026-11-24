# Laboratorio 15 – Seguridad con JWT (Django REST + React)

Alumno: Piero Nicolas Gomez Lucano – Desarrollo de Aplicaciones Empresariales (Tecsup)

- `backend/`: Django REST Framework + SimpleJWT. Endpoints `api/publico`, `api/privado` (requiere token), `api/token/`, `api/token/refresh/`.
- `frontend/`: React (Vite). Login que obtiene el token JWT, ruta privada protegida y cierre de sesión que elimina el token.

## Ejecutar

```bash
# backend
python -m venv venv
venv\Scripts\activate
pip install django djangorestframework djangorestframework_simplejwt django-cors-headers
cd backend
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver

# frontend (otra terminal)
cd frontend
npm install
npm run dev
```

Abrir http://localhost:5173 e iniciar sesión con el usuario creado.
