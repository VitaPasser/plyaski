import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagOnEventCreateInput } from "../../../inputs/TagOnEventCreateInput";
import { TagOnEventUpdateInput } from "../../../inputs/TagOnEventUpdateInput";
import { TagOnEventWhereUniqueInput } from "../../../inputs/TagOnEventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTagOnEventArgs {
  @TypeGraphQL.Field(_type => TagOnEventWhereUniqueInput, {
    nullable: false
  })
  where!: TagOnEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagOnEventCreateInput, {
    nullable: false
  })
  create!: TagOnEventCreateInput;

  @TypeGraphQL.Field(_type => TagOnEventUpdateInput, {
    nullable: false
  })
  update!: TagOnEventUpdateInput;
}
