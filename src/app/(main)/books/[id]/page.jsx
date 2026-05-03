import { notFound } from "next/navigation";
import BookDetailsClient from "@/component/BookDetailsClient";
import { books, getBookById } from "@/data/books";

export function generateStaticParams() {
  return books.map((book) => ({ id: book.id }));
}

export default async function BookDetailsPage({ params }) {
  const { id } = await params;
  const book = getBookById(id);

  if (!book) notFound();

  return <BookDetailsClient book={book} />;
}
