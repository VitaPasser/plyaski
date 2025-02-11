import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateWithoutEventInput } from "../inputs/ImageCreateWithoutEventInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageCreateOrConnectWithoutEventInput", {})
export class ImageCreateOrConnectWithoutEventInput {
  @TypeGraphQL.Field(_type => ImageWhereUniqueInput, {
    nullable: false
  })
  where!: ImageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ImageCreateWithoutEventInput, {
    nullable: false
  })
  create!: ImageCreateWithoutEventInput;
}
