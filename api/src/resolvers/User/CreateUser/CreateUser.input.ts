import { Field, InputType } from "type-graphql";

@InputType()
export class CreateUserInput {
  @Field()
  ghAccessToken: string;
}
