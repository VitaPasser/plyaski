"use server";
import { headers } from "next/headers";

export async function POST(query: string) {
  const headersList = await headers();
  const url = `${headersList.get("x-forwarded-proto")}://${headersList.get(
    "host"
  )}/api/graphql/`;
  const fetch_ = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: query }),
  });
  console.log(fetch_);
  const getData = await fetch_.json();
  return getData.data;
}
