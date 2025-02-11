import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutEventInput } from "../inputs/TagCreateWithoutEventInput";
import { TagUpdateWithoutEventInput } from "../inputs/TagUpdateWithoutEventInput";
import { TagWhereInput } from "../inputs/TagWhereInput";

@TypeGraphQL.InputType("TagUpsertWithoutEventInput", {})
export class TagUpsertWithoutEventInput {
  @TypeGraphQL.Field(_type => TagUpdateWithoutEventInput, {
    nullable: false
  })
  update!: TagUpdateWithoutEventInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutEventInput, {
    nullable: false
  })
  create!: TagCreateWithoutEventInput;

  @TypeGraphQL.Field(_type => TagWhereInput, {
    nullable: true
  })
  where?: TagWhereInput | undefined;
}
