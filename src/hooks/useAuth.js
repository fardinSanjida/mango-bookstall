"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function syncSession() {
      const { data } = authClient.getSession();
      setUser(data?.user ?? null);
      setLoading(false);
    }

    syncSession();
    window.addEventListener("authchange", syncSession);
    window.addEventListener("storage", syncSession);

    return () => {
      window.removeEventListener("authchange", syncSession);
      window.removeEventListener("storage", syncSession);
    };
  }, []);

  return { user, loading };
}
