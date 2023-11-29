---
id: 'graphql-api-queries-single-record-query'
sidebar_label: 'Single Record Query'
redirect_from: '/projects/backend/graphql-api/queries/single-record-query'
slug: '/backend/graphql-api/queries/single-record-query'
---

# Single Record Query

You can fetch a single record using queries. In the following examples, we have a table called `Posts`, which contains fields and relations like `title`, `body`, `author`.

## Fetching specific table records

You can fetch a single record using the record's `id`.

**Request**

```graphql
query {
  post(id: "<POST_ID>") {
    id
    title
    body
  }
}
```

**Response**

```json
{
  "data": {
    "post": {
      "id": "<POST_ID>",
      "title": "Awesome Possum",
      "body": "This post is awesome, like a possum!"
    }
  }
}
```

## Single record queries using unique fields

You can fetch a single record using a unique field other than `id`. This field must be specified as _No Duplicate Values_ in the table's field definition.

**Request**

```graphql
query {
  post(title: "Awesome Possum") {
    title
    body
  }
}
```

**Response**

```json
{
  "data": {
    "post": {
      "title": "Awesome Possum",
      "body": "This post is awesome, like a possum!"
    }
  }
}
```

