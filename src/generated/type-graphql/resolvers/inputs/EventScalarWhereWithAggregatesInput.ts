import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EventScalarWhereWithAggregatesInput", {})
export class EventScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EventScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EventScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EventScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EventScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  header?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  address?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  content?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  phone?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  mapId?: StringWithAggregatesFilter | undefined;
}
