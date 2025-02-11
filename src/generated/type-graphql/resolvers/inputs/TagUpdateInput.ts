import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagOnEventUpdateManyWithoutTagNestedInput } from "../inputs/TagOnEventUpdateManyWithoutTagNestedInput";

@TypeGraphQL.InputType("TagUpdateInput", {})
export class TagUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TagOnEventUpdateManyWithoutTagNestedInput, {
    nullable: true
  })
  Event?: TagOnEventUpdateManyWithoutTagNestedInput | undefined;
}
