import { PATH } from "../constants";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import PageOne from "../pages/PageOne";
import RegisterPage from "../pages/RegisterPage";


export const router = [ 
    {path: PATH.INDEX,element:<LoginPage/>},
    {path:PATH.HOME,element:<PageOne/>},
    {path:PATH.ABOUT,element:<AboutPage/>},
    {path:PATH.LOGIN,element:<LoginPage/>},
    {path: PATH.REGISTER,element:<RegisterPage/>},
    {path:PATH.NOTFOUND,element:<NotFoundPage/>},
]