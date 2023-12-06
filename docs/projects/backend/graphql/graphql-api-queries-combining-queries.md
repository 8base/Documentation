---
id: 'graphql-api-queries-combining-queries'
sidebar_label: 'Combining Queries'
redirect_from: '/projects/backend/graphql-api/queries/combining-queries'
slug: '/backend/graphql-api/queries/combining-queries'
---

# Combining Queries

You can combine multiple queries into a single request. If multiple queries are combined into a single request, they get executed in parallel, the responses are collated and returned as a single response object. This lets you fetch objects of different and unrelated types in the same query.

In the following examples, we have a table called `Posts`, which contains fields and relations like `title`, `body`, `author`.

**Request**

```graphql
query {
  /* A profile about the author */
  author(name: "Huxley") {
    posts {
      count
      items {
        title
      }
    }
  }

  /* A list of posts from other authors */
  postsList(filter: {
    author: {
      name: {
        not_equals: "Huxley"
      }
    }
  }) {
    items {
      title
    }
  }

  /* A list of others other than the huxley */
  authorsList(filter: {
    name: {
      not_equals: "Huxley"
    }
  }) {
    count
    items {
      name
    }
  }
}
```

**Result**

```json
{
  "data": {
    "author": {
      "posts": {
        "count": 2,
        "items": [
          {
            "title": "Awesome Possum"
          },
          {
            "title": "Abominable Snowman Found Dead in Miami Motel"
          }
        ]
      }
    },
    "postsList": {
      "items": [
        {
          "title": "A Sunset and Waves"
        },
        {
          "title": "Vapor Distilled Water for All"
        },
        {
          "title": "Everybody Loves Possum"
        }
      ]
    },
    "authorsList": {
      "count": 2,
      "items": [
        {
          "name": "Stevens"
        },
        {
          "name": "Vanderwall"
        }
      ]
    }
  }
}
```


