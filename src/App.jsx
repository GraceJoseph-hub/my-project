import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Main from "./layouts/Main";
// import Navbar from "./component/navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/about"
            element={
              <Main>
                <About />
              </Main>
            }
          />
          <Route
            exact
            path="/"
            element={
              <Main>
                <Home />
              </Main>
            }
          />
          <Route
            path="/search"
            element={
              <Main>
                <Search />
              </Main>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
