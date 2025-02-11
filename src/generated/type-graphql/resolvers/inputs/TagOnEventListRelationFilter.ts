import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventWhereInput } from "../inputs/TagOnEventWhereInput";

@TypeGraphQL.InputType("TagOnEventListRelationFilter", {})
export class TagOnEventListRelationFilter {
  @TypeGraphQL.Field(_type => TagOnEventWhereInput, {
    nullable: true
  })
  every?: TagOnEventWhereInput | undefined;

  @TypeGraphQL.Field(_type => TagOnEventWhereInput, {
    nullable: true
  })
  some?: TagOnEventWhereInput | undefined;

  @TypeGraphQL.Field(_type => TagOnEventWhereInput, {
    nullable: true
  })
  none?: TagOnEventWhereInput | undefined;
}
