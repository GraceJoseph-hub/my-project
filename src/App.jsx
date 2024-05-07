import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Main from "./layouts/Main";
// import Navbar from "./component/navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
