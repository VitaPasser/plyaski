import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCountOrderByAggregateInput } from "../inputs/ImageCountOrderByAggregateInput";
import { ImageMaxOrderByAggregateInput } from "../inputs/ImageMaxOrderByAggregateInput";
import { ImageMinOrderByAggregateInput } from "../inputs/ImageMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ImageOrderByWithAggregationInput", {})
export class ImageOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  src?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  eventId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => ImageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ImageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ImageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ImageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ImageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ImageMinOrderByAggregateInput | undefined;
}
