import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventCreateManyTagInputEnvelope } from "../inputs/TagOnEventCreateManyTagInputEnvelope";
import { TagOnEventCreateOrConnectWithoutTagInput } from "../inputs/TagOnEventCreateOrConnectWithoutTagInput";
import { TagOnEventCreateWithoutTagInput } from "../inputs/TagOnEventCreateWithoutTagInput";
import { TagOnEventScalarWhereInput } from "../inputs/TagOnEventScalarWhereInput";
import { TagOnEventUpdateManyWithWhereWithoutTagInput } from "../inputs/TagOnEventUpdateManyWithWhereWithoutTagInput";
import { TagOnEventUpdateWithWhereUniqueWithoutTagInput } from "../inputs/TagOnEventUpdateWithWhereUniqueWithoutTagInput";
import { TagOnEventUpsertWithWhereUniqueWithoutTagInput } from "../inputs/TagOnEventUpsertWithWhereUniqueWithoutTagInput";
import { TagOnEventWhereUniqueInput } from "../inputs/TagOnEventWhereUniqueInput";

@TypeGraphQL.InputType("TagOnEventUpdateManyWithoutTagNestedInput", {})
export class TagOnEventUpdateManyWithoutTagNestedInput {
  @TypeGraphQL.Field(_type => [TagOnEventCreateWithoutTagInput], {
    nullable: true
  })
  create?: TagOnEventCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: TagOnEventCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: TagOnEventUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => TagOnEventCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: TagOnEventCreateManyTagInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TagOnEventUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: TagOnEventUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: TagOnEventUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TagOnEventScalarWhereInput[] | undefined;
}
