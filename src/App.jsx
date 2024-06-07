import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product";
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
          <Route path="/product/:id" element={<Product />} />
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
