import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateManyEventInput } from "../inputs/ImageCreateManyEventInput";

@TypeGraphQL.InputType("ImageCreateManyEventInputEnvelope", {})
export class ImageCreateManyEventInputEnvelope {
  @TypeGraphQL.Field(_type => [ImageCreateManyEventInput], {
    nullable: false
  })
  data!: ImageCreateManyEventInput[];
}
