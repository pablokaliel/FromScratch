import { createBrowserRouter as Router } from "react-router-dom"
import Admin from "./pages/admin"
import Home from "./pages/home"
import Login from "./pages/login"
import Error from "./pages/error"


const router = Router([
  {
  path: '/',
  element: <Home />
  },
 {
   path:'/login',
  element: <Login />
},
 {
   path:'/admin',
  element: <Admin />
},
{
  path: '/*',
  element: <Error />
}
])

export {router};