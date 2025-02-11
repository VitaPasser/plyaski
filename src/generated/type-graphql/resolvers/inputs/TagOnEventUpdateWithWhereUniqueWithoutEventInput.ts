import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventUpdateWithoutEventInput } from "../inputs/TagOnEventUpdateWithoutEventInput";
import { TagOnEventWhereUniqueInput } from "../inputs/TagOnEventWhereUniqueInput";

@TypeGraphQL.InputType("TagOnEventUpdateWithWhereUniqueWithoutEventInput", {})
export class TagOnEventUpdateWithWhereUniqueWithoutEventInput {
  @TypeGraphQL.Field(_type => TagOnEventWhereUniqueInput, {
    nullable: false
  })
  where!: TagOnEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagOnEventUpdateWithoutEventInput, {
    nullable: false
  })
  data!: TagOnEventUpdateWithoutEventInput;
}
