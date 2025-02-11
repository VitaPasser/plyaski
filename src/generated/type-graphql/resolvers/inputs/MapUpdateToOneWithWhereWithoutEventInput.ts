import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MapUpdateWithoutEventInput } from "../inputs/MapUpdateWithoutEventInput";
import { MapWhereInput } from "../inputs/MapWhereInput";

@TypeGraphQL.InputType("MapUpdateToOneWithWhereWithoutEventInput", {})
export class MapUpdateToOneWithWhereWithoutEventInput {
  @TypeGraphQL.Field(_type => MapWhereInput, {
    nullable: true
  })
  where?: MapWhereInput | undefined;

  @TypeGraphQL.Field(_type => MapUpdateWithoutEventInput, {
    nullable: false
  })
  data!: MapUpdateWithoutEventInput;
}
