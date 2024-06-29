import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import SearchPage from "./pages/SearchPage";

  
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
