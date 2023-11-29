---
id: 'graphql-api-queries-single-record-query'
sidebar_label: 'Single Record Query'
redirect_from: '/projects/backend/graphql-api/queries/single-record-query'
slug: '/backend/graphql-api/queries/single-record-query'
---

# Single Record Query

In the following examples, we have a table called `Posts` exists, having expected fields and relations like `title`, `body`, `author`.

## Fetching specific table records

You can fetch a single record using the record's `id`.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
query {
  post(id: "<POST_ID>") {
    id
    title
    body
  }
}
```

</div>
<div>
<label>Response</label>

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

</div>
</div>

## Single record queries using unique fields

You can fetch a single record using a unique field other than `id`. This field must be specified as _No Duplicate Values_ in the table's field definition.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
query {
  post(title: "Awesome Possum") {
    title
    body
  }
}
```

</div>
<div>
<label>Response</label>

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

</div>
</div>
