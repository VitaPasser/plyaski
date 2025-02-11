import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateWithoutEventInput } from "../inputs/ImageCreateWithoutEventInput";
import { ImageUpdateWithoutEventInput } from "../inputs/ImageUpdateWithoutEventInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageUpsertWithWhereUniqueWithoutEventInput", {})
export class ImageUpsertWithWhereUniqueWithoutEventInput {
  @TypeGraphQL.Field(_type => ImageWhereUniqueInput, {
    nullable: false
  })
  where!: ImageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ImageUpdateWithoutEventInput, {
    nullable: false
  })
  update!: ImageUpdateWithoutEventInput;

  @TypeGraphQL.Field(_type => ImageCreateWithoutEventInput, {
    nullable: false
  })
  create!: ImageCreateWithoutEventInput;
}
