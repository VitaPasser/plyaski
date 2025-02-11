import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagOnEventWhereUniqueInput } from "../../../inputs/TagOnEventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTagOnEventArgs {
  @TypeGraphQL.Field(_type => TagOnEventWhereUniqueInput, {
    nullable: false
  })
  where!: TagOnEventWhereUniqueInput;
}
