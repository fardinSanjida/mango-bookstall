"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import BookCard from "@/component/BookCard";
import { books } from "@/data/books";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const featuredBooks = books.slice(0, 4);

  useEffect(() => {
    if (!loading && !user) router.replace("/login");
  }, [loading, router, user]);

  if (loading) {
    return <div className="min-h-[50vh] px-5 py-16 text-center font-semibold">Loading...</div>;
  }

  if (!user) return null;

  return (
    <div className="animate__animated animate__fadeIn">
      <section className="border-b border-[#eadfce] bg-[#f6eadb]">
        <div className="mx-auto grid min-h-[430px] max-w-7xl items-center gap-8 px-5 py-10 sm:px-8 md:grid-cols-[0.95fr_1.05fr] md:py-12 lg:px-12">
          <div>
            <h1 className="max-w-xl text-4xl font-black leading-none text-[#28170c] sm:text-5xl md:text-6xl lg:text-7xl">
              Find Your Next Read
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-[#5d4b3b]">
              Explore stories, science, and technology books from one beautiful library.
            </p>
            <Link href="/books" className="btn mt-7 border-0 bg-[#8a3f08] px-6 text-white hover:bg-[#5a2605] sm:px-8">
              Browse Now
            </Link>
          </div>
          <div className="min-h-[240px] rounded-md bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center shadow-lg sm:min-h-[330px]" />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-md border border-[#eadfce] bg-white px-4 py-3 text-sm text-[#5a2605]">
          <div className="marquee-track whitespace-nowrap">
            New Arrivals: The Silent River | Java Mastery | Space Wonders | Special Discount on Memberships...
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold">Featured Books</h2>
          <Link href="/books" className="text-sm font-bold text-[#b0520b]">View All</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBooks.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div className="rounded-md bg-[#fff2df] p-5 sm:p-6">
          <h2 className="text-2xl font-bold">Explore by Category</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {["Story", "Tech", "Science"].map((category) => (
              <Link key={category} href={`/books?category=${category}`} className="rounded-md bg-white p-5 text-center shadow-sm hover:shadow-md">
                <h3 className="font-bold">{category}</h3>
                <p className="mt-1 text-xs text-[#6f5b4a]">Discover {category.toLowerCase()} picks.</p>
                <span className="btn mt-4 min-h-0 border-0 bg-[#e17710] px-5 py-2 text-xs text-white">Explore</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-md bg-[#fff2df] p-5 sm:p-6">
          <h2 className="text-2xl font-bold">Why Choose BookNest?</h2>
          <div className="mt-5 space-y-4">
            {[
              ["Easy Borrowing", "Borrow books with just one click."],
              ["Smart Search", "Find books quickly by title or category."],
              ["Digital Profile", "Manage your personal library profile with ease."],
            ].map(([title, text]) => (
              <div key={title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#ead7bf] text-lg font-bold text-[#167c2b]">✓</span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm text-[#6f5b4a]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
