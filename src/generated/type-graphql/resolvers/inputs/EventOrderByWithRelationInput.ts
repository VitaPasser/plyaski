import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageOrderByRelationAggregateInput } from "../inputs/ImageOrderByRelationAggregateInput";
import { MapOrderByWithRelationInput } from "../inputs/MapOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TagOnEventOrderByRelationAggregateInput } from "../inputs/TagOnEventOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EventOrderByWithRelationInput", {})
export class EventOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  header?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  phone?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mapId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TagOnEventOrderByRelationAggregateInput, {
    nullable: true
  })
  tags?: TagOnEventOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ImageOrderByRelationAggregateInput, {
    nullable: true
  })
  image?: ImageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MapOrderByWithRelationInput, {
    nullable: true
  })
  map?: MapOrderByWithRelationInput | undefined;
}
