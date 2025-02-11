import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventCountAggregate } from "../outputs/TagOnEventCountAggregate";
import { TagOnEventMaxAggregate } from "../outputs/TagOnEventMaxAggregate";
import { TagOnEventMinAggregate } from "../outputs/TagOnEventMinAggregate";

@TypeGraphQL.ObjectType("TagOnEventGroupBy", {})
export class TagOnEventGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  eventId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updateAt!: Date;

  @TypeGraphQL.Field(_type => TagOnEventCountAggregate, {
    nullable: true
  })
  _count!: TagOnEventCountAggregate | null;

  @TypeGraphQL.Field(_type => TagOnEventMinAggregate, {
    nullable: true
  })
  _min!: TagOnEventMinAggregate | null;

  @TypeGraphQL.Field(_type => TagOnEventMaxAggregate, {
    nullable: true
  })
  _max!: TagOnEventMaxAggregate | null;
}
