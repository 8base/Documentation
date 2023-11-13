---
id: 'development-tools-dev-env-8base-yml'
sidebar_label: '8base Config'
redirect_from: '/backend/development-tools/dev-env/8base-yml'
slug: '/backend/custom-functions/dev-environment/8base-yml'
---
# 8base Config

`8base.yml` is the main configuration file where you define how custom functions get exposed and called. You can also define custom permissions that can restrict access to certain paths in your code.

The file consists of two sections:

- `functions`: List and configure all your custom functions. To learn more about custome functions, see [Custom Functions](/backend/custom-functions/custom-functions
).
- `settings`: List of additional global settings for your project.

## Example 8base.yml

```yaml
functions:
  resolverExample:
    handler:
      code: src/resolverFunc.ts
    type: resolver
    schema: src/resolverFunc.graphql
    description: |
      An optional description of your resolver function.

  triggerBefore:
    handler:
      code: src/triggerBefore.ts
    type: trigger.before
    operation: TableName.create
    description: |
      An optional description of your trigger function.

  triggerAfter:
    handler:
      code: src/triggerAfter.ts
    type: trigger.after
    operation: TableName.create
    description: |
      An optional description of your trigger function.

  webhookExample:
    handler:
      code: src/webhookFunc.ts
    type: webhook
    path: webhook_url #optional, default: function name
    method: POST
    description: |
      An optional description of your webhook function.

  taskExample:
    handler:
      code: src/taskFunc.ts
    type: task
    schedule: 'rate(1 minute)'
    description: |
      An optional description of your task function.

settings:
  timeout: 500 # you can specify any value from 1 to 900 seconds
```
