import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventCreateManyEventInputEnvelope } from "../inputs/TagOnEventCreateManyEventInputEnvelope";
import { TagOnEventCreateOrConnectWithoutEventInput } from "../inputs/TagOnEventCreateOrConnectWithoutEventInput";
import { TagOnEventCreateWithoutEventInput } from "../inputs/TagOnEventCreateWithoutEventInput";
import { TagOnEventScalarWhereInput } from "../inputs/TagOnEventScalarWhereInput";
import { TagOnEventUpdateManyWithWhereWithoutEventInput } from "../inputs/TagOnEventUpdateManyWithWhereWithoutEventInput";
import { TagOnEventUpdateWithWhereUniqueWithoutEventInput } from "../inputs/TagOnEventUpdateWithWhereUniqueWithoutEventInput";
import { TagOnEventUpsertWithWhereUniqueWithoutEventInput } from "../inputs/TagOnEventUpsertWithWhereUniqueWithoutEventInput";
import { TagOnEventWhereUniqueInput } from "../inputs/TagOnEventWhereUniqueInput";

@TypeGraphQL.InputType("TagOnEventUpdateManyWithoutEventNestedInput", {})
export class TagOnEventUpdateManyWithoutEventNestedInput {
  @TypeGraphQL.Field(_type => [TagOnEventCreateWithoutEventInput], {
    nullable: true
  })
  create?: TagOnEventCreateWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventCreateOrConnectWithoutEventInput], {
    nullable: true
  })
  connectOrCreate?: TagOnEventCreateOrConnectWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventUpsertWithWhereUniqueWithoutEventInput], {
    nullable: true
  })
  upsert?: TagOnEventUpsertWithWhereUniqueWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => TagOnEventCreateManyEventInputEnvelope, {
    nullable: true
  })
  createMany?: TagOnEventCreateManyEventInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventWhereUniqueInput], {
    nullable: true
  })
  set?: TagOnEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TagOnEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventWhereUniqueInput], {
    nullable: true
  })
  delete?: TagOnEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventWhereUniqueInput], {
    nullable: true
  })
  connect?: TagOnEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventUpdateWithWhereUniqueWithoutEventInput], {
    nullable: true
  })
  update?: TagOnEventUpdateWithWhereUniqueWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventUpdateManyWithWhereWithoutEventInput], {
    nullable: true
  })
  updateMany?: TagOnEventUpdateManyWithWhereWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TagOnEventScalarWhereInput[] | undefined;
}
