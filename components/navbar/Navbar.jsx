import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <nav className="bg-gray-800">
      {/* Top Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink exact to="/" className="text-white text-xl font-bold">
            Vaishnavi ERP
          </NavLink>
          <div className="hidden md:flex space-x-4">
            <NavLink exact to="/" className="text-white hover:text-gray-300">
              Dashboard
            </NavLink>
            <NavLink to="/product-management" className="text-white hover:text-gray-300">
              Product Management
            </NavLink>
            <NavLink to="/order-management" className="text-white hover:text-gray-300">
              Order Management
            </NavLink>
          </div>
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleSideNav}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Side Navbar (Mobile) */}
      {isSideNavOpen && (
        <div className="md:hidden">
          <ul className="bg-gray-800">
            <li>
              <NavLink
                exact
                to="/"
                className="block py-2 px-4 text-white hover:bg-gray-700"
                onClick={toggleSideNav}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product-management"
                className="block py-2 px-4 text-white hover:bg-gray-700"
                onClick={toggleSideNav}
              >
                Product Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order-management"
                className="block py-2 px-4 text-white hover:bg-gray-700"
                onClick={toggleSideNav}
              >
                Order Management
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
