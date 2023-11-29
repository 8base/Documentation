---
id: 'graphql-api-queries-filtered-list-query'
sidebar_label: 'Filtered List Query'
redirect_from: '/projects/backend/graphql-api/queries/filtered-list-query'
slug: '/backend/graphql-api/queries/filtered-list-query'
---

# Filtered List Queries

In the following examples, we have a table called `Posts`, which contains fields and relations like `title`, `body`, `author`.

## Using filters in queries

Query list of records that are filtered. Notice the `filter` argument.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
query {
  postsList(filter: {
    title: {
      contains: "Possum"
    },
    createdAt: {
      gt: "2019-09-01T00:00:00.000Z"
    }
  }) {
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
      "items": [
        {
          "title": "Awesome Possum",
          "body": "This post is awesome, like a possum!"
        },
        {
          "title": "Everybody Loves Possum",
          "body": "Seriously, there is nothing like a sweet and cuddly possum."
        }
      ]
    }
  }
}
```

</div>
</div>

## Conditional Filters

Conditional filters utilize the `AND` and `OR` keys.

### Using `AND`

When `AND` is specified, all filter objects must return _truthy_.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
query {
  postsList(filter: {
    /* 1 to N filters can be specified */
    AND: [
      {
        title: {
          contains: "Possum"
        }
      },
      {
        author: {
          name: {
            not_equals: "Huxley"
          }
        }
      }
    ]
  }) {
    items {
      title
      author {
        name
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
    "postsList": {
      "items": [
        {
          "title": "Everybody Loves Possum",
          "author": {
            "name": "Stevens"
          }
        }
      ]
    }
  }
}
```

</div>
</div>

### Using `OR`

When `OR` is specified, at least one filter object must return _truthy_.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
query {
  postsList(filter: {
    OR: [
      {
        title: {
          contains: "Possum"
        }
      },
      {
        author: {
          name: {
            not_equals: "Huxley"
          }
        }
      }
    ]
  }) {
    items {
      title
      author {
        name
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
    "postsList": {
      "items": [
        {
          "title": "Awesome Possum",
          "author": {
            "name": "Huxley"
          }
        },
        {
          "title": "A Sunset and Waves",
          "author": {
            "name": "Stevens"
          }
        },
        {
          "title": "Everybody Loves Possum",
          "author": {
            "name": "Stevens"
          }
        }
      ]
    }
  }
}
```

</div>
</div>

## Nested Filters

Filters, and all their elements, can be nested to satisfy more complex specs.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
query {
  postsList(filter: {
    OR: [
      {
        title: {
          contains: "Possum"
        }
      },
      {
        author: {
          name: {
            not_equals: "Huxley"
          }
        }
        AND: [
          {
            title: {
              starts_with: "Vapor"
            },
            author: {
              name: {
                starts_with: "Vander"
              }
            }
          },
          {
            createdAt: {
              gt: "2019-09-01T00:00:00.000Z"
            }
          }
        ]
      }
    ]
  }) {
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

</div>
<div>
<label>Response</label>

```json
{
  "data": {
    "postsList": {
      "items": [
        {
          "title": "Awesome Possum",
          "createdAt": "2019-09-04T22:11:18.493Z",
          "author": {
            "name": "Huxley"
          }
        },
        {
          "title": "Vapor Distilled Water for All",
          "createdAt": "2019-09-04T22:23:22.710Z",
          "author": {
            "name": "Vanderwall"
          }
        },
        {
          "title": "Everybody Loves Possum",
          "createdAt": "2019-09-04T22:26:19.045Z",
          "author": {
            "name": "Stevens"
          }
        }
      ]
    }
  }
}
```

</div>
</div>

## Filter Types

Depending on a field type, different filter predicates are available.

### ID

When filtering by a field of type ID, the available predicates are:

- _equals_: ID
- _not_equals_: ID
- _in_: [ID!]
- _not_in_: [ID!]
- _contains_: ID
- _not_contains_: ID
- _starts_with_: ID
- _not_starts_with_: ID
- _ends_with_: ID
- _not_ends_with_: ID
- _lt_: ID (less than)
- _lte_: ID (less than or equal to)
- _gt_: ID (greater than)
- _gte_: ID (greater that or equal to)
- _is_empty_: Boolean
- _is_not_empty_: Boolean

### Text/String

When filtering by a field of type String/Text, the available predicates are:

- _equals_: String
- _not_equals_: String
- _in_: [String!]
- _not_in_: [String!]
- _contains_: String
- _not_contains_: String
- _starts_with_: String
- _not_starts_with_: String
- _ends_with_: String
- _not_ends_with_: String
- _is_empty_: Boolean
- _is_not_empty_: Boolean

### Number/Integer

When filtering by a field of type Number/Integer, the available predicates are:

- _equals_: Int
- _not_equals_: Int
- _in_: [Int!]
- _not_in_: [Int!]
- _lt_: ID (less than)
- _lte_: ID (less than or equal to)
- _gt_: ID (greater than)
- _gte_: ID (greater that or equal to)
- _is_empty_: Boolean
- _is_not_empty_: Boolean

### Switch/Boolean

When filtering by a field of type Switch/Boolean, the available predicates are:

- _equals_: Boolean
- _not_equals_: Boolean
- _is_empty_: Boolean
- _is_not_empty_: Boolean

### Table

When filtering by a relation, the available predicates are:

- _some_: [tableName]Filter
- _every_: [tableName]Filter
- _none_: [tableName]Filter

### Users Table

The _Users_ has two special conditional filters that can get used. They are referential to a user record and the logged in user. For example, was a _Post.createdBy_ the logged in user?

- _is_self_: Boolean
- _not_self_: Boolean
