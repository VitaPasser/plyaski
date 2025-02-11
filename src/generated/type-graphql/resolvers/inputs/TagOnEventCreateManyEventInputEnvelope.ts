import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventCreateManyEventInput } from "../inputs/TagOnEventCreateManyEventInput";

@TypeGraphQL.InputType("TagOnEventCreateManyEventInputEnvelope", {})
export class TagOnEventCreateManyEventInputEnvelope {
  @TypeGraphQL.Field(_type => [TagOnEventCreateManyEventInput], {
    nullable: false
  })
  data!: TagOnEventCreateManyEventInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
