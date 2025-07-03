import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react';
import './index.css';
import { UserProvider } from './contexts/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
        <Analytics />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
