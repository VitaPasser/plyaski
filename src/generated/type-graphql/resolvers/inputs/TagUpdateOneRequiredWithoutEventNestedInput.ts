import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutEventInput } from "../inputs/TagCreateOrConnectWithoutEventInput";
import { TagCreateWithoutEventInput } from "../inputs/TagCreateWithoutEventInput";
import { TagUpdateToOneWithWhereWithoutEventInput } from "../inputs/TagUpdateToOneWithWhereWithoutEventInput";
import { TagUpsertWithoutEventInput } from "../inputs/TagUpsertWithoutEventInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateOneRequiredWithoutEventNestedInput", {})
export class TagUpdateOneRequiredWithoutEventNestedInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutEventInput, {
    nullable: true
  })
  create?: TagCreateWithoutEventInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutEventInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutEventInput | undefined;

  @TypeGraphQL.Field(_type => TagUpsertWithoutEventInput, {
    nullable: true
  })
  upsert?: TagUpsertWithoutEventInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateToOneWithWhereWithoutEventInput, {
    nullable: true
  })
  update?: TagUpdateToOneWithWhereWithoutEventInput | undefined;
}
