import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagOnEventCreateManyInput } from "../../../inputs/TagOnEventCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnTagOnEventArgs {
  @TypeGraphQL.Field(_type => [TagOnEventCreateManyInput], {
    nullable: false
  })
  data!: TagOnEventCreateManyInput[];
}
