import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

//! Shared
import Navbar from "./shared/navbar/Navbar"
import Footer from "./shared/footer/Footer";

//? Pages
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Mygigs from "./pages/myGigs/Mygigs";
import Add from "./pages/add/Add";
import "./app.scss"

function App() {

  const Layout = () =>{
    return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>

    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/gigs",
          element: <Gigs/>
        },
        {
          path:"/gig/:id",
          element: <Gig/>
        },
        {
          path:"/mygigs",
          element: <Mygigs/>
        },
        {
          path:"/add",
          element: <Add/>
        }
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
