import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventOrderByRelationAggregateInput } from "../inputs/EventOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MapOrderByWithRelationInput", {})
export class MapOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  x?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  y?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EventOrderByRelationAggregateInput, {
    nullable: true
  })
  Event?: EventOrderByRelationAggregateInput | undefined;
}
