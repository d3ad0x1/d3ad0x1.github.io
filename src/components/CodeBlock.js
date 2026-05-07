import { useState } from "react";

import { Copy, Check } from "lucide-react";

export default function CodeBlock({
  language,
  children,
}) {

  const [copied, setCopied] =
    useState(false);

  async function copyCode() {

    await navigator.clipboard.writeText(
      children
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="my-8 rounded-3xl overflow-hidden border border-zinc-800 bg-[#0a0a0a] shadow-[0_0_40px_rgba(59,130,246,0.08)]">

      {/* HEADER */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800 bg-[#0f0f0f]">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* Traffic lights */}
          <div className="flex items-center gap-2">

            <div className="w-3 h-3 rounded-full bg-red-500" />

            <div className="w-3 h-3 rounded-full bg-yellow-500" />

            <div className="w-3 h-3 rounded-full bg-green-500" />

          </div>

          {/* LANG */}
          <span className="text-xs uppercase tracking-widest text-zinc-500">
            {language}
          </span>

        </div>

        {/* COPY */}
        <button
          onClick={copyCode}
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition"
        >

          {copied ? (
            <>
              <Check size={16} />
              <span className="text-sm">
                Copied
              </span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span className="text-sm">
                Copy
              </span>
            </>
          )}

        </button>

      </div>

      {/* CODE */}
      <pre className="overflow-x-auto p-6 text-sm leading-7 text-zinc-300">

        <code>
          {children}
        </code>

      </pre>

    </div>
  );
}