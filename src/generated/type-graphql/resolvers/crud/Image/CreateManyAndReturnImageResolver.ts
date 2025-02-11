import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnImageArgs } from "./args/CreateManyAndReturnImageArgs";
import { Image } from "../../../models/Image";
import { CreateManyAndReturnImage } from "../../outputs/CreateManyAndReturnImage";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Image)
export class CreateManyAndReturnImageResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnImage], {
    nullable: false
  })
  async createManyAndReturnImage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnImageArgs): Promise<CreateManyAndReturnImage[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).image.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
