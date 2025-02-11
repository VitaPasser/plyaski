import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MapCountEventArgs } from "./args/MapCountEventArgs";

@TypeGraphQL.ObjectType("MapCount", {})
export class MapCount {
  Event!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "Event",
    nullable: false
  })
  getEvent(@TypeGraphQL.Root() root: MapCount, @TypeGraphQL.Args() args: MapCountEventArgs): number {
    return root.Event;
  }
}
