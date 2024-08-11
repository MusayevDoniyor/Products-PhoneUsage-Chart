import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header({ navLink }) {
  return (
    <header className="flex justify-between py-5 px-7 bg-cyan-50 sticky top-1 items-center shadow-md z-50">
      <div>
        <Link className="text-3xl lg:text-4xl font-bold  text-gray-800" to="/">
          Logo
        </Link>
      </div>

      <nav className="items-center">
        <ul className="flex gap-6 text-base md:text-lg lg:text-xl font-medium items-center">
          {navLink.map((link) => (
            <li key={link.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-500"
                }
                to={link.href}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
