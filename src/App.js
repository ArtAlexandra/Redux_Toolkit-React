import React from "react";

import{
createBrowserRouter,
RouterProvider,
Outlet,
Navigate
} from "react-router-dom"
import Home from "./Home";
import Login from "./Login";
import ErrorList from "./ErrorList";
import { Provider } from "react-redux";
import Navbar from "./Navbar";
import { store } from "./store/store";

const Layout = ()=>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Navigate to="/login"/>
      },
      {
        path: "/home",
        element: <Home/>
      }
    ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "*",
      element: <ErrorList/>
    }
])
function App() {
  return (
    <Provider store={store}>
         <div className="App">
            <RouterProvider router={router} /> 
          </div>
     
          </Provider>
  );
}

export default App;
