import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCountImageArgs } from "./args/EventCountImageArgs";
import { EventCountTagsArgs } from "./args/EventCountTagsArgs";

@TypeGraphQL.ObjectType("EventCount", {})
export class EventCount {
  tags!: number;
  image!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "tags",
    nullable: false
  })
  getTags(@TypeGraphQL.Root() root: EventCount, @TypeGraphQL.Args() args: EventCountTagsArgs): number {
    return root.tags;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "image",
    nullable: false
  })
  getImage(@TypeGraphQL.Root() root: EventCount, @TypeGraphQL.Args() args: EventCountImageArgs): number {
    return root.image;
  }
}
