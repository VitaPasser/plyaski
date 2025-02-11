import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MapAvgAggregate } from "../outputs/MapAvgAggregate";
import { MapCountAggregate } from "../outputs/MapCountAggregate";
import { MapMaxAggregate } from "../outputs/MapMaxAggregate";
import { MapMinAggregate } from "../outputs/MapMinAggregate";
import { MapSumAggregate } from "../outputs/MapSumAggregate";

@TypeGraphQL.ObjectType("AggregateMap", {})
export class AggregateMap {
  @TypeGraphQL.Field(_type => MapCountAggregate, {
    nullable: true
  })
  _count!: MapCountAggregate | null;

  @TypeGraphQL.Field(_type => MapAvgAggregate, {
    nullable: true
  })
  _avg!: MapAvgAggregate | null;

  @TypeGraphQL.Field(_type => MapSumAggregate, {
    nullable: true
  })
  _sum!: MapSumAggregate | null;

  @TypeGraphQL.Field(_type => MapMinAggregate, {
    nullable: true
  })
  _min!: MapMinAggregate | null;

  @TypeGraphQL.Field(_type => MapMaxAggregate, {
    nullable: true
  })
  _max!: MapMaxAggregate | null;
}
