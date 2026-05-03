"use client";

import { createAuthClient } from "better-auth/react";

const USERS_KEY = "mango-bookstall-users";
const SESSION_KEY = "mango-bookstall-session";

export const betterAuthClient = createAuthClient();

function readJson(key, fallback) {
  if (typeof window === "undefined") return fallback;

  try {
    return JSON.parse(window.localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function publicUser(user) {
  if (!user) return null;

  const { password, ...safeUser } = user;
  return safeUser;
}

export const authClient = {
  getSession() {
    const session = readJson(SESSION_KEY, null);
    return { data: session ? { user: session } : null, error: null };
  },

  signUp({ name, email, image, password }) {
    const users = readJson(USERS_KEY, []);

    if (users.some((user) => user.email === email)) {
      return { data: null, error: { message: "An account already exists with this email." } };
    }

    const user = {
      id: crypto.randomUUID(),
      name,
      email,
      image,
      password,
      createdAt: new Date().toISOString(),
      provider: "email",
    };

    writeJson(USERS_KEY, [...users, user]);
    return { data: { user: publicUser(user) }, error: null };
  },

  signIn({ email, password }) {
    const users = readJson(USERS_KEY, []);
    const user = users.find((item) => item.email === email && item.password === password);

    if (!user) {
      return { data: null, error: { message: "Invalid email or password." } };
    }

    const sessionUser = publicUser(user);
    writeJson(SESSION_KEY, sessionUser);
    window.dispatchEvent(new Event("authchange"));
    return { data: { user: sessionUser }, error: null };
  },

  signInSocial() {
    const users = readJson(USERS_KEY, []);
    const email = "john.doe@example.com";
    const existing = users.find((user) => user.email === email);
    const user =
      existing ??
      {
        id: crypto.randomUUID(),
        name: "John Doe",
        email,
        image: "https://i.pravatar.cc/200?img=12",
        password: "",
        createdAt: new Date().toISOString(),
        provider: "google",
      };

    if (!existing) writeJson(USERS_KEY, [...users, user]);

    const sessionUser = publicUser(user);
    writeJson(SESSION_KEY, sessionUser);
    window.dispatchEvent(new Event("authchange"));
    return { data: { user: sessionUser }, error: null };
  },

  signOut() {
    window.localStorage.removeItem(SESSION_KEY);
    window.dispatchEvent(new Event("authchange"));
    return { data: true, error: null };
  },

  updateUser({ image, name }) {
    const session = readJson(SESSION_KEY, null);
    if (!session) return { data: null, error: { message: "Please login first." } };

    const users = readJson(USERS_KEY, []);
    const updatedSession = { ...session, image, name };
    const updatedUsers = users.map((user) =>
      user.id === session.id ? { ...user, image, name } : user
    );

    writeJson(USERS_KEY, updatedUsers);
    writeJson(SESSION_KEY, updatedSession);
    window.dispatchEvent(new Event("authchange"));
    return { data: { user: updatedSession }, error: null };
  },
};
