import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { buildSchema } from "type-graphql";
import { resolvers } from "../../../generated/type-graphql";
import prisma from "../../../../prisma/client";

export const dynamic = "force-dynamic"; // Дозволяє динамічний рендеринг

async function createHandler() {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const server = new ApolloServer({ schema });

  return startServerAndCreateNextHandler(server, {
    context: async () => ({ prisma }),
  });
}

const handler = await createHandler();

export async function GET(req: Request) {
  return handler(req);
}

export async function POST(req: Request) {
  return handler(req);
}
