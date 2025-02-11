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
      Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: query }),
  });
  const data = await fetch_.text();
  console.log(data);
  const getData = JSON.parse(data);
  return getData.data;
}
