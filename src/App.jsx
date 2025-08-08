import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import BuyNow from "./pages/BuyNow";
import Compare from "./pages/Compare";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import LICPlans from "./pages/LICPlans";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/buy" element={<BuyNow />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/plans" element={<LICPlans />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
