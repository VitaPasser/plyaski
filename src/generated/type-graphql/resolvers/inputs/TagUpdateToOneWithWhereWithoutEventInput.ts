import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateWithoutEventInput } from "../inputs/TagUpdateWithoutEventInput";
import { TagWhereInput } from "../inputs/TagWhereInput";

@TypeGraphQL.InputType("TagUpdateToOneWithWhereWithoutEventInput", {})
export class TagUpdateToOneWithWhereWithoutEventInput {
  @TypeGraphQL.Field(_type => TagWhereInput, {
    nullable: true
  })
  where?: TagWhereInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateWithoutEventInput, {
    nullable: false
  })
  data!: TagUpdateWithoutEventInput;
}
