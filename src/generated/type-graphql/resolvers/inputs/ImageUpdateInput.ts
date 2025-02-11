import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventUpdateOneWithoutImageNestedInput } from "../inputs/EventUpdateOneWithoutImageNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ImageUpdateInput", {})
export class ImageUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  src?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateOneWithoutImageNestedInput, {
    nullable: true
  })
  Event?: EventUpdateOneWithoutImageNestedInput | undefined;
}
