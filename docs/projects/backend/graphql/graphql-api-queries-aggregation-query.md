---
id: 'graphql-api-queries-aggregation-query'
sidebar_label: 'Aggregation Query'
redirect_from: '/projects/backend/graphql-api/queries/aggregation-query'
slug: '/backend/graphql-api/queries/aggregation-query'
---

# Simple Aggregation

In the following examples, we have a table called `Posts` exists, having expected fields and relations like `title`, `body`, `author`.

## Using aggregators in queries

You can fetch aggregations on nodes using an aggregation query. Currently the available aggregation function is `count`.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
query {
  author(name: "Huxley") {
    name
    posts {
      count
      items {
        title
      }
    }
  }
}
```

</div>
<div>
<label>Response</label>

```json
{
  "data": {
    "author": {
      "name": "Huxley",
      "posts": {
        "count": 2,
        "items": [
          { "title": "10 things you never knew about Possums" },
          { "title": "3 things you never wanted to know about Possums" }
        ]
      }
    }
  }
}
```

</div>
</div>
