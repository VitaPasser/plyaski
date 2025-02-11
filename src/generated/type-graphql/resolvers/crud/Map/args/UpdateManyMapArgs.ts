import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MapUpdateManyMutationInput } from "../../../inputs/MapUpdateManyMutationInput";
import { MapWhereInput } from "../../../inputs/MapWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMapArgs {
  @TypeGraphQL.Field(_type => MapUpdateManyMutationInput, {
    nullable: false
  })
  data!: MapUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MapWhereInput, {
    nullable: true
  })
  where?: MapWhereInput | undefined;
}
