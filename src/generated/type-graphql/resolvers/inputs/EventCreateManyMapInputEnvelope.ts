import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyMapInput } from "../inputs/EventCreateManyMapInput";

@TypeGraphQL.InputType("EventCreateManyMapInputEnvelope", {})
export class EventCreateManyMapInputEnvelope {
  @TypeGraphQL.Field(_type => [EventCreateManyMapInput], {
    nullable: false
  })
  data!: EventCreateManyMapInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
