import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContextProvider from './Context/AuthContextProvider.jsx'
import { Route, RouterProvider } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={Route}></RouterProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
