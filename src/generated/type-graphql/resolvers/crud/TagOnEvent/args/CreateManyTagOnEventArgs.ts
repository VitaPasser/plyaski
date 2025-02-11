import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagOnEventCreateManyInput } from "../../../inputs/TagOnEventCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTagOnEventArgs {
  @TypeGraphQL.Field(_type => [TagOnEventCreateManyInput], {
    nullable: false
  })
  data!: TagOnEventCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
