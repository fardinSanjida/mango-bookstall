import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { getMongoClient, getMongoDatabase } from "@/lib/mongodb";

const hasMongo = Boolean(process.env.MONGODB_URI);
const hasGoogle = Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET || "development-only-change-this-secret",
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    minPasswordLength: 6,
  },
  ...(hasMongo
    ? {
        database: mongodbAdapter(getMongoDatabase(), {
          client: getMongoClient(),
        }),
      }
    : {}),
  ...(hasGoogle
    ? {
        socialProviders: {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          },
        },
      }
    : {}),
  plugins: [nextCookies()],
});
