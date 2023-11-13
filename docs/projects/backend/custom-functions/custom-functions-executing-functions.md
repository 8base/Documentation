---
id: 'custom-functions-executing-functions'
sidebar_label: 'Executing Custom Functions'
redirect_from: '/backend/custom-functions/custom-functions-executing-functions'
slug: '/backend/custom-functions/custom-functions-executing-functions'
---
# Executing Custom Functions

Once a custom function is deployed, it can be executed. Each custom function type has different execution parameters.

## Resolvers
Resolvers are an extension of the GraphQL API. They can be invoked using GraphQL `query` or `mutation` constructs.  

For example, if you have a resolver with a schema like this:

```typescript
type StatResult {
  name: String,
  value: Int,
  performance: Float
}

type StatResultEntry {
  entryDate: Date,
  issueCount: [StatResult]
  issueComplexity: [StatResult]
}
type GetFilterStatsResult {
  result: [StatResultEntry]
}

extend type Query {
  getFilterStats(filterId: String!, size: Int!): GetFilterStatsResult
}

```
You can invoke it using this GraphQL command:

```graphql
query MyQuery {
  getFilterStats(filterId: "123", size: 10) {
    result {
      entryDate
      issueComplexity {
        name
        performance
        value
      }
      issueCount {
        name
        performance
        value
      }
    }
  }
}
```

## Triggers

Triggers execute when the defined event occurs. For example, you can set a trigger to execute every time a new user is created. To learn more, see [Triggers](/backend/custom-functions/triggers#8baseyml-declaration).

## Webhooks

After deployment, webooks are available as HTTP endpoints in a path. For example: `https://api.8base.com/<WORKSPACE_ID>/webhook/<WEBHOOK_NAME>`. The request must be made with the HTTP verb declared as method on the [8base.yml](/backend/custom-functions/webhooks#8baseyml-declaration).

## Tasks

If a task was declared as scheduled, it will execute during the intervals specified in the [8base.yml](/backend/custom-functions/tasks#8baseyml-declaration). Otherwise, they can be executed via code as explained in [Non-scheduled function calls](/backend/custom-functions/tasks#non-scheduled-function-calls).