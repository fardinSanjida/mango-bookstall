"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BookCard from "@/component/BookCard";
import Toast from "@/component/Toast";
import { useAuth } from "@/hooks/useAuth";
import { books } from "@/data/books";

export default function BookDetailsClient({ book }) {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [message, setMessage] = useState("");
  const suggestions = books.filter((item) => item.id !== book.id).slice(0, 4);

  function handleBorrow() {
    if (!user) {
      router.push("/login");
      return;
    }

    setMessage("Book borrowed successfully!");
  }

  if (loading) return <div className="px-5 py-16 text-center">Loading...</div>;

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
      <Link href="/books" className="text-sm font-bold text-[#5a2605]">Back to all books</Link>
      <section className="mt-6 grid gap-8 border-b border-[#eadfce] pb-10 lg:grid-cols-[360px_1fr] lg:gap-10">
        <div
          className="book-cover flex min-h-[320px] items-start justify-center rounded-md p-6 text-center text-white shadow-lg sm:min-h-[460px] lg:min-h-[520px] lg:p-8"
          style={{ "--cover-url": `url(${book.image_url})` }}
        >
          <h1 className="mt-8 max-w-xs text-3xl font-bold leading-tight drop-shadow sm:text-4xl lg:mt-12 lg:text-5xl">{book.title}</h1>
        </div>
        <div>
          <h1 className="break-words text-3xl font-black sm:text-4xl">{book.title}</h1>
          <p className="mt-2 text-[#6f5b4a]">{book.author}</p>
          <span className="mt-5 inline-block rounded bg-[#ffe6c9] px-3 py-1 text-sm font-semibold text-[#a44c08]">
            {book.category}
          </span>
          <p className="mt-6 max-w-2xl leading-7 text-[#4d3c2d] sm:mt-8 sm:leading-8">{book.description}</p>

          <div className="mt-8 rounded-md border border-[#eadfce] bg-[#fff8ef] p-5 sm:mt-10 sm:p-6">
            <p className="text-sm text-[#6f5b4a]">Available Quantity</p>
            <h2 className="mt-2 text-xl font-bold text-[#167c2b] sm:text-2xl">{book.available_quantity} copies left</h2>
          </div>

          <button onClick={handleBorrow} className="btn mt-7 w-full border-0 bg-[#7b3508] text-base text-white hover:bg-[#5a2605] sm:text-lg">
            Borrow This Book
          </button>

          <div className="mt-6">
            <Toast>{message}</Toast>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="mb-5 text-xl font-bold">You May Also Like</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {suggestions.map((item) => <BookCard key={item.id} book={item} compact />)}
        </div>
      </section>
    </div>
  );
}
