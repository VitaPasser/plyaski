import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateOrConnectWithoutImageInput } from "../inputs/EventCreateOrConnectWithoutImageInput";
import { EventCreateWithoutImageInput } from "../inputs/EventCreateWithoutImageInput";
import { EventUpdateToOneWithWhereWithoutImageInput } from "../inputs/EventUpdateToOneWithWhereWithoutImageInput";
import { EventUpsertWithoutImageInput } from "../inputs/EventUpsertWithoutImageInput";
import { EventWhereInput } from "../inputs/EventWhereInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpdateOneWithoutImageNestedInput", {})
export class EventUpdateOneWithoutImageNestedInput {
  @TypeGraphQL.Field(_type => EventCreateWithoutImageInput, {
    nullable: true
  })
  create?: EventCreateWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => EventCreateOrConnectWithoutImageInput, {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => EventUpsertWithoutImageInput, {
    nullable: true
  })
  upsert?: EventUpsertWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => EventWhereInput, {
    nullable: true
  })
  disconnect?: EventWhereInput | undefined;

  @TypeGraphQL.Field(_type => EventWhereInput, {
    nullable: true
  })
  delete?: EventWhereInput | undefined;

  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: true
  })
  connect?: EventWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateToOneWithWhereWithoutImageInput, {
    nullable: true
  })
  update?: EventUpdateToOneWithWhereWithoutImageInput | undefined;
}
