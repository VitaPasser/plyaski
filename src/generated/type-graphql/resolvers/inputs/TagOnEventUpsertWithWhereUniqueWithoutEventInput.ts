import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventCreateWithoutEventInput } from "../inputs/TagOnEventCreateWithoutEventInput";
import { TagOnEventUpdateWithoutEventInput } from "../inputs/TagOnEventUpdateWithoutEventInput";
import { TagOnEventWhereUniqueInput } from "../inputs/TagOnEventWhereUniqueInput";

@TypeGraphQL.InputType("TagOnEventUpsertWithWhereUniqueWithoutEventInput", {})
export class TagOnEventUpsertWithWhereUniqueWithoutEventInput {
  @TypeGraphQL.Field(_type => TagOnEventWhereUniqueInput, {
    nullable: false
  })
  where!: TagOnEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagOnEventUpdateWithoutEventInput, {
    nullable: false
  })
  update!: TagOnEventUpdateWithoutEventInput;

  @TypeGraphQL.Field(_type => TagOnEventCreateWithoutEventInput, {
    nullable: false
  })
  create!: TagOnEventCreateWithoutEventInput;
}
