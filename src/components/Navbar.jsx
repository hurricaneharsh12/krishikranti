import logo from "../assets/logo.jpeg";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { navItems } from "../constants";
import Chat from "./Chat";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">UrbanGrow</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>

          {/* Use NavLink here */}
          <a
            href="/chat" // Ensure this is the path where the Chat component is routed
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <button>AI chat</button>
          </a>
          <a
            href="/test" // Ensure this is the path where the Chat component is routed
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <button>Testimonials</button>
          </a>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="/Login" className="py-2 px-3 border rounded-md">
              Log In
            </a>
            <a
              href="/Button"
              className="bg-gradient-to-r from-green-500 to-green-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>

          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-3">
                    <NavLink to={item.href}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a href="#" className="py-2 px-3 border rounded-md">
                  Sign In
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
