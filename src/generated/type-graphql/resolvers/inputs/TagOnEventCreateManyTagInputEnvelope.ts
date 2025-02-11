import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventCreateManyTagInput } from "../inputs/TagOnEventCreateManyTagInput";

@TypeGraphQL.InputType("TagOnEventCreateManyTagInputEnvelope", {})
export class TagOnEventCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [TagOnEventCreateManyTagInput], {
    nullable: false
  })
  data!: TagOnEventCreateManyTagInput[];
}
