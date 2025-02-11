import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageUpdateManyWithoutEventNestedInput } from "../inputs/ImageUpdateManyWithoutEventNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagOnEventUpdateManyWithoutEventNestedInput } from "../inputs/TagOnEventUpdateManyWithoutEventNestedInput";

@TypeGraphQL.InputType("EventUpdateWithoutMapInput", {})
export class EventUpdateWithoutMapInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  header?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  phone?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TagOnEventUpdateManyWithoutEventNestedInput, {
    nullable: true
  })
  tags?: TagOnEventUpdateManyWithoutEventNestedInput | undefined;

  @TypeGraphQL.Field(_type => ImageUpdateManyWithoutEventNestedInput, {
    nullable: true
  })
  image?: ImageUpdateManyWithoutEventNestedInput | undefined;
}
