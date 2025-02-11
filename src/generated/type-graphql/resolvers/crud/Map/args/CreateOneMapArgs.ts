import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MapCreateInput } from "../../../inputs/MapCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMapArgs {
  @TypeGraphQL.Field(_type => MapCreateInput, {
    nullable: false
  })
  data!: MapCreateInput;
}
