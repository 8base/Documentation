---
id: 'graphql-api-mutations-related-record-mutations'
sidebar_label: 'Mutating Related Records'
slug: '/backend/graphql-api/mutations/related-record-mutations'
---

# Mutating Related Records
You can create, connect, reconnect, and disconnect related table records using 8base's auto-generated GraphQL mutation operations.

- **Create**: Create and relate child objects.
- **Connect**: Connect existing objects in addition to already connected objects.
- **Reconnect**: Replace old connected objects with a new set of connected objects (update mutation only).
- **Disconnect**: Disconnect connected object(s) (update mutation only).

In the following examples, we have a table called `Posts`, which contains fields and relations like `title`, `body`, `author`.

:::note 
Some examples will use [aliases](/backend/graphql-api/#aliases) to show side by side the use of `data.id` versus `filter`. All examples work without aliases.
:::

## Creating Related Records in a Nested Mutation

Whether when creating or updating a parent record, one or more child records can be created using `create`.

```graphql
/**
 * The author record's bio is gets updated while
 * a new Post is being created and associated.
 */
mutation {
  authorUpdate(filter: {
    name: "Huxley"
  },
  data: {
    bio: "Just a guy who loves possum.",
    posts: {
      create: [{
        title: "Can't stop the Possum",
        body: "Cause Possum is Awesome",
        publishingDate: "2019-09-22T03:45:33.432Z"
      }]
    }
  }) {
    posts(last: 1) {
      items {
        title
      }
    }
  }
}
```

```json
{
  "data": {
    "authorUpdate": {
      "posts": {
        "items": [
          {
            "title": "Can't stop the Possum"
          }
        ]
      }
    }
  }
}
```

## Connecting Records in a Mutation

One or more records can be connected using a mutation that associates them - whether the relationship is _many-to-many_, _one-to-many_, or _one-to-one_.

```graphql
/**
 * The author gets changed to the author
 * named "Stevens" using connect.
 */
mutation {
  postUpdate(filter: {
    title: "Can't stop the Possum"
  },
  data: {
    author: {
      connect: {
        name: "Stevens"
      }
    }
  }) {
    title
    author {
      name
    }
  }
}
```

```json
{
  "data": {
    "postUpdate": {
      "title": "Can't stop the Possum",
      "author": {
        "name": "Stevens"
      }
    }
  }
}
```

## Re-connecting Records in a Mutation

All related records can be _dissasociated_ from a record, while _connecting_ one or more in a specified set.

```graphql
/**
 * All posts belonging to the author Huxley are changed to the new set.
 */
mutation {
  authorUpdate(filter: {
    name: "Huxley"
  },
  data: {
    posts: {
      reconnect: [{
        id: "ck08eum6101qf01l9cn6v35v4"
      }, {
        id: "ck08eve7t01r701l9fsg9a4ow"
      }]
    }
  }) {
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

```json
{
  "data": {
    "authorUpdate": {
      "name": "Huxley",
      "posts": {
        "count": 2,
        "items": [
          {
            "title": "Awesome Possum"
          },
          {
            "title": "Pt.2 of the Possum Trilogy"
          }
        ]
      }
    }
  }
}
```

## Disconnecting Records in a Mutation

One or more records can be disconnected using a mutation - whether the relationship is _many-to-many_, _one-to-many_, or _one-to-one_. If the relationship is _mandatory_, an error will be raised.

```graphql
/**
 * All posts belonging to the author
 * Huxley are changed to the new set.
 */
mutation {
  authorUpdate(filter: {
    name: "Huxley"
  },
  data: {
    publications: {
      disconnect: [{
        id: "ck0d2peue00sg01l36w2q2gdo"
      }, {
        id: "ck0d2q07g00sx01l340mt7lh9"
      }]
    }
  }) {
    name
    publications {
      count
    }
  }
}
```

```json
{
  "data": {
    "authorUpdate": {
      "name": "Huxley",
      "publications": {
        "count": 0
      }
    }
  }
}
```
