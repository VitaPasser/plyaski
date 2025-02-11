import * as TypeGraphQL from "type-graphql";

export enum TagOnEventScalarFieldEnum {
  eventId = "eventId",
  tagId = "tagId",
  createAt = "createAt",
  updateAt = "updateAt"
}
TypeGraphQL.registerEnumType(TagOnEventScalarFieldEnum, {
  name: "TagOnEventScalarFieldEnum",
  description: undefined,
});
