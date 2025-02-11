import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagOnEventOrderByWithRelationInput } from "../../../inputs/TagOnEventOrderByWithRelationInput";
import { TagOnEventWhereInput } from "../../../inputs/TagOnEventWhereInput";
import { TagOnEventWhereUniqueInput } from "../../../inputs/TagOnEventWhereUniqueInput";
import { TagOnEventScalarFieldEnum } from "../../../../enums/TagOnEventScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TagEventArgs {
  @TypeGraphQL.Field(_type => TagOnEventWhereInput, {
    nullable: true
  })
  where?: TagOnEventWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TagOnEventOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TagOnEventWhereUniqueInput, {
    nullable: true
  })
  cursor?: TagOnEventWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"eventId" | "tagId" | "createAt" | "updateAt"> | undefined;
}
