import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EventRelationFilter } from "../inputs/EventRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";

@TypeGraphQL.InputType("TagOnEventWhereInput", {})
export class TagOnEventWhereInput {
  @TypeGraphQL.Field(_type => [TagOnEventWhereInput], {
    nullable: true
  })
  AND?: TagOnEventWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventWhereInput], {
    nullable: true
  })
  OR?: TagOnEventWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventWhereInput], {
    nullable: true
  })
  NOT?: TagOnEventWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  eventId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tagId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updateAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EventRelationFilter, {
    nullable: true
  })
  event?: EventRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagRelationFilter, {
    nullable: true
  })
  tag?: TagRelationFilter | undefined;
}
