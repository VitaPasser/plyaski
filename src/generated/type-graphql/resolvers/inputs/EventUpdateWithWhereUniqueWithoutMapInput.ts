import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventUpdateWithoutMapInput } from "../inputs/EventUpdateWithoutMapInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpdateWithWhereUniqueWithoutMapInput", {})
export class EventUpdateWithWhereUniqueWithoutMapInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventUpdateWithoutMapInput, {
    nullable: false
  })
  data!: EventUpdateWithoutMapInput;
}
