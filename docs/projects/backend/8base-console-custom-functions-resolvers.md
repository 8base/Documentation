---
id: '8base-console-custom-functions-resolvers'
sidebar_label: 'Resolvers'
redirect_from: '/backend/custom-functions/resolvers'
slug: '/projects/backend/custom-functions/resolvers'
---

# Resolvers

A _resolver_ is a function type that gets exposed to the GraphQL API and can be directly called from client apps. Resolvers allow you to add custom queries and mutations in addition to the auto-generated CRUD operations 8base handles for you. Resolvers are used to integrate 3rd party APIs, query / coerce data, or run custom algorithms.

### 8base.yml Declaration

Resolver declarations require a _handler.code_, _type_, and _schema_ definition. While the _type_ value must equal 'resolver', _handler.code_ and _schema_ both accept relative path values to the resolver's two required files.

```yaml
#
# Both the function handler and GraphQL schema definition
# must be specified using relative paths in the 8base.yml.
#
functions:
  #
  # Declare custom GraphQL resolvers like so.
  paymentResolver:
    handler:
      code: src/mutations/payment/handler.js
    type: resolver
    schema: src/mutations/payment/schema.graphql
```

All resolver functions require unique names. You are able to deploy as many resolvers as you want to a single workspace.

### Schema.graphql

The `schema.graphql` file defines the GraphQL function and permitted response type. This describes the function name and arguments that the developer connecting to the GraphQL API has available.

```javascript
type HelloResult {
  result: String!
}

extend type Mutation {
  hello(name: String): HelloResult
}

// Or alternatively...

extend type Query {
  hello(name: String): HelloResult
}
```

### Resolver Handler

The `handler.js` file defines the JavaScript function handling the GraphQL call.

```javascript
module.exports = (event) => {
  const name = event.data.name;

  return {
    data: {
      result: `Hello ${name}!`,
    },
  };
};
```

### Resolver Arguments

To learn about the arguments that are passed to resolvers, review the [custom function arguments docs.](/projects/backend/custom-functions/#custom-function-arguments)

### Resolver Response

The value returned by a resolver is allowed two properties: _data_ and _errors_. The format of the data property should conform to the schema defined in the `schema.graphql` file.

```javascript
return {
  data: {
    result: 'Hello world',
  },
  errors: [
    {
      message: 'Error message',
      code: 'error_code',
    },
  ],
};
```
