import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import axios from "axios";

import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

import rehypeSlug from "rehype-slug";

import extractHeadings from "../utils/extractHeadings";

import CodeBlock from "../components/CodeBlock";

function parseFrontmatter(content) {

  const match =
    content.match(
      /---([\s\S]*?)---/
    );

  if (!match) {

    return {
      meta: {},
      body: content,
    };

  }

  const frontmatter =
    match[1];

  const body =
    content.replace(
      match[0],
      ""
    );

  const titleMatch =
    frontmatter.match(
      /title:\s*(.*)/
    );

  const difficultyMatch =
    frontmatter.match(
      /difficulty:\s*(.*)/
    );

  const tags =
    [...frontmatter.matchAll(/-\s*(.*)/g)]
      .map((m) =>
        m[1].trim()
      );

  return {

    meta: {

      title:
        titleMatch?.[1] ||
        "",

      difficulty:
        difficultyMatch?.[1] ||
        "Unknown",

      tags,

    },

    body,

  };
}

export default function WriteupPage() {

  const { slug } =
    useParams();

  const [content, setContent] =
    useState("");

  const [meta, setMeta] =
    useState({});

  const [headings, setHeadings] =
    useState([]);

  useEffect(() => {

    axios
      .get(
        `https://raw.githubusercontent.com/d3ad0x1/Write-ups/main/${slug}.md`
      )
      .then((res) => {

        const parsed =
          parseFrontmatter(
            res.data
          );

        setMeta(
          parsed.meta
        );

        setContent(
          parsed.body
        );

        setHeadings(
          extractHeadings(
            parsed.body
          )
        );

      })
      .catch((err) => {

        console.error(err);

      });

  }, [slug]);

  return (
    <div className="min-h-screen py-32 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_280px] gap-16">

        {/* MAIN */}
        <div>

          {/* BACK */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition mb-12"
          >
            ← Back
          </Link>

          {/* HEADER */}
          <div className="mb-16">

            <span className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
              Write-up
            </span>

            <h1 className="text-5xl font-bold text-white mt-4">
              {meta.title ||
                slug.replace(
                  /-/g,
                  " "
                )}
            </h1>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mt-6">

              {meta.tags?.map(
                (tag) => (

                  <span
                    key={tag}
                    className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm"
                  >
                    {tag}
                  </span>

                )
              )}

              {meta.difficulty && (

                <span className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                  {
                    meta.difficulty
                  }
                </span>

              )}

            </div>

          </div>

          {/* ARTICLE */}
          <div className="bg-[#0b0b0b]/80 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-8 md:p-14 shadow-[0_0_60px_rgba(59,130,246,0.08)]">

            <article className="prose prose-invert prose-zinc max-w-none">

              <ReactMarkdown
                remarkPlugins={[
                  remarkGfm,
                ]}
                rehypePlugins={[
                  rehypeSlug,
                ]}
                components={{

                  code({
                    inline,
                    className,
                    children,
                    ...props
                  }) {

                    const match =
                      /language-(\w+)/.exec(
                        className ||
                          ""
                      );

                    return !inline &&
                      match ? (

                      <CodeBlock
                        language={
                          match[1]
                        }
                      >
                        {String(
                          children
                        ).replace(
                          /\n$/,
                          ""
                        )}
                      </CodeBlock>

                    ) : (

                      <code
                        className="bg-zinc-900 px-2 py-1 rounded text-blue-400"
                        {...props}
                      >
                        {
                          children
                        }
                      </code>

                    );
                  },

                  img({
                    src,
                    alt,
                  }) {

                    return (
                      <div className="my-10">

                        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">

                          <img
                            src={src}
                            alt={alt}
                            className="w-full object-cover hover:scale-[1.02] transition duration-500"
                          />

                        </div>

                        {alt && (

                          <p className="text-center text-zinc-500 text-sm mt-4">
                            {alt}
                          </p>

                        )}

                      </div>
                    );
                  },

                }}
              >
                {content}
              </ReactMarkdown>

            </article>

          </div>

        </div>

        {/* TOC */}
        <aside className="hidden lg:block">

          <div className="sticky top-32">

            <div className="bg-[#0b0b0b]/80 backdrop-blur-xl border border-zinc-800 rounded-[28px] p-8">

              <h3 className="text-white font-bold text-xl mb-8">
                Contents
              </h3>

              <div className="space-y-4">

                {headings.map(
                  (heading) => (

                    <a
                      key={
                        heading.id
                      }
                      href={`#${heading.id}`}
                      className="block text-zinc-500 hover:text-blue-400 transition"
                    >
                      {
                        heading.text
                      }
                    </a>

                  )
                )}

              </div>

            </div>

          </div>

        </aside>

      </div>

    </div>
  );
}