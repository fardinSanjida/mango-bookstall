import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "mango-bookstall";

let client;

export function getMongoClient() {
  if (!uri) {
    throw new Error("MONGODB_URI is required to use the MongoDB Better Auth adapter.");
  }

  if (!client) {
    client = new MongoClient(uri);
  }

  return client;
}

export function getMongoDatabase() {
  return getMongoClient().db(dbName);
}
