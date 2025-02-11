import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MapScalarWhereWithAggregatesInput", {})
export class MapScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MapScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MapScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MapScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MapScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MapScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MapScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  x?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  y?: FloatWithAggregatesFilter | undefined;
}
