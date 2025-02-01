import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greetings from './Greetings.jsx'
import ProductInfo from './ProductInfo.jsx'
import UserList from './UsersList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greetings />
    <App />
    <ProductInfo />
    <UserList />
  </StrictMode>,
)
