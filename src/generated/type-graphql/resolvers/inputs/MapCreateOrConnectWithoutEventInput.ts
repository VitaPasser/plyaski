import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MapCreateWithoutEventInput } from "../inputs/MapCreateWithoutEventInput";
import { MapWhereUniqueInput } from "../inputs/MapWhereUniqueInput";

@TypeGraphQL.InputType("MapCreateOrConnectWithoutEventInput", {})
export class MapCreateOrConnectWithoutEventInput {
  @TypeGraphQL.Field(_type => MapWhereUniqueInput, {
    nullable: false
  })
  where!: MapWhereUniqueInput;

  @TypeGraphQL.Field(_type => MapCreateWithoutEventInput, {
    nullable: false
  })
  create!: MapCreateWithoutEventInput;
}
