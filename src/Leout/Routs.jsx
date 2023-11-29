import { createBrowserRouter } from "react-router-dom";
import MainLeout from "./MainLeout";
import Home from "../Pages/Home/Home";

const MyRouts = createBrowserRouter([
    {
        path:'/',
        element:<MainLeout></MainLeout>,
        children:[
        {
            path:'/',
            element:<Home></Home>
        }
        ]
    }
])
 


export default MyRouts;