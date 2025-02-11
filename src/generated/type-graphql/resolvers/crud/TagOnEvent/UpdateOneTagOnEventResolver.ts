import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTagOnEventArgs } from "./args/UpdateOneTagOnEventArgs";
import { TagOnEvent } from "../../../models/TagOnEvent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagOnEvent)
export class UpdateOneTagOnEventResolver {
  @TypeGraphQL.Mutation(_returns => TagOnEvent, {
    nullable: true
  })
  async updateOneTagOnEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTagOnEventArgs): Promise<TagOnEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
