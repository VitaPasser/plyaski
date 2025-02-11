import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EventUpdateOneRequiredWithoutTagsNestedInput } from "../inputs/EventUpdateOneRequiredWithoutTagsNestedInput";

@TypeGraphQL.InputType("TagOnEventUpdateWithoutTagInput", {})
export class TagOnEventUpdateWithoutTagInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updateAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateOneRequiredWithoutTagsNestedInput, {
    nullable: true
  })
  event?: EventUpdateOneRequiredWithoutTagsNestedInput | undefined;
}
