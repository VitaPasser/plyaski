import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMapArgs } from "./args/CreateManyAndReturnMapArgs";
import { Map } from "../../../models/Map";
import { CreateManyAndReturnMap } from "../../outputs/CreateManyAndReturnMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Map)
export class CreateManyAndReturnMapResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMap], {
    nullable: false
  })
  async createManyAndReturnMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMapArgs): Promise<CreateManyAndReturnMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).map.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
