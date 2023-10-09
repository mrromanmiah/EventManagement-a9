import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Details from "../Pages/Details/Details";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Blog from "../Pages/PrivateRoutes/Blog";
import Gallery from "../Pages/PrivateRoutes/Gallery";
import PrivateRout from "../Pages/PrivateRoutes/PrivateRout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



const routes = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/card.json')
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <PrivateRout><Blog></Blog></PrivateRout>
            },
            {
                path: '/gallery',
                element: <PrivateRout><Gallery></Gallery></PrivateRout>
            },
            {
                path: "/cards/:id",
                element: <PrivateRout><Details></Details></PrivateRout>,
                loader: () => fetch('/card.json')
            }
            
        ]
    }
])

export default routes;