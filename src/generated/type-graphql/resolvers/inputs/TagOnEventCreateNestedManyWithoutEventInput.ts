import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventCreateManyEventInputEnvelope } from "../inputs/TagOnEventCreateManyEventInputEnvelope";
import { TagOnEventCreateOrConnectWithoutEventInput } from "../inputs/TagOnEventCreateOrConnectWithoutEventInput";
import { TagOnEventCreateWithoutEventInput } from "../inputs/TagOnEventCreateWithoutEventInput";
import { TagOnEventWhereUniqueInput } from "../inputs/TagOnEventWhereUniqueInput";

@TypeGraphQL.InputType("TagOnEventCreateNestedManyWithoutEventInput", {})
export class TagOnEventCreateNestedManyWithoutEventInput {
  @TypeGraphQL.Field(_type => [TagOnEventCreateWithoutEventInput], {
    nullable: true
  })
  create?: TagOnEventCreateWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventCreateOrConnectWithoutEventInput], {
    nullable: true
  })
  connectOrCreate?: TagOnEventCreateOrConnectWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => TagOnEventCreateManyEventInputEnvelope, {
    nullable: true
  })
  createMany?: TagOnEventCreateManyEventInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventWhereUniqueInput], {
    nullable: true
  })
  connect?: TagOnEventWhereUniqueInput[] | undefined;
}
