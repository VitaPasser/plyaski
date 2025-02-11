import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagOnEventUpdateManyMutationInput } from "../../../inputs/TagOnEventUpdateManyMutationInput";
import { TagOnEventWhereInput } from "../../../inputs/TagOnEventWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTagOnEventArgs {
  @TypeGraphQL.Field(_type => TagOnEventUpdateManyMutationInput, {
    nullable: false
  })
  data!: TagOnEventUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TagOnEventWhereInput, {
    nullable: true
  })
  where?: TagOnEventWhereInput | undefined;
}
