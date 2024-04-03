import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './index.css'
import Header from './components/header/header.jsx';
import Home from './routes/home.jsx';
import Footer from './components/footer/footer';
import Posts from './routes/posts';
import AboutUS from './routes/aboutUS';


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Header />
        <div className='m-20'>
          <Outlet />
        </div>
      <Footer />
    </div>,
    errorElement: <div>error</div>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blogs",
        element: <Posts />,
      },
      {
        path: "aboutUs",
        element: <AboutUS />,
      },
    ],
  },
]);


// const DynamicRote = () =>
// {
//   let GetAllBloges
//   if(router == "blogs")
//   {
//     GetAllBloges = "https://65f7f726b4f842e808867f20.mockapi.io/rocket-1/api/blogs";
//   }
//   return GetAllBloges
// }

// console.log(DynamicRote());






ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
