import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTagOnEventArgs } from "./args/AggregateTagOnEventArgs";
import { CreateManyAndReturnTagOnEventArgs } from "./args/CreateManyAndReturnTagOnEventArgs";
import { CreateManyTagOnEventArgs } from "./args/CreateManyTagOnEventArgs";
import { CreateOneTagOnEventArgs } from "./args/CreateOneTagOnEventArgs";
import { DeleteManyTagOnEventArgs } from "./args/DeleteManyTagOnEventArgs";
import { DeleteOneTagOnEventArgs } from "./args/DeleteOneTagOnEventArgs";
import { FindFirstTagOnEventArgs } from "./args/FindFirstTagOnEventArgs";
import { FindFirstTagOnEventOrThrowArgs } from "./args/FindFirstTagOnEventOrThrowArgs";
import { FindManyTagOnEventArgs } from "./args/FindManyTagOnEventArgs";
import { FindUniqueTagOnEventArgs } from "./args/FindUniqueTagOnEventArgs";
import { FindUniqueTagOnEventOrThrowArgs } from "./args/FindUniqueTagOnEventOrThrowArgs";
import { GroupByTagOnEventArgs } from "./args/GroupByTagOnEventArgs";
import { UpdateManyTagOnEventArgs } from "./args/UpdateManyTagOnEventArgs";
import { UpdateOneTagOnEventArgs } from "./args/UpdateOneTagOnEventArgs";
import { UpsertOneTagOnEventArgs } from "./args/UpsertOneTagOnEventArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TagOnEvent } from "../../../models/TagOnEvent";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTagOnEvent } from "../../outputs/AggregateTagOnEvent";
import { CreateManyAndReturnTagOnEvent } from "../../outputs/CreateManyAndReturnTagOnEvent";
import { TagOnEventGroupBy } from "../../outputs/TagOnEventGroupBy";

@TypeGraphQL.Resolver(_of => TagOnEvent)
export class TagOnEventCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTagOnEvent, {
    nullable: false
  })
  async aggregateTagOnEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTagOnEventArgs): Promise<AggregateTagOnEvent> {
    return getPrismaFromContext(ctx).tagOnEvent.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTagOnEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTagOnEventArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => TagOnEvent, {
    nullable: false
  })
  async createOneTagOnEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTagOnEventArgs): Promise<TagOnEvent> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTagOnEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTagOnEventArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TagOnEvent, {
    nullable: true
  })
  async deleteOneTagOnEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTagOnEventArgs): Promise<TagOnEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => TagOnEvent, {
    nullable: true
  })
  async findFirstTagOnEventOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTagOnEventOrThrowArgs): Promise<TagOnEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TagOnEvent], {
    nullable: false
  })
  async tagOnEvents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTagOnEventArgs): Promise<TagOnEvent[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TagOnEvent, {
    nullable: true
  })
  async tagOnEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTagOnEventArgs): Promise<TagOnEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [TagOnEventGroupBy], {
    nullable: false
  })
  async groupByTagOnEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTagOnEventArgs): Promise<TagOnEventGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTagOnEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTagOnEventArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => TagOnEvent, {
    nullable: false
  })
  async upsertOneTagOnEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTagOnEventArgs): Promise<TagOnEvent> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagOnEvent.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
