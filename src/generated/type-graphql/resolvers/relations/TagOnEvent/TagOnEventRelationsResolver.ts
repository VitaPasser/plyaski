import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Event } from "../../../models/Event";
import { Tag } from "../../../models/Tag";
import { TagOnEvent } from "../../../models/TagOnEvent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagOnEvent)
export class TagOnEventRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Event, {
    nullable: false
  })
  async event(@TypeGraphQL.Root() tagOnEvent: TagOnEvent, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Event> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.findUniqueOrThrow({
      where: {
        eventId_tagId: {
          eventId: tagOnEvent.eventId,
          tagId: tagOnEvent.tagId,
        },
      },
    }).event({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Tag, {
    nullable: false
  })
  async tag(@TypeGraphQL.Root() tagOnEvent: TagOnEvent, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Tag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.findUniqueOrThrow({
      where: {
        eventId_tagId: {
          eventId: tagOnEvent.eventId,
          tagId: tagOnEvent.tagId,
        },
      },
    }).tag({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
