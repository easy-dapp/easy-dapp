import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MetaMaskProvider } from '@easy-dapp/react/dist'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MetaMaskProvider>
      <App />
    </MetaMaskProvider>
  </React.StrictMode>,
)
