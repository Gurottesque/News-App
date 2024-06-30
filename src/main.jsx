<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { NewsApi } from './api/NewsApi.js'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ApiProvider api={NewsApi}>
      <App />
    </ApiProvider>
  </Router>,
<<<<<<< HEAD
)
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
>>>>>>> ea1b2b21334f3f2cd1fadf184d7e199ab2c86eab
=======
)
>>>>>>> 9ded50788140697f07ac207ee1c774ffadf3b9c2
