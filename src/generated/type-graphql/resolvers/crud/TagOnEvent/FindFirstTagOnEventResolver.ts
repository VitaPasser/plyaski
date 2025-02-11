import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTagOnEventArgs } from "./args/FindFirstTagOnEventArgs";
import { TagOnEvent } from "../../../models/TagOnEvent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagOnEvent)
export class FindFirstTagOnEventResolver {
  @TypeGraphQL.Query(_returns => TagOnEvent, {
    nullable: true
  })
  async findFirstTagOnEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTagOnEventArgs): Promise<TagOnEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
