import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Event } from "../../../models/Event";
import { Image } from "../../../models/Image";
import { Map } from "../../../models/Map";
import { TagOnEvent } from "../../../models/TagOnEvent";
import { EventImageArgs } from "./args/EventImageArgs";
import { EventTagsArgs } from "./args/EventTagsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Event)
export class EventRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [TagOnEvent], {
    nullable: false
  })
  async tags(@TypeGraphQL.Root() event: Event, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EventTagsArgs): Promise<TagOnEvent[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).event.findUniqueOrThrow({
      where: {
        id: event.id,
      },
    }).tags({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Image], {
    nullable: false
  })
  async image(@TypeGraphQL.Root() event: Event, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EventImageArgs): Promise<Image[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).event.findUniqueOrThrow({
      where: {
        id: event.id,
      },
    }).image({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Map, {
    nullable: false
  })
  async map(@TypeGraphQL.Root() event: Event, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Map> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).event.findUniqueOrThrow({
      where: {
        id: event.id,
      },
    }).map({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
