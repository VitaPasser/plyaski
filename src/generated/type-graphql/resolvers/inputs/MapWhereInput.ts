import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventListRelationFilter } from "../inputs/EventListRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MapWhereInput", {})
export class MapWhereInput {
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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

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
