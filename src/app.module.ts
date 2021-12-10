import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
  imports: [
    SubscriptionModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
