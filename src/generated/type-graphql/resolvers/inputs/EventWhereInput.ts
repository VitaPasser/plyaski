import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageListRelationFilter } from "../inputs/ImageListRelationFilter";
import { MapRelationFilter } from "../inputs/MapRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TagOnEventListRelationFilter } from "../inputs/TagOnEventListRelationFilter";

@TypeGraphQL.InputType("EventWhereInput", {})
export class EventWhereInput {
  @TypeGraphQL.Field(_type => [EventWhereInput], {
    nullable: true
  })
  AND?: EventWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereInput], {
    nullable: true
  })
  OR?: EventWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereInput], {
    nullable: true
  })
  NOT?: EventWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  header?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  phone?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  mapId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TagOnEventListRelationFilter, {
    nullable: true
  })
  tags?: TagOnEventListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ImageListRelationFilter, {
    nullable: true
  })
  image?: ImageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MapRelationFilter, {
    nullable: true
  })
  map?: MapRelationFilter | undefined;
}
