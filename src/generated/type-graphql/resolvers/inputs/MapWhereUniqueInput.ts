import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventListRelationFilter } from "../inputs/EventListRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { MapWhereInput } from "../inputs/MapWhereInput";

@TypeGraphQL.InputType("MapWhereUniqueInput", {})
export class MapWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [MapWhereInput], {
    nullable: true
  })
  AND?: MapWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MapWhereInput], {
    nullable: true
  })
  OR?: MapWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MapWhereInput], {
    nullable: true
  })
  NOT?: MapWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  x?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  y?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => EventListRelationFilter, {
    nullable: true
  })
  Event?: EventListRelationFilter | undefined;
}
