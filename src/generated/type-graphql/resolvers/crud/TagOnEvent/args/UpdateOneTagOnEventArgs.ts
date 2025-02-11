import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagOnEventUpdateInput } from "../../../inputs/TagOnEventUpdateInput";
import { TagOnEventWhereUniqueInput } from "../../../inputs/TagOnEventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTagOnEventArgs {
  @TypeGraphQL.Field(_type => TagOnEventUpdateInput, {
    nullable: false
  })
  data!: TagOnEventUpdateInput;

  @TypeGraphQL.Field(_type => TagOnEventWhereUniqueInput, {
    nullable: false
  })
  where!: TagOnEventWhereUniqueInput;
}
