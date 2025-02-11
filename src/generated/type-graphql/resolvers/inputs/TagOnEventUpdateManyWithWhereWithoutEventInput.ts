import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventScalarWhereInput } from "../inputs/TagOnEventScalarWhereInput";
import { TagOnEventUpdateManyMutationInput } from "../inputs/TagOnEventUpdateManyMutationInput";

@TypeGraphQL.InputType("TagOnEventUpdateManyWithWhereWithoutEventInput", {})
export class TagOnEventUpdateManyWithWhereWithoutEventInput {
  @TypeGraphQL.Field(_type => TagOnEventScalarWhereInput, {
    nullable: false
  })
  where!: TagOnEventScalarWhereInput;

  @TypeGraphQL.Field(_type => TagOnEventUpdateManyMutationInput, {
    nullable: false
  })
  data!: TagOnEventUpdateManyMutationInput;
}
