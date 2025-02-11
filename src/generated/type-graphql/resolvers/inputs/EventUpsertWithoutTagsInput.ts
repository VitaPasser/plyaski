import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateWithoutTagsInput } from "../inputs/EventCreateWithoutTagsInput";
import { EventUpdateWithoutTagsInput } from "../inputs/EventUpdateWithoutTagsInput";
import { EventWhereInput } from "../inputs/EventWhereInput";

@TypeGraphQL.InputType("EventUpsertWithoutTagsInput", {})
export class EventUpsertWithoutTagsInput {
  @TypeGraphQL.Field(_type => EventUpdateWithoutTagsInput, {
    nullable: false
  })
  update!: EventUpdateWithoutTagsInput;

  @TypeGraphQL.Field(_type => EventCreateWithoutTagsInput, {
    nullable: false
  })
  create!: EventCreateWithoutTagsInput;

  @TypeGraphQL.Field(_type => EventWhereInput, {
    nullable: true
  })
  where?: EventWhereInput | undefined;
}
