import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "../pages/admin";
import Error from "../pages/error";
import Home from "../pages/home";
import Login from "../pages/login";
import Networks from "../pages/networks";
import Private from "./private";

export const MappedRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <Private>
              <Admin />
            </Private>
          }
        />
        <Route
          path="/admin/social"
          element={
            <Private>
              <Networks />
            </Private>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
};
