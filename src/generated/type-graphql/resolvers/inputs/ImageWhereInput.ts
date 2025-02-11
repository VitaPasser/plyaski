import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventNullableRelationFilter } from "../inputs/EventNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ImageWhereInput", {})
export class ImageWhereInput {
  @TypeGraphQL.Field(_type => [ImageWhereInput], {
    nullable: true
  })
  AND?: ImageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageWhereInput], {
    nullable: true
  })
  OR?: ImageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageWhereInput], {
    nullable: true
  })
  NOT?: ImageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  src?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  eventId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EventNullableRelationFilter, {
    nullable: true
  })
  Event?: EventNullableRelationFilter | undefined;
}
