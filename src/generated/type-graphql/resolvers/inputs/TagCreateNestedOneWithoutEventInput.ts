import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutEventInput } from "../inputs/TagCreateOrConnectWithoutEventInput";
import { TagCreateWithoutEventInput } from "../inputs/TagCreateWithoutEventInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateNestedOneWithoutEventInput", {})
export class TagCreateNestedOneWithoutEventInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutEventInput, {
    nullable: true
  })
  create?: TagCreateWithoutEventInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutEventInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutEventInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;
}
