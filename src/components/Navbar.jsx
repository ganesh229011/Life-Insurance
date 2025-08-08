import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Menu icons

export default function Navbar({ toggleDarkMode }) 
{
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 dark:bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">LIC India</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 text-sm md:text-base">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/buy" className="hover:text-yellow-300">Buy Now</Link>
          <Link to="/plans" className="hover:text-yellow-300">LIC Plans</Link>
          <Link to="/compare" className="hover:text-yellow-300">Compare</Link>
          <Link to="/faq" className="hover:text-yellow-300">FAQ</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-800 dark:bg-gray-700 p-4 space-y-2">
          <Link to="/" className="block hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/buy" className="block hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Buy Now</Link>
          <Link to="/plans" className="block hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>LIC Plans</Link>
          <Link to="/compare" className="block hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Compare</Link>
          <Link to="/faq" className="block hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
          <Link to="/contact" className="block hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <button
            onClick={() => {
              toggleDarkMode();
              setMobileMenuOpen(false);
            }}
            className="bg-yellow-300 text-black px-2 py-1 rounded hover:bg-yellow-400 w-full text-center"
          >
            🌓 Toggle Mode
          </button>
        </div>
      )}
    </header>
  );
}
