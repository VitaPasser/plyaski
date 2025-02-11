import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TagOnEventMinAggregate", {})
export class TagOnEventMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  eventId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tagId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateAt!: Date | null;
}
