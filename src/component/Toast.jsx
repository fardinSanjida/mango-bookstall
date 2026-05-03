"use client";

export default function Toast({ type = "success", children }) {
  if (!children) return null;

  return (
    <div
      className={`rounded-md border px-4 py-3 text-sm ${
        type === "error"
          ? "border-red-200 bg-red-50 text-red-700"
          : "border-green-200 bg-green-50 text-green-700"
      }`}
    >
      {children}
    </div>
  );
}
