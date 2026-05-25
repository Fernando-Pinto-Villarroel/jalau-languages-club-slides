import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/theme.css'
import App from '@shared/App'
import { slides } from './slides/registry'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App slides={slides} />
  </StrictMode>
)
