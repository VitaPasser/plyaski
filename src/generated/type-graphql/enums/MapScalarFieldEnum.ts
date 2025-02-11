import * as TypeGraphQL from "type-graphql";

export enum MapScalarFieldEnum {
  id = "id",
  x = "x",
  y = "y"
}
TypeGraphQL.registerEnumType(MapScalarFieldEnum, {
  name: "MapScalarFieldEnum",
  description: undefined,
});
