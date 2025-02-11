import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Event } from "../../../models/Event";
import { Map } from "../../../models/Map";
import { MapEventArgs } from "./args/MapEventArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Map)
export class MapRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Event], {
    nullable: false
  })
  async Event(@TypeGraphQL.Root() map: Map, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MapEventArgs): Promise<Event[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).map.findUniqueOrThrow({
      where: {
        id: map.id,
      },
    }).Event({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
