"use client";

import { useState } from "react";

function EyeIcon({ hidden }) {
  if (hidden) {
    return (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.58 10.58A2 2 0 0012 14a2 2 0 001.42-.58" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.88 5.09A9.6 9.6 0 0112 4.86c4.5 0 8.25 3.06 9.4 7.14a9.8 9.8 0 01-2.2 3.8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.53 6.53A9.9 9.9 0 002.6 12c.7 2.48 2.42 4.54 4.66 5.75A9.8 9.8 0 0012 19.14c1.05 0 2.06-.16 3-.47" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.6 12C3.75 7.92 7.5 4.86 12 4.86S20.25 7.92 21.4 12c-1.15 4.08-4.9 7.14-9.4 7.14S3.75 16.08 2.6 12z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}

export default function PasswordInput({ placeholder, minLength }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative mt-2">
      <input
        name="password"
        type={showPassword ? "text" : "password"}
        minLength={minLength}
        required
        placeholder={placeholder}
        className="input w-full rounded-md border-[#eadfce] bg-[#fffaf3] pr-12 focus:border-[#d77716]"
      />
      <button
        type="button"
        aria-label={showPassword ? "Hide password" : "Show password"}
        title={showPassword ? "Hide password" : "Show password"}
        onClick={() => setShowPassword((current) => !current)}
        className="absolute inset-y-0 right-0 grid w-12 place-items-center rounded-r-md border-0 bg-transparent text-[#6f5b4a] shadow-none outline-none transition hover:text-[#b0520b] focus:outline-none focus:ring-0 focus-visible:outline-none"
      >
        <EyeIcon hidden={!showPassword} />
      </button>
    </div>
  );
}
