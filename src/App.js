import { createBrowserRouter as Router } from "react-router-dom";
import Admin from "./pages/admin";
import Home from "./pages/home";
import Login from "./pages/login";
import Error from "./pages/error";
import Private from "./routes/private";
import Networks from "./pages/networks";


const router = Router([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Private> <Admin /> </Private>
  },
  {
    path: "/admin/social",
    element: <Private> <Networks/> </Private>
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

export { router };
