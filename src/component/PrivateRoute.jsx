"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, router, user]);

  if (loading) {
    return <div className="min-h-[50vh] px-5 py-16 text-center font-semibold">Loading...</div>;
  }

  if (!user) return null;

  return children(user);
}
