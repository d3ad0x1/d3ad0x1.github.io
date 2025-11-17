import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed w-full flex items-center justify-between p-6 bg-surface/90 backdrop-blur-sm z-50 border-b border-borderSoft">
      <h1 className="text-2xl font-bold text-primary">
        d3ad0x1.github.io
      </h1>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 text-sm lg:text-base">
        <li>
          <a
            href="#languages"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("languages");
            }}
            className="text-textMuted hover:text-primary transition-colors"
          >
            Languages
          </a>
        </li>
        <li>
          <a
            href="#technologies"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("technologies");
            }}
            className="text-textMuted hover:text-primary transition-colors"
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            href="#tools-environment"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("tools-environment");
            }}
            className="text-textMuted hover:text-primary transition-colors"
          >
            Tools & Environment
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("projects");
            }}
            className="text-textMuted hover:text-primary transition-colors"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("contact");
            }}
            className="text-textMuted hover:text-primary transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Burger button */}
      <button
        className="md:hidden text-textMuted focus:outline-none"
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-surface shadow-md py-4 flex flex-col gap-4 text-lg md:hidden border-b border-borderSoft">
          <li>
            <button
              onClick={() => handleScroll("languages")}
              className="w-full text-left px-6 py-1 text-textMuted hover:text-primary"
            >
              Languages
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("technologies")}
              className="w-full text-left px-6 py-1 text-textMuted hover:text-primary"
            >
              Technologies
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("tools-environment")}
              className="w-full text-left px-6 py-1 text-textMuted hover:text-primary"
            >
              Tools & Environment
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("projects")}
              className="w-full text-left px-6 py-1 text-textMuted hover:text-primary"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("contact")}
              className="w-full text-left px-6 py-1 text-textMuted hover:text-primary"
            >
              Contact
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
