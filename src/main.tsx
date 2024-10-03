import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import Product from './pages/Product'
import Detail from './pages/Detail'
import store from './redux/store'
const router = createBrowserRouter([{
  path: "/",
  element: <Home/>
},{
  path: "/products",
  element: <Product/>
},{
  path: "/product/:id",
  element: <Detail/>
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
