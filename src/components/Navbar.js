import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-zinc-900"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-white tracking-wider"
        >
          <span className="text-blue-500">d3ad</span>0x1
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-10">

          <a
            href="#timeline"
            className="text-zinc-400 hover:text-white transition"
          >
            Timeline
          </a>

          <a
            href="#writeups"
            className="text-zinc-400 hover:text-white transition"
          >
            Write-ups
          </a>

          <a
            href="#contact"
            className="text-zinc-400 hover:text-white transition"
          >
            Contact
          </a>

        </nav>

      </div>
    </header>
  );
}