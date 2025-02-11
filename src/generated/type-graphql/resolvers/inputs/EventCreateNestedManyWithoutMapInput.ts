import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyMapInputEnvelope } from "../inputs/EventCreateManyMapInputEnvelope";
import { EventCreateOrConnectWithoutMapInput } from "../inputs/EventCreateOrConnectWithoutMapInput";
import { EventCreateWithoutMapInput } from "../inputs/EventCreateWithoutMapInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventCreateNestedManyWithoutMapInput", {})
export class EventCreateNestedManyWithoutMapInput {
  @TypeGraphQL.Field(_type => [EventCreateWithoutMapInput], {
    nullable: true
  })
  create?: EventCreateWithoutMapInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutMapInput], {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutMapInput[] | undefined;

  @TypeGraphQL.Field(_type => EventCreateManyMapInputEnvelope, {
    nullable: true
  })
  createMany?: EventCreateManyMapInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  connect?: EventWhereUniqueInput[] | undefined;
}
