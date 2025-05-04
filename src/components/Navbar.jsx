import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, LogIn, Home, PlusCircle } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and desktop navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">RentalHub</span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600">
                Home
              </Link>
              <Link to="/rentals" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-blue-600">
                Rentals
              </Link>
              <Link to="/map" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-blue-600">
                Map View
              </Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-blue-600">
                About
              </Link>
            </div>
          </div>

          {/* User actions - desktop */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            <Link to="/login" className="flex items-center px-3 py-2 border border-blue-600 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors duration-300">
              <LogIn size={18} className="mr-1" />
              Login
            </Link>
            <Link to="/signup" className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
              <User size={18} className="mr-1" />
              Sign Up
            </Link>
            <Link to="/add-listing" className="flex items-center px-3 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-300">
              <PlusCircle size={18} className="mr-1" />
              Add Listing
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 rounded-md">
              Home
            </Link>
            <Link to="/rentals" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600 rounded-md">
              Rentals
            </Link>
            <Link to="/map" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600 rounded-md">
              Map View
            </Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600 rounded-md">
              About
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col space-y-2 px-4">
              <Link to="/login" className="flex items-center px-3 py-2 border border-blue-600 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors duration-300">
                <LogIn size={18} className="mr-2" />
                Login
              </Link>
              <Link to="/signup" className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                <User size={18} className="mr-2" />
                Sign Up
              </Link>
              <Link to="/add-listing" className="flex items-center px-3 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-300">
                <PlusCircle size={18} className="mr-2" />
                Add Listing
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;