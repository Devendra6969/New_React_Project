import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-xs">
      <nav className="bg-white border-gray-200 px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1505925456693-124134d66749?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="mr-3 h-12 w-auto rounded-3xl" // Added w-auto to prevent stretching
              alt="Logo"
            />
          </Link>

          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-hidden lg:px-5 lg:py-2.5"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="mr-2 rounded-lg bg-orange-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 focus:outline-hidden lg:px-5 lg:py-2.5"
            >
              Get started
            </Link>
          </div>

          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block border-b border-gray-100 py-2 pl-3 pr-4 duration-200 lg:border-0 lg:p-0 ${
                      isActive
                        ? "text-orange-700"
                        : "text-gray-700 hover:text-orange-700"
                    } hover:bg-gray-50 lg:hover:bg-transparent`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    `block border-b border-gray-100 py-2 pl-3 pr-4 duration-200 lg:border-0 lg:p-0 ${
                      isActive
                        ? "text-orange-700"
                        : "text-gray-700 hover:text-orange-700"
                    } hover:bg-gray-50 lg:hover:bg-transparent`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    `block border-b border-gray-100 py-2 pl-3 pr-4 duration-200 lg:border-0 lg:p-0 ${
                      isActive
                        ? "text-orange-700"
                        : "text-gray-700 hover:text-orange-700"
                    } hover:bg-gray-50 lg:hover:bg-transparent`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
