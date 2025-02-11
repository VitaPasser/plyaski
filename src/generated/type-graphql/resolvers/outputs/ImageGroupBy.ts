import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCountAggregate } from "../outputs/ImageCountAggregate";
import { ImageMaxAggregate } from "../outputs/ImageMaxAggregate";
import { ImageMinAggregate } from "../outputs/ImageMinAggregate";

@TypeGraphQL.ObjectType("ImageGroupBy", {})
export class ImageGroupBy {
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

  @TypeGraphQL.Field(_type => ImageCountAggregate, {
    nullable: true
  })
  _count!: ImageCountAggregate | null;

  @TypeGraphQL.Field(_type => ImageMinAggregate, {
    nullable: true
  })
  _min!: ImageMinAggregate | null;

  @TypeGraphQL.Field(_type => ImageMaxAggregate, {
    nullable: true
  })
  _max!: ImageMaxAggregate | null;
}
