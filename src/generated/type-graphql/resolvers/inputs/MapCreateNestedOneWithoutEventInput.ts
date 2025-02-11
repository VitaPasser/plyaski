import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MapCreateOrConnectWithoutEventInput } from "../inputs/MapCreateOrConnectWithoutEventInput";
import { MapCreateWithoutEventInput } from "../inputs/MapCreateWithoutEventInput";
import { MapWhereUniqueInput } from "../inputs/MapWhereUniqueInput";

@TypeGraphQL.InputType("MapCreateNestedOneWithoutEventInput", {})
export class MapCreateNestedOneWithoutEventInput {
  @TypeGraphQL.Field(_type => MapCreateWithoutEventInput, {
    nullable: true
  })
  create?: MapCreateWithoutEventInput | undefined;

  @TypeGraphQL.Field(_type => MapCreateOrConnectWithoutEventInput, {
    nullable: true
  })
  connectOrCreate?: MapCreateOrConnectWithoutEventInput | undefined;

  @TypeGraphQL.Field(_type => MapWhereUniqueInput, {
    nullable: true
  })
  connect?: MapWhereUniqueInput | undefined;
}
