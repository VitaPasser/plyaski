import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageWhereInput } from "../inputs/ImageWhereInput";

@TypeGraphQL.InputType("ImageListRelationFilter", {})
export class ImageListRelationFilter {
  @TypeGraphQL.Field(_type => ImageWhereInput, {
    nullable: true
  })
  every?: ImageWhereInput | undefined;

  @TypeGraphQL.Field(_type => ImageWhereInput, {
    nullable: true
  })
  some?: ImageWhereInput | undefined;

  @TypeGraphQL.Field(_type => ImageWhereInput, {
    nullable: true
  })
  none?: ImageWhereInput | undefined;
}
