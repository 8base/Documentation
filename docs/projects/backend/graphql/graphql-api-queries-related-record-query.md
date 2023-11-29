---
id: 'graphql-api-queries-related-record-query'
sidebar_label: 'Retrieving a Record'
slug: '/backend/graphql-api/queries/related-record-query'
---
# Retrieving a Record

You can use queries to retrieve records. In the following examples, we have a table called `Posts`, which contains fields and relations like `title`, `body`, `author`.

## Fetching related table records

Query a single record and return data from related tables in the response.

**Request**

```graphql
query {
  post(title: "Awesome Possum") {
    title
    author {
      name
      avatar {
        downloadUrl
      }
    }
  }
}
```

**Result**

```json
{
  "data": {
    "post": {
      "title": "Awesome Possum",
      "author": {
        "name": "Huxley",
        "avatar": {
          "downloadUrl": "https://linktomy.downloadUrl/forA/amazingAvatar.jpg"
        }
      }
    }
  }
}
```


