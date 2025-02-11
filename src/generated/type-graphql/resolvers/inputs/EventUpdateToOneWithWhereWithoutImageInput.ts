import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventUpdateWithoutImageInput } from "../inputs/EventUpdateWithoutImageInput";
import { EventWhereInput } from "../inputs/EventWhereInput";

@TypeGraphQL.InputType("EventUpdateToOneWithWhereWithoutImageInput", {})
export class EventUpdateToOneWithWhereWithoutImageInput {
  @TypeGraphQL.Field(_type => EventWhereInput, {
    nullable: true
  })
  where?: EventWhereInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateWithoutImageInput, {
    nullable: false
  })
  data!: EventUpdateWithoutImageInput;
}
