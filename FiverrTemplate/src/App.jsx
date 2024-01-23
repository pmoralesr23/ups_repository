import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";

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
import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import UploadFiles from "./pages/uploadFiles/uploadFiles";

//? Login component validation

const clerkPubKey = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY;
window.Buffer = window.Buffer || require("buffer").Buffer;


import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


 
function App() {


  const queryClient = new QueryClient()

  const Layout = () =>{
    return (
      
        <div className="app">
          <QueryClientProvider client={queryClient}>
            <Navbar/>
            <Outlet/>
            <Footer/>
          </QueryClientProvider>
        </div>
      

    )
  }



  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[

        {
          path:"/gigs",
          element:<SignedIn>
                    <Gigs/>
                  </SignedIn>
        },
        {
          path:"/register",
          element: <Register/>
        },
        {
          path:"/uploadFiles",
          element: <UploadFiles/>
        },
        {
          path:"/gig/:id",
          element:<SignedIn>
                    <Gig/>
                  </SignedIn>
        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path:"/mygigs",
          element:<SignedIn>
                    <Mygigs/>
                  </SignedIn>
        },
        {
          path:"/add",
          element: <Add/>
        }
        ,
        {
          path:"/sign-out",
          element: <>
          <SignedOut/>
          <Home />
          </>
        }
        ,
        {
          path:"/",
          element:  <>
          <SignedIn>
            <Home />
          </SignedIn>
           <SignedOut>
            <RedirectToSignIn />
         </SignedOut>
        </>
        },
      ]
    },
  ]);


  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div>
        <RouterProvider router={router} />
      </div>
    </ClerkProvider>
  );
}
 
 
export default App
