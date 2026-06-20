import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { evenNumbers } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
    <evenNumbers/>
    <p>Even numbers: {evenNumbers.join(', ')}</p>
  </StrictMode>,
)
  