import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateNestedOneWithoutImageInput } from "../inputs/EventCreateNestedOneWithoutImageInput";

@TypeGraphQL.InputType("ImageCreateInput", {})
export class ImageCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  src!: string;

  @TypeGraphQL.Field(_type => EventCreateNestedOneWithoutImageInput, {
    nullable: true
  })
  Event?: EventCreateNestedOneWithoutImageInput | undefined;
}
