import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Detail from './pages/Detail'

const router = createBrowserRouter([{
  path: "/",
  element: <Home/>
},{
  path: "/product",
  element: <Product/>
},{
  path: "/detail",
  element: <Detail/>
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
