---
id: 'graphql-api-queries-paginated-query-results'
sidebar_label: 'Paginated Query Results'
redirect_from: '/projects/backend/graphql-api/queries/paginated-query-results'
slug: '/backend/graphql-api/queries/paginated-query-results'
---

# Pagenated Queries

In the following examples, we have a table called `Posts`, which contains fields and relations like `title`, `body`, `author`.

## Using pagination in queries

The arguments `skip` and `first` get used for pagination.

`first` specifies the number of rows to pass from the result set and `skip` determines which slice to retain from the results.

**Request**

```graphql
query {
  /**
   * First consider 0 as the starting slice of paginated rcords. As this
   * number is increased, the prior results leave out previously fetched
   * records. (i.e., skip 0 -> skip 3 -> skip 6 -> skip 9...)
   */
  postsList(skip: 0, first: 3) {
    items {
      title
    }
  }
}

```

**Result**

```json
{
  "data": {
    "postsList": {
      "items": [
        {
          "title": "Awesome Possum"
        },
        {
          "title": "A Sunset and Waves"
        },
        {
          "title": "Vapor Distilled Water for All"
        }
      ]
    }
  }
}
```


