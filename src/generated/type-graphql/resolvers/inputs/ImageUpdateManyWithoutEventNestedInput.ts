import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateManyEventInputEnvelope } from "../inputs/ImageCreateManyEventInputEnvelope";
import { ImageCreateOrConnectWithoutEventInput } from "../inputs/ImageCreateOrConnectWithoutEventInput";
import { ImageCreateWithoutEventInput } from "../inputs/ImageCreateWithoutEventInput";
import { ImageScalarWhereInput } from "../inputs/ImageScalarWhereInput";
import { ImageUpdateManyWithWhereWithoutEventInput } from "../inputs/ImageUpdateManyWithWhereWithoutEventInput";
import { ImageUpdateWithWhereUniqueWithoutEventInput } from "../inputs/ImageUpdateWithWhereUniqueWithoutEventInput";
import { ImageUpsertWithWhereUniqueWithoutEventInput } from "../inputs/ImageUpsertWithWhereUniqueWithoutEventInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageUpdateManyWithoutEventNestedInput", {})
export class ImageUpdateManyWithoutEventNestedInput {
  @TypeGraphQL.Field(_type => [ImageCreateWithoutEventInput], {
    nullable: true
  })
  create?: ImageCreateWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageCreateOrConnectWithoutEventInput], {
    nullable: true
  })
  connectOrCreate?: ImageCreateOrConnectWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageUpsertWithWhereUniqueWithoutEventInput], {
    nullable: true
  })
  upsert?: ImageUpsertWithWhereUniqueWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => ImageCreateManyEventInputEnvelope, {
    nullable: true
  })
  createMany?: ImageCreateManyEventInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ImageWhereUniqueInput], {
    nullable: true
  })
  set?: ImageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ImageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageWhereUniqueInput], {
    nullable: true
  })
  delete?: ImageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageWhereUniqueInput], {
    nullable: true
  })
  connect?: ImageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageUpdateWithWhereUniqueWithoutEventInput], {
    nullable: true
  })
  update?: ImageUpdateWithWhereUniqueWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageUpdateManyWithWhereWithoutEventInput], {
    nullable: true
  })
  updateMany?: ImageUpdateManyWithWhereWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ImageScalarWhereInput[] | undefined;
}
