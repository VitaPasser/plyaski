import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MapCreateWithoutEventInput } from "../inputs/MapCreateWithoutEventInput";
import { MapUpdateWithoutEventInput } from "../inputs/MapUpdateWithoutEventInput";
import { MapWhereInput } from "../inputs/MapWhereInput";

@TypeGraphQL.InputType("MapUpsertWithoutEventInput", {})
export class MapUpsertWithoutEventInput {
  @TypeGraphQL.Field(_type => MapUpdateWithoutEventInput, {
    nullable: false
  })
  update!: MapUpdateWithoutEventInput;

  @TypeGraphQL.Field(_type => MapCreateWithoutEventInput, {
    nullable: false
  })
  create!: MapCreateWithoutEventInput;

  @TypeGraphQL.Field(_type => MapWhereInput, {
    nullable: true
  })
  where?: MapWhereInput | undefined;
}
