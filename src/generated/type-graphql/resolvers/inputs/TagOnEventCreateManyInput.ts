import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TagOnEventCreateManyInput", {})
export class TagOnEventCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  eventId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateAt?: Date | undefined;
}
