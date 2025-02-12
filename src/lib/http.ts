"use server";
import { headers } from "next/headers";

export async function POST(query: string) {
  const headersList = await headers();
  const url = `${headersList.get("x-forwarded-proto")}://${headersList.get(
    "host"
  )}/api/graphql?query=${query}`;
  const fetch_ = await fetch(url, {
    method: "GET",
    headers: {
      // "Content-Type": "application/json",
      "Apollo-Require-Preflight": "thing"
      // "x-apollo-operation-name": "Thing"
    },
    // body: JSON.stringify({ query: query }),
  });
  const data = await fetch_.text();
  console.log(data);
  const getData = JSON.parse(data);
  return getData.data;
}
