import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Event } from "../../../models/Event";
import { Image } from "../../../models/Image";
import { ImageEventArgs } from "./args/ImageEventArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Image)
export class ImageRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Event, {
    nullable: true
  })
  async Event(@TypeGraphQL.Root() image: Image, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ImageEventArgs): Promise<Event | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).image.findUniqueOrThrow({
      where: {
        id: image.id,
      },
    }).Event({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
