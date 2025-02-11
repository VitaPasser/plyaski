import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyMapInputEnvelope } from "../inputs/EventCreateManyMapInputEnvelope";
import { EventCreateOrConnectWithoutMapInput } from "../inputs/EventCreateOrConnectWithoutMapInput";
import { EventCreateWithoutMapInput } from "../inputs/EventCreateWithoutMapInput";
import { EventScalarWhereInput } from "../inputs/EventScalarWhereInput";
import { EventUpdateManyWithWhereWithoutMapInput } from "../inputs/EventUpdateManyWithWhereWithoutMapInput";
import { EventUpdateWithWhereUniqueWithoutMapInput } from "../inputs/EventUpdateWithWhereUniqueWithoutMapInput";
import { EventUpsertWithWhereUniqueWithoutMapInput } from "../inputs/EventUpsertWithWhereUniqueWithoutMapInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpdateManyWithoutMapNestedInput", {})
export class EventUpdateManyWithoutMapNestedInput {
  @TypeGraphQL.Field(_type => [EventCreateWithoutMapInput], {
    nullable: true
  })
  create?: EventCreateWithoutMapInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutMapInput], {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutMapInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpsertWithWhereUniqueWithoutMapInput], {
    nullable: true
  })
  upsert?: EventUpsertWithWhereUniqueWithoutMapInput[] | undefined;

  @TypeGraphQL.Field(_type => EventCreateManyMapInputEnvelope, {
    nullable: true
  })
  createMany?: EventCreateManyMapInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  set?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  delete?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  connect?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpdateWithWhereUniqueWithoutMapInput], {
    nullable: true
  })
  update?: EventUpdateWithWhereUniqueWithoutMapInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpdateManyWithWhereWithoutMapInput], {
    nullable: true
  })
  updateMany?: EventUpdateManyWithWhereWithoutMapInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EventScalarWhereInput[] | undefined;
}
