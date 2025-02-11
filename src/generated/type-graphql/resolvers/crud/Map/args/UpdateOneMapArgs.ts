import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MapUpdateInput } from "../../../inputs/MapUpdateInput";
import { MapWhereUniqueInput } from "../../../inputs/MapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMapArgs {
  @TypeGraphQL.Field(_type => MapUpdateInput, {
    nullable: false
  })
  data!: MapUpdateInput;

  @TypeGraphQL.Field(_type => MapWhereUniqueInput, {
    nullable: false
  })
  where!: MapWhereUniqueInput;
}
