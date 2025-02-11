import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventUpdateWithoutTagsInput } from "../inputs/EventUpdateWithoutTagsInput";
import { EventWhereInput } from "../inputs/EventWhereInput";

@TypeGraphQL.InputType("EventUpdateToOneWithWhereWithoutTagsInput", {})
export class EventUpdateToOneWithWhereWithoutTagsInput {
  @TypeGraphQL.Field(_type => EventWhereInput, {
    nullable: true
  })
  where?: EventWhereInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateWithoutTagsInput, {
    nullable: false
  })
  data!: EventUpdateWithoutTagsInput;
}
