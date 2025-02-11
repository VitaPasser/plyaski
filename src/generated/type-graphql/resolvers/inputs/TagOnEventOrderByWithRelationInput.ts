import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventOrderByWithRelationInput } from "../inputs/EventOrderByWithRelationInput";
import { TagOrderByWithRelationInput } from "../inputs/TagOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TagOnEventOrderByWithRelationInput", {})
export class TagOnEventOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  eventId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updateAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EventOrderByWithRelationInput, {
    nullable: true
  })
  event?: EventOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TagOrderByWithRelationInput, {
    nullable: true
  })
  tag?: TagOrderByWithRelationInput | undefined;
}
