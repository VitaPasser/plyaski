import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TagUpdateOneRequiredWithoutEventNestedInput } from "../inputs/TagUpdateOneRequiredWithoutEventNestedInput";

@TypeGraphQL.InputType("TagOnEventUpdateWithoutEventInput", {})
export class TagOnEventUpdateWithoutEventInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updateAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutEventNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutEventNestedInput | undefined;
}
