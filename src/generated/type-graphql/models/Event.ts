import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Image } from "../models/Image";
import { Map } from "../models/Map";
import { TagOnEvent } from "../models/TagOnEvent";
import { EventCount } from "../resolvers/outputs/EventCount";

@TypeGraphQL.ObjectType("Event", {})
export class Event {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  header!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  tags?: TagOnEvent[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | null;

  image?: Image[];

  map?: Map;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mapId!: string;

  @TypeGraphQL.Field(_type => EventCount, {
    nullable: true
  })
  _count?: EventCount | null;
}
