import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTagOnEventArgs } from "./args/AggregateTagOnEventArgs";
import { TagOnEvent } from "../../../models/TagOnEvent";
import { AggregateTagOnEvent } from "../../outputs/AggregateTagOnEvent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagOnEvent)
export class AggregateTagOnEventResolver {
  @TypeGraphQL.Query(_returns => AggregateTagOnEvent, {
    nullable: false
  })
  async aggregateTagOnEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTagOnEventArgs): Promise<AggregateTagOnEvent> {
    return getPrismaFromContext(ctx).tagOnEvent.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
