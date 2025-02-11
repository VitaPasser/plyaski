import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnImageEventArgs } from "./args/CreateManyAndReturnImageEventArgs";
import { Event } from "../../models/Event";

@TypeGraphQL.ObjectType("CreateManyAndReturnImage", {})
export class CreateManyAndReturnImage {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  src!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  eventId!: string | null;

  Event!: Event | null;

  @TypeGraphQL.Field(_type => Event, {
    name: "Event",
    nullable: true
  })
  getEvent(@TypeGraphQL.Root() root: CreateManyAndReturnImage, @TypeGraphQL.Args() args: CreateManyAndReturnImageEventArgs): Event | null {
    return root.Event;
  }
}
