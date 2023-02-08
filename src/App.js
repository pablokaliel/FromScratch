import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin";
import Error from "./pages/error";
import Home from "./pages/home";
import Login from "./pages/login";
import Networks from "./pages/networks";
import Private from "./routes/private";
import GlobalStyles from "./styles/GlobalStyles";
import light from "./themes/light";
import dark from "./themes/dark";
import usePersistedState from "./utils/usePersistedState";
import { ThemeProvider } from "styled-components";
import TrocaTheme from "./components/toggletheme";

function App() {
  const [theme, setTheme] = usePersistedState("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TrocaTheme toggleTheme={toggleTheme} />
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
          <Route path="/error" element={<Error />} />
        </Routes>
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
}

export default App;
