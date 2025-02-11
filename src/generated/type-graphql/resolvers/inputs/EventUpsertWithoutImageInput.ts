import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateWithoutImageInput } from "../inputs/EventCreateWithoutImageInput";
import { EventUpdateWithoutImageInput } from "../inputs/EventUpdateWithoutImageInput";
import { EventWhereInput } from "../inputs/EventWhereInput";

@TypeGraphQL.InputType("EventUpsertWithoutImageInput", {})
export class EventUpsertWithoutImageInput {
  @TypeGraphQL.Field(_type => EventUpdateWithoutImageInput, {
    nullable: false
  })
  update!: EventUpdateWithoutImageInput;

  @TypeGraphQL.Field(_type => EventCreateWithoutImageInput, {
    nullable: false
  })
  create!: EventCreateWithoutImageInput;

  @TypeGraphQL.Field(_type => EventWhereInput, {
    nullable: true
  })
  where?: EventWhereInput | undefined;
}
