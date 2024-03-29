---
id: 'graphql-api-subscriptions-simple-record-subscriptions'
sidebar_label: 'Simple Record Subscriptions'
redirect_from: '/projects/backend/graphql-api/subscriptions/simple-record-subscriptions'
slug: '/backend/graphql-api/subscriptions/simple-record-subscriptions'
---

# Simple Record Subscriptions

You can subscribe to records being created, updated, and deleted using 8base's auto-generated GraphQL subscription operation.

In the following examples, we have a table called `Posts`, which contains fields and relations like `title`, `body`, `author`.

### Create a Subscription

Subscription for listening to table records being created.

```javascript
subscription {
  Posts(filter: {
    mutation_in: [create]
  }) {
    node {
      title
      publishingDate
    }
  }
}
```

```json
{
  "data": {
    "Posts": {
      "node": {
        "title": "Nothing is Im-possumble",
        "publishingDate": "2020-01-18"
      }
    }
  }
}
```

### Update a Subscription

Subscription for listening to table records being updated.

```javascript
subscription {
  Posts(filter: {
    mutation_in: [update]
  }) {
    node {
      title
      body
      publishingDate
      updatedAt
    }
    previousValues {
      title
      body
    }
    updatedFields
  }
}
```

```json
{
  "data": {
    "Posts": {
      "node": {
        "title": "Nothing is ever Im-possumble",
        "body": "Never let anyone tell you that something you want in life is impossumble.",
        "publishingDate": "2020-01-18",
        "updatedAt": "2019-10-01T17:50:18.621Z"
      },
      "previousValues": {
        "title": "Nothing is Im-possumble",
        "body": "Never let anyone tell you that something is impossumble."
      },
      "updatedFields": ["title", "body"]
    }
  }
}
```

### Delete a Subscription

Subscription for listening to table records being deleted.

```javascript
subscription {
  Posts(filter: {
    mutation_in: [delete]
  }) {
    node {
      title
    }
  }
}
```

```json
{
  "data": {
    "Posts": {
      "node": {
        "title": "10 Types of Fruit Possums Love"
      }
    }
  }
}
```
