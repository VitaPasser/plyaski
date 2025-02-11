import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTagOnEventArgs } from "./args/GroupByTagOnEventArgs";
import { TagOnEvent } from "../../../models/TagOnEvent";
import { TagOnEventGroupBy } from "../../outputs/TagOnEventGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagOnEvent)
export class GroupByTagOnEventResolver {
  @TypeGraphQL.Query(_returns => [TagOnEventGroupBy], {
    nullable: false
  })
  async groupByTagOnEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTagOnEventArgs): Promise<TagOnEventGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
