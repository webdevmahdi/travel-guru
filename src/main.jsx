import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Pages/Home/Home.jsx'
import Login from './components/Authentication/Login/Login.jsx'
import Registration from './components/Authentication/Registration/Registration.jsx'
import Main from './components/Layout/Main.jsx'
import Destination from './components/Pages/Destination/Destination.jsx'
import Contact from './components/Pages/Contact/Contact.jsx'
import News from './components/Pages/News/News.jsx'
import Blog from './components/Pages/Blog/Blog.jsx'

let router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/news',
        element: <News></News>
      },
      {
        path: '/destination',
        element: <Destination></Destination>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
