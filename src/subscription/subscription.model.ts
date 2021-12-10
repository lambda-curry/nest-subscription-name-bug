import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Subscription')
export class Subscription {
  @Field()
  id: string;

  @Field(() => [Order], { nullable: true })
  orders?: Order[];
}

@ObjectType('Order')
export class Order {
  @Field()
  id: string;
}
