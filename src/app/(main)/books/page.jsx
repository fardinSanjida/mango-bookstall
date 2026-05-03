import { Suspense } from "react";
import BooksBrowser from "@/component/BooksBrowser";

export default function AllBooksPage() {
  return (
    <Suspense fallback={<div className="px-5 py-16 text-center">Loading books...</div>}>
      <BooksBrowser />
    </Suspense>
  );
}
