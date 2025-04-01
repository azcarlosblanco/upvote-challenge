import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UpVotesProvider } from './contexts/UpVotesContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UpVotesProvider>
      <App />
    </UpVotesProvider>
  </StrictMode>,
)
