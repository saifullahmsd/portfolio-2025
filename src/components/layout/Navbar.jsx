import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Hamburger Icons
import { FiMoon, FiSun } from "react-icons/fi"; // Theme Icons
import React from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" }, // Future use
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-light/80 dark:bg-dark/80 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* logo  */}
        <Link
          to="/"
          className="text-2xl font-heading font-bold text-primary cursor-pointer"
        >
          Saif<span className="text-accent">.dev</span>
        </Link>

        {/* 2. Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-primary"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-dark dark:text-light transition-all hover:scale-110"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>

        {/* 3. Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="text-dark dark:text-light">
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-dark dark:text-light"
          >
            {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Dropdown (AnimatePresence for smooth exit) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-light dark:bg-dark shadow-lg border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={({ isActive }) =>
                    `text-lg font-medium ${
                      isActive
                        ? "text-primary"
                        : "text-gray-600 dark:text-gray-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
