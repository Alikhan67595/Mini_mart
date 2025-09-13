import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContexProvider from './Contex/AuthContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContexProvider>
   <BrowserRouter>
    <App />
  </BrowserRouter>
    </AuthContexProvider>
  </StrictMode>,
)
