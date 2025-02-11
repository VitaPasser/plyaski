import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMapArgs } from "./args/AggregateMapArgs";
import { Map } from "../../../models/Map";
import { AggregateMap } from "../../outputs/AggregateMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Map)
export class AggregateMapResolver {
  @TypeGraphQL.Query(_returns => AggregateMap, {
    nullable: false
  })
  async aggregateMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMapArgs): Promise<AggregateMap> {
    return getPrismaFromContext(ctx).map.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
