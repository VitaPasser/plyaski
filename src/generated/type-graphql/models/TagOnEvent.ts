import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Event } from "../models/Event";
import { Tag } from "../models/Tag";

@TypeGraphQL.ObjectType("TagOnEvent", {})
export class TagOnEvent {
  event?: Event;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  eventId!: string;

  tag?: Tag;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updateAt!: Date;
}
