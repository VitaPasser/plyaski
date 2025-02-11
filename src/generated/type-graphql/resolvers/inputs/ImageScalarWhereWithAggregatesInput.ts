import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ImageScalarWhereWithAggregatesInput", {})
export class ImageScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ImageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ImageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ImageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ImageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  src?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  eventId?: StringNullableWithAggregatesFilter | undefined;
}
