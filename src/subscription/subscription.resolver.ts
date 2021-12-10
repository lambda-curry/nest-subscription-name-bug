import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Order, Subscription } from './subscription.model';

@Resolver(() => Subscription)
export class SubscriptionResolver {
  @Query(() => [Subscription])
  async subscriptions(): Promise<Subscription[]> {
    return [
      {
        id: 'subscription_1',
      },
      {
        id: 'subscription_2',
      },
    ];
  }

  @ResolveField()
  async orders(): Promise<Order[]> {
    console.log(
      "I'm never called even when the orders are queried in graphql, but try changing the name of Subscription to SubscriptionModel in the @ObjectType decorator and see that it suddenly works fine."
    );
    return [{ id: 'order_1' }, { id: 'order_2' }];
  }
}
