import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Home from './Components/Home/Home'
import Statistics from './Components/Statistics/Statistics'
import DonationPage from './Components/DonationPage/DonationPage'
import DonationDetails from './Components/DonationDetails/DonationDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('data.json')
      },
      {
        path: '/donation/:id',
        element: <DonationDetails></DonationDetails>
      },
      {
        path: '/donations',
        element: <DonationPage></DonationPage>
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
