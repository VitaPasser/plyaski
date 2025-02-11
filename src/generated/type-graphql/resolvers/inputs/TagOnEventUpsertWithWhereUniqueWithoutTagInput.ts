import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventCreateWithoutTagInput } from "../inputs/TagOnEventCreateWithoutTagInput";
import { TagOnEventUpdateWithoutTagInput } from "../inputs/TagOnEventUpdateWithoutTagInput";
import { TagOnEventWhereUniqueInput } from "../inputs/TagOnEventWhereUniqueInput";

@TypeGraphQL.InputType("TagOnEventUpsertWithWhereUniqueWithoutTagInput", {})
export class TagOnEventUpsertWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => TagOnEventWhereUniqueInput, {
    nullable: false
  })
  where!: TagOnEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagOnEventUpdateWithoutTagInput, {
    nullable: false
  })
  update!: TagOnEventUpdateWithoutTagInput;

  @TypeGraphQL.Field(_type => TagOnEventCreateWithoutTagInput, {
    nullable: false
  })
  create!: TagOnEventCreateWithoutTagInput;
}
