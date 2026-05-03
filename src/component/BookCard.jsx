import Link from "next/link";

export default function BookCard({ book, compact = false }) {
  return (
    <article className="rounded-md border border-[#eadfce] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div
        className="book-cover flex aspect-[3/4] items-start justify-center rounded-md p-4 text-center text-white"
        style={{ "--cover-url": `url(${book.image_url})` }}
      >
        <h3 className="mt-4 max-w-[9rem] text-lg font-bold leading-tight drop-shadow sm:text-xl">{book.title}</h3>
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-bold text-[#28170c]">{book.title}</h3>
        <p className="mt-1 text-xs text-[#6f5b4a]">{book.author}</p>
        {!compact && (
          <>
            <span className="mt-2 inline-block rounded bg-[#eef9ee] px-2 py-1 text-xs font-semibold text-[#287a36]">
              {book.category}
            </span>
            <p className="mt-2 text-xs text-[#6f5b4a]">{book.available_quantity} copies left</p>
          </>
        )}
        <Link
          href={`/books/${book.id}`}
          className="btn mt-3 min-h-0 w-full border-0 bg-[#5a2605] py-2 text-xs text-white hover:bg-[#783409]"
        >
          {compact ? "Details" : "View Details"}
        </Link>
      </div>
    </article>
  );
}
