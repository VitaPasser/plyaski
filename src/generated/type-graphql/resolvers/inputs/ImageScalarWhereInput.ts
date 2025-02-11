import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ImageScalarWhereInput", {})
export class ImageScalarWhereInput {
  @TypeGraphQL.Field(_type => [ImageScalarWhereInput], {
    nullable: true
  })
  AND?: ImageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageScalarWhereInput], {
    nullable: true
  })
  OR?: ImageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageScalarWhereInput], {
    nullable: true
  })
  NOT?: ImageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  src?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  eventId?: StringNullableFilter | undefined;
}
