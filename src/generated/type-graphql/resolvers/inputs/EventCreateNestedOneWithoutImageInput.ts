import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateOrConnectWithoutImageInput } from "../inputs/EventCreateOrConnectWithoutImageInput";
import { EventCreateWithoutImageInput } from "../inputs/EventCreateWithoutImageInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventCreateNestedOneWithoutImageInput", {})
export class EventCreateNestedOneWithoutImageInput {
  @TypeGraphQL.Field(_type => EventCreateWithoutImageInput, {
    nullable: true
  })
  create?: EventCreateWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => EventCreateOrConnectWithoutImageInput, {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: true
  })
  connect?: EventWhereUniqueInput | undefined;
}
