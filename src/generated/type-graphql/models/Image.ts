import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Event } from "../models/Event";

@TypeGraphQL.ObjectType("Image", {})
export class Image {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  src!: string;

  Event?: Event | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  eventId?: string | null;
}
