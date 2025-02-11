import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTagOnEventOrThrowArgs } from "./args/FindUniqueTagOnEventOrThrowArgs";
import { TagOnEvent } from "../../../models/TagOnEvent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagOnEvent)
export class FindUniqueTagOnEventOrThrowResolver {
  @TypeGraphQL.Query(_returns => TagOnEvent, {
    nullable: true
  })
  async getTagOnEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTagOnEventOrThrowArgs): Promise<TagOnEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
