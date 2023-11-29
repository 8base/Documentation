---
id: 'graphql-api-queries-record-list-query'
sidebar_label: 'Record List Query'
redirect_from: '/projects/backend/graphql-api/queries/record-list-query'
slug: '/backend/graphql-api/queries/record-list-query'
---

# Record List Query

In the following examples, we have a table called `Posts`, which contains fields and relations like `title`, `body`, `author`.

## Fetching multiple table records

Query list of records from a single table. Note the `items` key that denotes an array of results will get returned.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
query {
  postsList {
    count
    items {
      title
      body
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
    "postsList": {
      "count": 3,
      "items": [
        {
          "title": "Awesome Possum",
          "body": "This post is awesome, like a possum!"
        },
        {
          "title": "A Sunset and Waves",
          "body": "There was once a beautiful sunset, and waves."
        },
        {
          "title": "Vapor Distilled Water for All",
          "body": "Everyone can have vapor distilled water."
        }
      ]
    }
  }
}
```

</div>
</div>
