import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TagOnEventScalarWhereInput", {})
export class TagOnEventScalarWhereInput {
  @TypeGraphQL.Field(_type => [TagOnEventScalarWhereInput], {
    nullable: true
  })
  AND?: TagOnEventScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventScalarWhereInput], {
    nullable: true
  })
  OR?: TagOnEventScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventScalarWhereInput], {
    nullable: true
  })
  NOT?: TagOnEventScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  eventId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tagId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updateAt?: DateTimeFilter | undefined;
}
