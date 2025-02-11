import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagOnEventCreateInput } from "../../../inputs/TagOnEventCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTagOnEventArgs {
  @TypeGraphQL.Field(_type => TagOnEventCreateInput, {
    nullable: false
  })
  data!: TagOnEventCreateInput;
}
