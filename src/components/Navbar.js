import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full flex items-center justify-between p-6 bg-background bg-opacity-80 backdrop-blur-sm z-50 border-b border-gray-300">
      <h1 className="text-2xl font-bold text-primary">
        d3ad0x1.github.io
      </h1>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 text-lg">
        <li>
          <a href="#languages" className="hover:text-secondary transition-colors">
            Languages
          </a>
        </li>
        <li>
          <a href="#technologies" className="hover:text-secondary transition-colors">
            Technologies
          </a>
        </li>
        <li>
          <a
            href="#tools-environment"
            className="hover:text-secondary transition-colors"
          >
            Tools & Environment
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-secondary transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-secondary transition-colors">
            Contact
          </a>
        </li>
      </ul>

      {/* Burger button */}
      <button
        className="md:hidden text-textGray focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-background shadow-md py-4 flex flex-col gap-4 text-lg md:hidden">
          <li>
            <a
              onClick={() => setOpen(false)}
              href="#languages"
              className="px-6 block hover:text-secondary"
            >
              Languages
            </a>
          </li>

          <li>
            <a
              onClick={() => setOpen(false)}
              href="#technologies"
              className="px-6 block hover:text-secondary"
            >
              Technologies
            </a>
          </li>

          <li>
            <a
              onClick={() => setOpen(false)}
              href="#tools-environment"
              className="px-6 block hover:text-secondary"
            >
              Tools & Environment
            </a>
          </li>

          <li>
            <a
              onClick={() => setOpen(false)}
              href="#projects"
              className="px-6 block hover:text-secondary"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="px-6 block hover:text-secondary"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
