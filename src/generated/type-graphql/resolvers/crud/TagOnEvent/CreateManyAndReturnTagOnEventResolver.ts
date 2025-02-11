import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTagOnEventArgs } from "./args/CreateManyAndReturnTagOnEventArgs";
import { TagOnEvent } from "../../../models/TagOnEvent";
import { CreateManyAndReturnTagOnEvent } from "../../outputs/CreateManyAndReturnTagOnEvent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagOnEvent)
export class CreateManyAndReturnTagOnEventResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTagOnEvent], {
    nullable: false
  })
  async createManyAndReturnTagOnEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTagOnEventArgs): Promise<CreateManyAndReturnTagOnEvent[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
