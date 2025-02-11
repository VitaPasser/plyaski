import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TagOnEventScalarWhereWithAggregatesInput", {})
export class TagOnEventScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TagOnEventScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TagOnEventScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TagOnEventScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TagOnEventScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  eventId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  tagId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updateAt?: DateTimeWithAggregatesFilter | undefined;
}
