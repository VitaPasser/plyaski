import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MapWhereInput } from "../../../inputs/MapWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMapArgs {
  @TypeGraphQL.Field(_type => MapWhereInput, {
    nullable: true
  })
  where?: MapWhereInput | undefined;
}
