import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './helper/i18n.js'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.Suspense fallback='Loading'>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Suspense>
  </StrictMode>,
)
