import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagOnEventOrderByWithAggregationInput } from "../../../inputs/TagOnEventOrderByWithAggregationInput";
import { TagOnEventScalarWhereWithAggregatesInput } from "../../../inputs/TagOnEventScalarWhereWithAggregatesInput";
import { TagOnEventWhereInput } from "../../../inputs/TagOnEventWhereInput";
import { TagOnEventScalarFieldEnum } from "../../../../enums/TagOnEventScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTagOnEventArgs {
  @TypeGraphQL.Field(_type => TagOnEventWhereInput, {
    nullable: true
  })
  where?: TagOnEventWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TagOnEventOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagOnEventScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"eventId" | "tagId" | "createAt" | "updateAt">;

  @TypeGraphQL.Field(_type => TagOnEventScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TagOnEventScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
