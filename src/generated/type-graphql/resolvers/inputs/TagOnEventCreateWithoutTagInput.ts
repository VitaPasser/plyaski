import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateNestedOneWithoutTagsInput } from "../inputs/EventCreateNestedOneWithoutTagsInput";

@TypeGraphQL.InputType("TagOnEventCreateWithoutTagInput", {})
export class TagOnEventCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateAt?: Date | undefined;

  @TypeGraphQL.Field(_type => EventCreateNestedOneWithoutTagsInput, {
    nullable: false
  })
  event!: EventCreateNestedOneWithoutTagsInput;
}
