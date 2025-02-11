import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagOnEventWhereInput } from "../../inputs/TagOnEventWhereInput";

@TypeGraphQL.ArgsType()
export class TagCountEventArgs {
  @TypeGraphQL.Field(_type => TagOnEventWhereInput, {
    nullable: true
  })
  where?: TagOnEventWhereInput | undefined;
}
