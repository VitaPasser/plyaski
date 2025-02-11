import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventCountOrderByAggregateInput } from "../inputs/TagOnEventCountOrderByAggregateInput";
import { TagOnEventMaxOrderByAggregateInput } from "../inputs/TagOnEventMaxOrderByAggregateInput";
import { TagOnEventMinOrderByAggregateInput } from "../inputs/TagOnEventMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TagOnEventOrderByWithAggregationInput", {})
export class TagOnEventOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => TagOnEventCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TagOnEventCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TagOnEventMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TagOnEventMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TagOnEventMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TagOnEventMinOrderByAggregateInput | undefined;
}
