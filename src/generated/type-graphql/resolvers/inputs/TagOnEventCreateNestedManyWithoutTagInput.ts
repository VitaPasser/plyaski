import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventCreateManyTagInputEnvelope } from "../inputs/TagOnEventCreateManyTagInputEnvelope";
import { TagOnEventCreateOrConnectWithoutTagInput } from "../inputs/TagOnEventCreateOrConnectWithoutTagInput";
import { TagOnEventCreateWithoutTagInput } from "../inputs/TagOnEventCreateWithoutTagInput";
import { TagOnEventWhereUniqueInput } from "../inputs/TagOnEventWhereUniqueInput";

@TypeGraphQL.InputType("TagOnEventCreateNestedManyWithoutTagInput", {})
export class TagOnEventCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [TagOnEventCreateWithoutTagInput], {
    nullable: true
  })
  create?: TagOnEventCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: TagOnEventCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => TagOnEventCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: TagOnEventCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventWhereUniqueInput], {
    nullable: true
  })
  connect?: TagOnEventWhereUniqueInput[] | undefined;
}
