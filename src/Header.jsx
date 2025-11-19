/** @format */

// src/components/Header.jsx
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* NAVBAR */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="/LogoUttakhandMock.jpg"
            alt="logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="font-semibold text-lg">D.C.C</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10 text-[#ff2e8e] font-medium">
          <a href="/" className="hover:text-pink-600">
            Home
          </a>
          <a href="/about" className="hover:text-pink-600">
            About Us
          </a>
          <a href="/courses" className="hover:text-pink-600">
            Courses
          </a>
          <a href="/tests" className="hover:text-pink-600">
            Free Tests
          </a>

          {/* Dropdown */}
          <div
            className="relative cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div className="flex items-center space-x-1 hover:text-pink-600">
              <span>More</span>
              <FiChevronDown />
            </div>

            {openMenu && (
              <div className="absolute mt-3 bg-white shadow-lg rounded p-4 w-40 text-gray-700">
                <a className="block py-1 hover:text-pink-600">Contact</a>
                <a className="block py-1 hover:text-pink-600">Privacy Policy</a>
              </div>
            )}
          </div>
        </nav>

        {/* Login Button */}
        <button className="px-6 py-2 bg-[#ff2e8e] text-white rounded-lg font-semibold hover:bg-pink-600">
          Login
        </button>
      </div>
    </header>
  );
}
