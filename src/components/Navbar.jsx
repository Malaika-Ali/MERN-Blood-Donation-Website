import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import axios from "axios";
import logo from '../assets/logo.png';
import Notifications from "./Notifications";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get("/api/v1/users/current-user", {
          withCredentials: true
        });
        setCurrentUser(response.data.data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/users/logout", {}, { withCredentials: true });
      setCurrentUser(null);
      // Redirect to home page or login page after logout
      // You might want to use react-router's useNavigate hook for this
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };


  const [notificationsOpen, setnotificationsOpen] = useState(false)
  const notificationsToggle=()=>setnotificationsOpen((prev)=>!prev)

  return (
    <header className="bg-red-50 shadow-md 2xl:container">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 2xl:px-2">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link to='/' className="flex items-center w-16 h-16">
            <img className="object-cover w-full h-full" src={logo} alt="Logo" />
          </Link>

          {/* Navigation Links */}
          <nav
            className={`absolute left-0 right-0 top-16 z-20 bg-red-50 p-5 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
              isMenuOpen ? "block" : "hidden"
            } md:static md:block md:p-0`}
          >
            <ul className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:gap-6">
              {[
                { to: '/', text: 'Home' },
                { to: '/about', text: 'About Us' },
                { to: '/faq', text: 'FAQ' },
                ...(currentUser?.role === 'recipient'
                  ? [{ to: '/request-blood', text: 'Request Blood'}, {to: '/donors-list', text: 'Donors'} ]
                  : !currentUser
                    ? [{ to: '/register', text: 'Register' }]
                    : [])
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    className={({isActive}) => 
                      `block py-2 text-gray-700 transition font-medium hover:text-red-600 hover:font-semibold 
                      ${isActive ? "text-red-600 font-semibold" : ""} 
                      transition-all duration-300 ease-in`
                    }
                    to={link.to}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
              <li className="md:hidden">
                {currentUser ? (
                  <button
                    onClick={handleLogout}
                    className="block w-full rounded-full bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow hover:bg-red-500 transition-all duration-300 ease-in-out"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    className="block w-full rounded-full bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow hover:bg-red-500 transition-all duration-300 ease-in-out"
                    to='/login'
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          {/* Login/Logout and Notification */}
          <div className="hidden items-center gap-4 md:flex relative">
            {/* {currentUser?.role === 'donor' && (
              <button
                className="text-gray-600 hover:text-red-600 transition-colors duration-300"
                aria-label="Notifications"
                onClick={notificationsToggle}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            )} */}
            {currentUser ? (
              <button
                onClick={handleLogout}
                className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-red-500 transition-all duration-300 ease-in-out"
              >
                Logout
              </button>
            ) : (
              <Link
                className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-red-500 transition-all duration-300 ease-in-out"
                to='/login'
              >
                Login
              </Link>
            )}
          </div>
          {
            notificationsOpen &&
            <Notifications/>

          }

          {/* Hamburger Button */}
          <button
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-red-600 md:hidden"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

