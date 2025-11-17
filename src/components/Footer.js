export default function Footer() {
  return (
    <footer className="mt-8 p-6 text-center text-textMuted border-t border-borderSoft bg-surface">
      © {new Date().getFullYear()} d3ad0x1.github.io — Built with React + TailwindCSS
    </footer>
  );
}