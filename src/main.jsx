import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Home from './Components/Home/Home'
import Donations from './Components/Donations/Donations'
import Statistics from './Components/Statistics/Statistics'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donations',
        element: <Donations></Donations>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
