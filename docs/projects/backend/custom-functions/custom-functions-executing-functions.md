---
id: 'custom-functions-executing-functions'
sidebar_label: 'Executing Custom Functions'
redirect_from: '/backend/custom-functions/custom-functions-executing-functions'
slug: '/backend/custom-functions/custom-functions-executing-functions'
---

# Executing Custom Functions

Once your custom function is deployed, its execution will depend on its type.

## Resolvers
As these are extension of the GraphQL API, you can invoke it using GraphQL `query` or `mutation` constructs. For example, 

For example, if you had created a resolver with a schema like this
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
You will be able to invoke it using this GraphQL command
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

These will be executed when the [targeted event occurs in the table](/projects/backend/custom-functions/triggers#8baseyml)

## Webhooks

After deployment the function will be available as a HTTP endpoint in a path like `https://api.8base.com/<WORKSPACE_ID>/webhook/<WEBHOOK_NAME>`. The request must be made with the HTTP verb declared as method on the [8base.yml](/projects/backend/custom-functions/webhooks#8baseyml-declaration)

## Tasks

If the Task was declared as scheduled, it will be executed in the intervals specififed in the [8base.yml](/projects/backend/custom-functions/tasks#8baseyml). Otherwise, they can be executed via code as explained for the  [Non-scheduled function calls](/projects/backend/custom-functions/tasks#non-scheduled-function-calls)