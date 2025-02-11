import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MapWhereUniqueInput } from "../../../inputs/MapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMapArgs {
  @TypeGraphQL.Field(_type => MapWhereUniqueInput, {
    nullable: false
  })
  where!: MapWhereUniqueInput;
}
