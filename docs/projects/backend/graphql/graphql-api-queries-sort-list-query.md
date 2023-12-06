---
id: 'graphql-api-queries-sort-list-query'
sidebar_label: 'Sort List Queries'
redirect_from: '/projects/backend/graphql-api/queries/sort-list-query'
slug: '/backend/graphql-api/queries/sort-list-query'
---

# Sort List Queries

Results from your query can be sorted by using the `sort` argument. The sort order (ascending vs. descending) gets set by specifying ASC or DESC for the field name.

In the following examples, we have a table called `Posts`, which contains fields and relations like `title`, `body`, `author`.

## Using Sorting in Queries

Here is a query where the results will be sorted in ascending order of creation date.

**Request**

```graphql
query {
  postsList(sort: {
    createdAt: ASC
  }) {
    items {
      createdAt
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
          "createdAt": "2019-09-04T22:11:18.493Z",
          "title": "Awesome Possum"
        },
        {
          "createdAt": "2019-09-04T22:22:51.846Z",
          "title": "A Sunset and Waves"
        },
        {
          "createdAt": "2019-09-04T22:23:22.710Z",
          "title": "Vapor Distilled Water for All"
        },
        {
          "createdAt": "2019-09-04T22:26:19.045Z",
          "title": "Everybody Loves Possum"
        },
        {
          "createdAt": "2019-09-04T22:32:50.430Z",
          "title": "Abominable Snowman Found Dead in Miami Motel"
        }
      ]
    }
  }
}
```

## Nested and Multi-field Sorting

Results from your query can be sorted by attributes on related tables, as well as using multiple sort objects. They're ranked in priority by the order they are recieved in.

**Request**

```graphql
query {
  postsList(sort: [
    {
      author: {
        name: DESC
      }
    },
    {
      title: ASC
    }
  ]) {
    items {
      title
      createdAt
      author {
        name
      }
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
          "title": "Vapor Distilled Water for All",
          "createdAt": "2019-09-04T22:23:22.710Z",
          "author": {
            "name": "Vanderwall"
          }
        },
        {
          "title": "A Sunset and Waves",
          "createdAt": "2019-09-04T22:22:51.846Z",
          "author": {
            "name": "Stevens"
          }
        },
        {
          "title": "Everybody Loves Possum",
          "createdAt": "2019-09-04T22:26:19.045Z",
          "author": {
            "name": "Stevens"
          }
        },
        {
          "title": "Abominable Snowman Found Dead in Miami Motel",
          "createdAt": "2019-09-04T22:32:50.430Z",
          "author": {
            "name": "Huxley"
          }
        },
        {
          "title": "Awesome Possum",
          "createdAt": "2019-09-04T22:11:18.493Z",
          "author": {
            "name": "Huxley"
          }
        }
      ]
    }
  }
}
```


