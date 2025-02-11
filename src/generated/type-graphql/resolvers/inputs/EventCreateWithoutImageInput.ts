import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MapCreateNestedOneWithoutEventInput } from "../inputs/MapCreateNestedOneWithoutEventInput";
import { TagOnEventCreateNestedManyWithoutEventInput } from "../inputs/TagOnEventCreateNestedManyWithoutEventInput";

@TypeGraphQL.InputType("EventCreateWithoutImageInput", {})
export class EventCreateWithoutImageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  header!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => TagOnEventCreateNestedManyWithoutEventInput, {
    nullable: true
  })
  tags?: TagOnEventCreateNestedManyWithoutEventInput | undefined;

  @TypeGraphQL.Field(_type => MapCreateNestedOneWithoutEventInput, {
    nullable: false
  })
  map!: MapCreateNestedOneWithoutEventInput;
}
