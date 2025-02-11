import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MapCreateInput } from "../../../inputs/MapCreateInput";
import { MapUpdateInput } from "../../../inputs/MapUpdateInput";
import { MapWhereUniqueInput } from "../../../inputs/MapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMapArgs {
  @TypeGraphQL.Field(_type => MapWhereUniqueInput, {
    nullable: false
  })
  where!: MapWhereUniqueInput;

  @TypeGraphQL.Field(_type => MapCreateInput, {
    nullable: false
  })
  create!: MapCreateInput;

  @TypeGraphQL.Field(_type => MapUpdateInput, {
    nullable: false
  })
  update!: MapUpdateInput;
}
