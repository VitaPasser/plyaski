import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventCreateWithoutEventInput } from "../inputs/TagOnEventCreateWithoutEventInput";
import { TagOnEventWhereUniqueInput } from "../inputs/TagOnEventWhereUniqueInput";

@TypeGraphQL.InputType("TagOnEventCreateOrConnectWithoutEventInput", {})
export class TagOnEventCreateOrConnectWithoutEventInput {
  @TypeGraphQL.Field(_type => TagOnEventWhereUniqueInput, {
    nullable: false
  })
  where!: TagOnEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagOnEventCreateWithoutEventInput, {
    nullable: false
  })
  create!: TagOnEventCreateWithoutEventInput;
}
