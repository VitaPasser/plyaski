import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MapCreateManyInput } from "../../../inputs/MapCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMapArgs {
  @TypeGraphQL.Field(_type => [MapCreateManyInput], {
    nullable: false
  })
  data!: MapCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
