import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function WriteupViewer({
  content,
  title,
  onClose,
}) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl overflow-y-auto">

      <div className="min-h-screen px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >

          {/* Topbar */}
          <div className="flex items-center justify-between mb-10">

            <div>
              <span className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
                Write-up
              </span>

              <h1 className="text-5xl font-bold text-white mt-4">
                {title}
              </h1>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-3 rounded-2xl border border-zinc-800 bg-zinc-900 hover:border-blue-500/40 text-zinc-300 transition"
            >
              Close
            </button>

          </div>

          {/* Article */}
          <div className="bg-[#0b0b0b]/80 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-8 md:p-14 shadow-[0_0_60px_rgba(59,130,246,0.08)]">

            <article className="prose prose-invert prose-zinc max-w-none">

                <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({
                    inline,
                    className,
                    children,
                    ...props
                    }) {
                    const match = /language-(\\w+)/.exec(
                        className || ""
                    );

                    return !inline && match ? (
                        <div className="relative my-8">

                        {/* Terminal topbar */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-t-2xl">

                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />

                            <span className="ml-3 text-xs text-zinc-500 uppercase tracking-widest">
                            {match[1]}
                            </span>

                        </div>

                        <SyntaxHighlighter
                            style={oneDark}
                            language={match[1]}
                            PreTag="div"
                            customStyle={{
                            margin: 0,
                            borderRadius: "0 0 16px 16px",
                            background: "#090909",
                            border: "1px solid #27272a",
                            borderTop: "none",
                            padding: "24px",
                            fontSize: "14px",
                            }}
                            {...props}
                        >
                            {String(children).replace(/\\n$/, "")}
                        </SyntaxHighlighter>

                        </div>
                    ) : (
                        <code
                        className="bg-zinc-900 px-2 py-1 rounded text-blue-400"
                        {...props}
                        >
                        {children}
                        </code>
                    );
                    },
                }}
                >
                {content}
                </ReactMarkdown>

            </article>

          </div>

        </motion.div>
      </div>
    </div>
  );
}