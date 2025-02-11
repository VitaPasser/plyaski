import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MapWhereInput } from "../inputs/MapWhereInput";

@TypeGraphQL.InputType("MapRelationFilter", {})
export class MapRelationFilter {
  @TypeGraphQL.Field(_type => MapWhereInput, {
    nullable: true
  })
  is?: MapWhereInput | undefined;

  @TypeGraphQL.Field(_type => MapWhereInput, {
    nullable: true
  })
  isNot?: MapWhereInput | undefined;
}
