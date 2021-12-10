### Nest Graphql Subscription Name Bug

### Installation

`npm install`

### Starting the Server

`npm run start:dev`

### Graphql Playground

When the application is running, you can go to [http://localhost:3000/graphql](http://localhost:3000/graphql) to access the GraphQL Playground. See [here](https://docs.nestjs.com/graphql/quick-start#playground) for more.

### Reproducing the Bug

Go to localhost:3000/graphql and run this query

```
query subscriptions {
  subscriptions {
    id,
    orders {
      id
    }
  }
}

```

Notice that orders always comes back null.

Now try changing the `@ObjectType('Subscription')` to `@ObjectType('SubscriptionModel')`, and run the same query

Notice that it works.
