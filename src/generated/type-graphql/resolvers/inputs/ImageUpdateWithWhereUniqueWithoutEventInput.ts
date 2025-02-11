import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageUpdateWithoutEventInput } from "../inputs/ImageUpdateWithoutEventInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageUpdateWithWhereUniqueWithoutEventInput", {})
export class ImageUpdateWithWhereUniqueWithoutEventInput {
  @TypeGraphQL.Field(_type => ImageWhereUniqueInput, {
    nullable: false
  })
  where!: ImageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ImageUpdateWithoutEventInput, {
    nullable: false
  })
  data!: ImageUpdateWithoutEventInput;
}
