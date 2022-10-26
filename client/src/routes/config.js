import {createBrowserRouter} from "react-router-dom";

import Home from "../view/home";
import Search from "../view/search";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/search/:slug',
        element: <Search/>
    }
])
export default Router