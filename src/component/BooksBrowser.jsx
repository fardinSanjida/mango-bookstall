"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BookCard from "@/component/BookCard";
import { books } from "@/data/books";

const categories = ["All Books", "Story", "Tech", "Science"];

export default function BooksBrowser() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All Books";
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : "All Books");
  const [query, setQuery] = useState("");

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesCategory = category === "All Books" || book.category === category;
      const matchesQuery = book.title.toLowerCase().includes(query.trim().toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[240px_1fr] lg:gap-8 lg:px-12">
      <aside className="rounded-md border border-[#eadfce] bg-white p-4 sm:p-5 lg:min-h-[650px]">
        <h2 className="text-sm font-bold">Filter by Category</h2>
        <div className="mt-5 grid gap-2 sm:grid-cols-4 lg:block lg:space-y-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`flex w-full items-center justify-center rounded-md px-3 py-3 text-center text-sm font-semibold lg:justify-start lg:px-4 lg:text-left ${
                category === item ? "bg-[#f4e3ce] text-[#5a2605]" : "hover:bg-[#fff7ec]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </aside>

      <section>
        <label className="input input-md mb-6 flex w-full items-center gap-3 rounded-md border-[#eadfce] bg-white sm:input-lg sm:mb-7">
          <input
            type="search"
            className="min-w-0 grow text-sm"
            placeholder="Search books by title..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <span className="text-sm font-bold">Search</span>
        </label>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {filteredBooks.map((book) => <BookCard key={book.id} book={book} compact />)}
        </div>

        {filteredBooks.length === 0 && (
          <div className="rounded-md border border-[#eadfce] bg-white p-6 text-center sm:p-10">
            <h2 className="text-xl font-bold">No books found</h2>
            <p className="mt-2 text-sm text-[#6f5b4a]">Try another title or category.</p>
            <Link
              href="/books"
              className="btn mt-5 border-0 bg-[#5a2605] text-white"
              onClick={() => {
                setQuery("");
                setCategory("All Books");
              }}
            >
              Reset
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
