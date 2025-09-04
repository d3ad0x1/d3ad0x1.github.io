export default function Navbar() {
  return (
    <nav className="fixed w-full flex justify-between items-center p-6 bg-background bg-opacity-80 backdrop-blur-sm z-50">
      <h1 className="text-2xl font-bold text-primary">d3ad0x1.github.io</h1>
      <ul className="flex gap-6 text-lg">
        <li>
          <a href="#about" className="hover:text-secondary transition-colors">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-secondary transition-colors">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
