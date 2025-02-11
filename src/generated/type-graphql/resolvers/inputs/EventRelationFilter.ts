import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventWhereInput } from "../inputs/EventWhereInput";

@TypeGraphQL.InputType("EventRelationFilter", {})
export class EventRelationFilter {
  @TypeGraphQL.Field(_type => EventWhereInput, {
    nullable: true
  })
  is?: EventWhereInput | undefined;

  @TypeGraphQL.Field(_type => EventWhereInput, {
    nullable: true
  })
  isNot?: EventWhereInput | undefined;
}
