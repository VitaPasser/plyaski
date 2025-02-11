import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Event } from "../models/Event";
import { MapCount } from "../resolvers/outputs/MapCount";

@TypeGraphQL.ObjectType("Map", {})
export class Map {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  x!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  y!: number;

  Event?: Event[];

  @TypeGraphQL.Field(_type => MapCount, {
    nullable: true
  })
  _count?: MapCount | null;
}
