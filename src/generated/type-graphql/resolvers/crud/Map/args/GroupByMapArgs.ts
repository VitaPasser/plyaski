import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MapOrderByWithAggregationInput } from "../../../inputs/MapOrderByWithAggregationInput";
import { MapScalarWhereWithAggregatesInput } from "../../../inputs/MapScalarWhereWithAggregatesInput";
import { MapWhereInput } from "../../../inputs/MapWhereInput";
import { MapScalarFieldEnum } from "../../../../enums/MapScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMapArgs {
  @TypeGraphQL.Field(_type => MapWhereInput, {
    nullable: true
  })
  where?: MapWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MapOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MapOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MapScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "x" | "y">;

  @TypeGraphQL.Field(_type => MapScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MapScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
