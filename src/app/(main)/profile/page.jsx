"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import PrivateRoute from "@/component/PrivateRoute";

export default function ProfilePage() {
  return (
    <PrivateRoute>
      {(user) => (
        <main className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[240px_1fr] lg:gap-8 lg:px-12">
          <aside className="rounded-md border border-[#eadfce] bg-white p-4">
            <div className="rounded-md bg-[#f4e3ce] px-4 py-3 text-sm font-bold">Profile Overview</div>
            <div className="mt-3 px-4 py-3 text-sm font-semibold">Borrowed Books</div>
            <div className="px-4 py-3 text-sm font-semibold">Settings</div>
          </aside>

          <section className="rounded-md border border-[#eadfce] bg-white p-5 shadow-sm sm:p-8">
            <h1 className="text-2xl font-bold">Profile Overview</h1>
            <div className="mt-6 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <img
                src={user.image || "https://i.pravatar.cc/200?img=12"}
                alt={user.name}
                className="h-28 w-28 rounded-full object-cover ring-4 ring-[#f0dfca] sm:h-32 sm:w-32"
              />
              <div className="min-w-0">
                <h2 className="break-words text-2xl font-black sm:text-3xl">{user.name}</h2>
                <p className="mt-1 break-all text-[#6f5b4a]">{user.email}</p>
                <p className="mt-3 text-sm text-[#6f5b4a]">
                  Member since {new Date(user.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </p>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-md border border-[#eadfce]">
              {[
                ["Name", user.name],
                ["Email", user.email],
                ["Photo URL", user.image || "Not added"],
                ["Provider", user.provider || "email"],
              ].map(([label, value]) => (
                <div key={label} className="grid gap-2 border-b border-[#eadfce] px-4 py-4 text-sm last:border-b-0 sm:grid-cols-[160px_1fr] sm:px-5">
                  <span className="font-bold">{label}</span>
                  <span className="break-all text-[#4d3c2d]">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 text-center">
              <Link href="/profile/update" className="btn w-full border-0 bg-[#5a2605] px-8 text-white hover:bg-[#783409] sm:w-auto sm:px-10">
                Update Information
              </Link>
            </div>
          </section>
        </main>
      )}
    </PrivateRoute>
  );
}
