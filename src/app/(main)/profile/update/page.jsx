"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PrivateRoute from "@/component/PrivateRoute";
import Toast from "@/component/Toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfilePage() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setError("");
    const formData = new FormData(event.currentTarget);

    const { error: updateError } = authClient.updateUser({
      image: formData.get("image"),
      name: formData.get("name"),
    });

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setMessage("Profile updated successfully!");
    setTimeout(() => router.push("/profile"), 700);
  }

  return (
    <PrivateRoute>
      {(user) => (
        <main className="mx-auto max-w-3xl px-5 py-12">
          <section className="rounded-md border border-[#eadfce] bg-white p-8 shadow-sm">
            <h1 className="text-center text-3xl font-black">Update Your Information</h1>
            <p className="mt-2 text-center text-sm text-[#6f5b4a]">Update your name and profile picture</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <label className="block text-sm font-semibold">
                Name
                <input name="name" defaultValue={user.name} required className="input mt-2 w-full rounded-md border-[#eadfce]" />
              </label>
              <label className="block text-sm font-semibold">
                Photo URL
                <input name="image" type="url" defaultValue={user.image} required className="input mt-2 w-full rounded-md border-[#eadfce]" />
              </label>
              <button className="btn w-full border-0 bg-[#7b3508] text-white hover:bg-[#5a2605]">Update Information</button>
              <Toast>{message}</Toast>
              <Toast type="error">{error}</Toast>
            </form>
          </section>
        </main>
      )}
    </PrivateRoute>
  );
}
