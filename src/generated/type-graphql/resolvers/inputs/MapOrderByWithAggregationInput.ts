import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MapAvgOrderByAggregateInput } from "../inputs/MapAvgOrderByAggregateInput";
import { MapCountOrderByAggregateInput } from "../inputs/MapCountOrderByAggregateInput";
import { MapMaxOrderByAggregateInput } from "../inputs/MapMaxOrderByAggregateInput";
import { MapMinOrderByAggregateInput } from "../inputs/MapMinOrderByAggregateInput";
import { MapSumOrderByAggregateInput } from "../inputs/MapSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MapOrderByWithAggregationInput", {})
export class MapOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => MapCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MapCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MapAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MapAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MapMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MapMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MapMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MapMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MapSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MapSumOrderByAggregateInput | undefined;
}
