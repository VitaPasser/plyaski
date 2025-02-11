import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageScalarWhereInput } from "../inputs/ImageScalarWhereInput";
import { ImageUpdateManyMutationInput } from "../inputs/ImageUpdateManyMutationInput";

@TypeGraphQL.InputType("ImageUpdateManyWithWhereWithoutEventInput", {})
export class ImageUpdateManyWithWhereWithoutEventInput {
  @TypeGraphQL.Field(_type => ImageScalarWhereInput, {
    nullable: false
  })
  where!: ImageScalarWhereInput;

  @TypeGraphQL.Field(_type => ImageUpdateManyMutationInput, {
    nullable: false
  })
  data!: ImageUpdateManyMutationInput;
}
