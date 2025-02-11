import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCountEventArgs } from "./args/TagCountEventArgs";

@TypeGraphQL.ObjectType("TagCount", {})
export class TagCount {
  Event!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "Event",
    nullable: false
  })
  getEvent(@TypeGraphQL.Root() root: TagCount, @TypeGraphQL.Args() args: TagCountEventArgs): number {
    return root.Event;
  }
}
