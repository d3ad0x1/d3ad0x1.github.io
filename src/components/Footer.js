export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <div>
          <h3 className="text-white text-xl font-bold">
            d3ad0x1
          </h3>

          <p className="text-zinc-500 mt-2">
            Pentester • Infrastructure • Linux • Security
          </p>
        </div>

        <div className="text-zinc-600 text-sm">
          © 2026 d3ad0x1. All rights reserved.
        </div>

      </div>
    </footer>
  );
}