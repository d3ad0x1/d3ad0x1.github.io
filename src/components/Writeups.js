import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import axios from "axios";

import { Link } from "react-router-dom";

const FILTERS = [
  "All",
  "AD",
  "Web",
  "Linux",
  "Windows",
  "PrivEsc",
];

function parseFrontmatter(content) {

  const match =
    content.match(
      /---([\s\S]*?)---/
    );

  if (!match) {
    return {
      title: "",
      tags: [],
      difficulty: "Unknown",
    };
  }

  const frontmatter =
    match[1];

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

    title:
      titleMatch?.[1] || "",

    difficulty:
      difficultyMatch?.[1] ||
      "Unknown",

    tags,

  };
}

export default function Writeups() {

  const [writeups, setWriteups] =
    useState([]);

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    async function fetchWriteups() {

      try {

        const res =
          await axios.get(
            "https://api.github.com/repos/d3ad0x1/Write-ups/contents"
          );

        const markdownFiles =
          res.data.filter(
            (file) =>
              file.name.endsWith(
                ".md"
              )
          );

        const parsedWriteups =
          await Promise.all(

            markdownFiles.map(
              async (file) => {

                const md =
                  await axios.get(
                    file.download_url
                  );

                const parsed =
                  parseFrontmatter(
                    md.data
                  );

                return {

                  slug:
                    file.name.replace(
                      ".md",
                      ""
                    ),

                  title:
                    parsed.title ||
                    file.name.replace(
                      ".md",
                      ""
                    ),

                  tags:
                    parsed.tags ||
                    [],

                  difficulty:
                    parsed.difficulty ||
                    "Unknown",

                };
              }
            )
          );

        setWriteups(
          parsedWriteups
        );

      } catch (err) {

        console.error(err);

      }
    }

    fetchWriteups();

  }, []);

  /* FILTER */
  const filteredWriteups =
    writeups.filter(
      (writeup) => {

        const matchesFilter =
          selectedFilter ===
            "All" ||
          writeup.tags.includes(
            selectedFilter
          );

        const matchesSearch =
          writeup.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        return (
          matchesFilter &&
          matchesSearch
        );
      }
    );

  return (
    <section
      id="writeups"
      className="relative py-32 bg-[#050505]"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-20">

          <span className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
            Write-ups
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Offensive Security Knowledge Base
          </h2>

        </div>

        {/* SEARCH */}
        <div className="mb-10">

          <input
            type="text"
            placeholder="Search write-ups..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full bg-[#0b0b0b] border border-zinc-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/40 transition"
          />

        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 mb-20">

          {FILTERS.map(
            (filter) => (

              <button
                key={filter}
                onClick={() =>
                  setSelectedFilter(
                    filter
                  )
                }
                className={`px-5 py-3 rounded-2xl border transition ${
                  selectedFilter ===
                  filter
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-[#0b0b0b] border-zinc-800 text-zinc-400 hover:border-blue-500/40 hover:text-white"
                }`}
              >
                {filter}
              </button>

            )
          )}

        </div>

        {/* EMPTY */}
        {filteredWriteups.length ===
          0 && (

          <div className="text-zinc-500 text-lg">
            No write-ups found.
          </div>

        )}

        {/* TIMELINE */}
        <div className="space-y-20">

          {filteredWriteups.map(
            (
              writeup,
              index
            ) => (

              <motion.div
                key={
                  writeup.slug
                }
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay:
                    index *
                    0.08,
                }}
                viewport={{
                  once: true,
                }}
                className="relative pl-20 border-l border-zinc-800"
              >

                {/* NUMBER */}
                <div className="absolute -left-6 top-0 w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-bold shadow-lg">
                  {String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )}
                </div>

                {/* DIFFICULTY */}
                <span className="uppercase tracking-widest text-zinc-500 text-sm">
                  {
                    writeup.difficulty
                  }
                </span>

                {/* TITLE */}
                <h3 className="text-4xl font-bold text-white mt-4">
                  {
                    writeup.title
                  }
                </h3>

                {/* TAGS */}
                <div className="flex flex-wrap gap-3 mt-6">

                  {writeup.tags.map(
                    (tag) => (

                      <span
                        key={tag}
                        className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm"
                      >
                        {tag}
                      </span>

                    )
                  )}

                </div>

                {/* LINK */}
                <Link
                  to={`/writeups/${writeup.slug}`}
                  className="inline-flex items-center gap-2 text-blue-500 mt-8 hover:text-blue-400 transition"
                >
                  Read Write-up →
                </Link>

              </motion.div>

            )
          )}

        </div>

      </div>

    </section>
  );
}