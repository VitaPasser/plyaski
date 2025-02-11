import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateOrConnectWithoutTagsInput } from "../inputs/EventCreateOrConnectWithoutTagsInput";
import { EventCreateWithoutTagsInput } from "../inputs/EventCreateWithoutTagsInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventCreateNestedOneWithoutTagsInput", {})
export class EventCreateNestedOneWithoutTagsInput {
  @TypeGraphQL.Field(_type => EventCreateWithoutTagsInput, {
    nullable: true
  })
  create?: EventCreateWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => EventCreateOrConnectWithoutTagsInput, {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: true
  })
  connect?: EventWhereUniqueInput | undefined;
}
