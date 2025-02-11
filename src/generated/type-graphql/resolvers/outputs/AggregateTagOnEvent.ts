import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOnEventCountAggregate } from "../outputs/TagOnEventCountAggregate";
import { TagOnEventMaxAggregate } from "../outputs/TagOnEventMaxAggregate";
import { TagOnEventMinAggregate } from "../outputs/TagOnEventMinAggregate";

@TypeGraphQL.ObjectType("AggregateTagOnEvent", {})
export class AggregateTagOnEvent {
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
