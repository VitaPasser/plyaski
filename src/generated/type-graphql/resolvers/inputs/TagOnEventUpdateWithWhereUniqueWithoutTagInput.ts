import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventUpdateWithoutTagInput } from "../inputs/TagOnEventUpdateWithoutTagInput";
import { TagOnEventWhereUniqueInput } from "../inputs/TagOnEventWhereUniqueInput";

@TypeGraphQL.InputType("TagOnEventUpdateWithWhereUniqueWithoutTagInput", {})
export class TagOnEventUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => TagOnEventWhereUniqueInput, {
    nullable: false
  })
  where!: TagOnEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagOnEventUpdateWithoutTagInput, {
    nullable: false
  })
  data!: TagOnEventUpdateWithoutTagInput;
}
