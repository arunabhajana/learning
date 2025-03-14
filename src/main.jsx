import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Homepage from './pages/homepage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/app' element={<App />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
