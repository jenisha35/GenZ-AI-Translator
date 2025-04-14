import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import BotPage from "../Pages/BotPage";


let MyRouts = createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>
    },
    {
        path:"bot-page",
        element:<BotPage></BotPage>
    }
])

export default MyRouts