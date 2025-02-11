import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImageCreateManyInput } from "../../../inputs/ImageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyImageArgs {
  @TypeGraphQL.Field(_type => [ImageCreateManyInput], {
    nullable: false
  })
  data!: ImageCreateManyInput[];
}
