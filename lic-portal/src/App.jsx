import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

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
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme on page load
  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Apply theme when darkMode changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <Router>
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />
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
