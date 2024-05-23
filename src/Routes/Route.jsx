import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import NotFountPage from "../component/pages/NotFountPage";
import Home from "../component/pages/Home";
import Login from "../component/pages/Login";
import Register from "../component/pages/Register";

const Route = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<NotFountPage></NotFountPage>,
        children:[
          {
            path:"/",
            element:<Home></Home>,
          }  ,
          {
            path:'/signIn',
            element:<Login></Login>
          },
          {
            path:'/signUp',
            element:<Register></Register>
          }
        ]
    }
])