import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MapOrderByWithRelationInput } from "../../../inputs/MapOrderByWithRelationInput";
import { MapWhereInput } from "../../../inputs/MapWhereInput";
import { MapWhereUniqueInput } from "../../../inputs/MapWhereUniqueInput";
import { MapScalarFieldEnum } from "../../../../enums/MapScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMapArgs {
  @TypeGraphQL.Field(_type => MapWhereInput, {
    nullable: true
  })
  where?: MapWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MapOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MapOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MapWhereUniqueInput, {
    nullable: true
  })
  cursor?: MapWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MapScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "x" | "y"> | undefined;
}
