import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { NewsApi } from './api/NewsApi.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={NewsApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)
