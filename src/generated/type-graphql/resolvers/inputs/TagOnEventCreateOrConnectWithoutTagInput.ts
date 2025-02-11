import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventCreateWithoutTagInput } from "../inputs/TagOnEventCreateWithoutTagInput";
import { TagOnEventWhereUniqueInput } from "../inputs/TagOnEventWhereUniqueInput";

@TypeGraphQL.InputType("TagOnEventCreateOrConnectWithoutTagInput", {})
export class TagOnEventCreateOrConnectWithoutTagInput {
  @TypeGraphQL.Field(_type => TagOnEventWhereUniqueInput, {
    nullable: false
  })
  where!: TagOnEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagOnEventCreateWithoutTagInput, {
    nullable: false
  })
  create!: TagOnEventCreateWithoutTagInput;
}
