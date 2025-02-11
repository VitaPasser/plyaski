import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EventCreateManyInput } from "../../../inputs/EventCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEventArgs {
  @TypeGraphQL.Field(_type => [EventCreateManyInput], {
    nullable: false
  })
  data!: EventCreateManyInput[];
}
