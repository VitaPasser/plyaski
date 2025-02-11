import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateManyEventInputEnvelope } from "../inputs/ImageCreateManyEventInputEnvelope";
import { ImageCreateOrConnectWithoutEventInput } from "../inputs/ImageCreateOrConnectWithoutEventInput";
import { ImageCreateWithoutEventInput } from "../inputs/ImageCreateWithoutEventInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageCreateNestedManyWithoutEventInput", {})
export class ImageCreateNestedManyWithoutEventInput {
  @TypeGraphQL.Field(_type => [ImageCreateWithoutEventInput], {
    nullable: true
  })
  create?: ImageCreateWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageCreateOrConnectWithoutEventInput], {
    nullable: true
  })
  connectOrCreate?: ImageCreateOrConnectWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => ImageCreateManyEventInputEnvelope, {
    nullable: true
  })
  createMany?: ImageCreateManyEventInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ImageWhereUniqueInput], {
    nullable: true
  })
  connect?: ImageWhereUniqueInput[] | undefined;
}
