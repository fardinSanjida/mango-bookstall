"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Toast from "@/component/Toast";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    const formData = new FormData(event.currentTarget);
    const { error: authError } = authClient.signUp({
      name: formData.get("name"),
      email: formData.get("email"),
      image: formData.get("image"),
      password: formData.get("password"),
    });

    if (authError) {
      setError(authError.message);
      return;
    }

    router.push("/login");
  }

  function handleGoogle() {
    authClient.signInSocial();
    router.push("/");
  }

  return (
    <main className="relative flex min-h-[calc(100vh-128px)] items-center justify-center overflow-hidden px-5 py-12 sm:px-8">
      <div className="absolute inset-0 scale-105 bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center blur-sm" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,228,196,.56),transparent_34%),linear-gradient(135deg,rgba(255,250,243,.82)_0%,rgba(247,223,192,.72)_45%,rgba(31,18,9,.48)_100%)]" />

      <section className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/55 bg-gradient-to-br from-white/82 via-[#fff6e8]/72 to-[#f7dfc0]/58 shadow-2xl shadow-[#5a2605]/20 backdrop-blur-md">
        <div className="h-2 bg-gradient-to-r from-[#5a2605] via-[#d77716] to-[#f3c17f]" />
        <div className="p-6 sm:p-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b0520b]">Join BookNest</p>
            <h1 className="mt-3 text-3xl font-black text-[#28170c]">Create Your Account</h1>
            <p className="mt-2 text-sm leading-6 text-[#6f5b4a]">
              Create your library profile and start borrowing today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <label className="block text-sm font-semibold text-[#28170c]">
              Name
              <input name="name" required placeholder="Your Name" className="input mt-2 w-full rounded-md border-[#eadfce] bg-[#fffaf3] focus:border-[#d77716]" />
            </label>
            <label className="block text-sm font-semibold text-[#28170c]">
              Email
              <input name="email" type="email" required placeholder="you@example.com" className="input mt-2 w-full rounded-md border-[#eadfce] bg-[#fffaf3] focus:border-[#d77716]" />
            </label>
            <label className="block text-sm font-semibold text-[#28170c]">
              Photo URL
              <input name="image" type="url" required placeholder="https://example.com/photo.jpg" className="input mt-2 w-full rounded-md border-[#eadfce] bg-[#fffaf3] focus:border-[#d77716]" />
            </label>
            <label className="block text-sm font-semibold text-[#28170c]">
              Password
              <input name="password" type="password" minLength={6} required placeholder="Enter a password" className="input mt-2 w-full rounded-md border-[#eadfce] bg-[#fffaf3] focus:border-[#d77716]" />
            </label>
            <Toast type="error">{error}</Toast>
            <button className="btn w-full border-0 bg-gradient-to-r from-[#5a2605] to-[#a84c09] text-white shadow-md hover:from-[#783409] hover:to-[#c45d0d]">
              Register
            </button>
          </form>

          <div className="divider text-xs text-[#8a715c]">or</div>

          <button onClick={handleGoogle} className="btn w-full border border-[#eadfce] bg-white text-[#28170c] hover:border-[#d77716] hover:bg-[#fff6e8]">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#f1f5ff] font-bold text-[#4285f4]">G</span>
            Continue with Google
          </button>

          <p className="mt-6 text-center text-sm text-[#6f5b4a]">
            Already have an account? <Link href="/login" className="font-bold text-[#b0520b]">Login</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
