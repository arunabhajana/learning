import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greetings from './components/Greetings.jsx'
import Users from './components/Users.jsx'
import ProductList from './components/ProductList.jsx'
import Handle from './components/Functions.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greetings name="Arun" />
    <Users name="Arun" />
    <ProductList name="Iphone" price={1000} rating={5} />
    <Handle />
  </StrictMode>,
)
