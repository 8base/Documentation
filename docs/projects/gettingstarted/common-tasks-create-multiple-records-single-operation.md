---
id: 'common-tasks-create-multiple-records-single-operation'
sidebar_label: 'Creating and Updating Multiple Records in a Single Operation'
redirect_from: '/projects/gettingstarted/commontasks/create-multiple-records-single-operation'
slug: '/gettingstarted/commontasks/create-multiple-records-single-operation'
---


# Creating and Updating Multiple Records in a Single Operation

This guide delves into the concept of mutations in 8base, focusing on their purpose, categories, and usage. 

## Overview

Mutations are critical operations that enable the creation, update, and deletion of data records. 

8base's GraphQL engine auto-generates mutations as an integral part of the GraphQL schema, based on your workspace tables. Consequently, all workspace tables can process mutations through the workspace endpoint.

There are three broad categories of mutations:

-   Single record mutations
-   Related record mutations
-   Update by filter mutations

## Single Record Mutations

Single record mutations enable operations on individual records. This includes creating a new record, updating an existing one, or deleting it. The operations are typically in this format: `tableNameCreate`,  `tableNameUpdate`, and  `tableNameDelete`.

For instance,

```graphql
mutation {
  userCreate(
    data: {
      email: "test@example.com"
      firstName: "test"
      lastName: "example"
    }
  ) {
    id
    email
    firstName
    lastName
  }
}
```

This example illustrates the creation of a new user in the **User** table.

### Creating a single record

You can create a new record using the data argument that defines the records data:
```graphql 
mutation {
  authorCreate(
    data: { name: "Wyatt" }
  ) {
    id
    name
  }
}

# Response:
{
  "data": {
    "authorCreate": {
      "id": "ck0d12w8e01c001l1dtxz5b7f",
      "name": "Wyatt"
    }
  }
}
```

### Updating a Single Record

You can also update a record using the data argument while including the records  `id`  or using a  `filter`  that includes a unique field.

```graphql
mutation {
  # Updates record name with find by unqiue name)
  quade: authorUpdate(
    filter: { name: "Quade" }
    data: {
      name: "PenPossum"
    }
  ) {
    id
    name
  }
  # Updates record with (find by id)
  wyatt: authorUpdate(
    data: {
      id: "ck0d12w8e01c001l1dtxz5b7f"
      name: "Hyatt"
    }
  ) {
    id
    name
  }
}

# Response:
{
  "data": {
    "quade": {
      "id": "ck0d12nf001bu01l15skw13pg",
      "name": "PenPossum"
    },
    "wyatt": {
      "id": "ck0d12w8e01c001l1dtxz5b7f",
      "name": "Hyatt"
    }
  }
}
```

### Deleting a Single Record

You can delete a record using the data argument while including the records  `id`  or using a  `filter`  that includes a unique field.

```graphql
mutation {
  # Deletes record by unqiue field.
  quade: authorDelete(filter: {
    name: "PenPossum"
  }) {
    success
  }

  # Deletes record by id.
  wyatt: authorDelete(data: {
    id: "ck0d12w8e01c001l1dtxz5b7f"
  }) {
    success
  }
}

# Response: 
{
  "data": {
    "quade": {
      "success": true
    },
    "wyatt": {
      "success": true
    }
  }
}
```

When handling delete mutations, an additional force parameter can be specified in the data object that accepts a boolean value. The default value is  `false`. When set to  `true`,  it will force a cascading delete on the record. This means that if the record being deleted is a parent in a mandatory relationship with child records, all child records will be deleted as well.

## Related Record Mutations

Related record mutations enable creating multiple related records in one operation. This is particularly useful when dealing with relationships.

For example:

```graphql
mutation {
  userCreate(
    data: {
      email: "test@example.com"
      firstName: "test"
      lastName: "example"
      posts: {
        create: [
          {
            title: "first post"
            content: "content of the first post"
          }
          {
            title: "second post"
            content: "content of the second post"
          }
        ]
      }
    }
  ) {
    id
    email
    firstName
    lastName
    posts {
      items {
        id
        title
        content
      }
    }
  }
}
```

In this example, a new user is created along with two associated posts.

You can create, connect, reconnect, and disconnect related table records using 8base's auto-generated GraphQL mutation operations.

- **Create**: Create and relate child objects.
- **Connect**: Connect existing objects in addition to already connected objects.
- **Reconnect**: Replace old connected objects with a new set of connected objects (update mutation only).
- **Disconnect**: Disconnect connected objects (update mutation only).

### Creating Related Records in Nested Mutation

When creating or updating a parent record, one or more child records can be created using  `create`.

```graphql
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

# Response:
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

### Connecting Records in Mutation

One or more records can be connected using a mutation that associates them, whether the relationship is  _many-to-many_,  _one-to-many_, or  _one-to-one_.

```graphql
# The author gets changed to the author named "Stevens" using connect.
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

# Response:
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

### Re-connecting Records in a Mutation

All related records can be  _dissasociated_  from a record, while  _connecting_  one or more in a specified set.

```graphql
# All posts belonging to the author Huxley are changed to the new set.
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

# Response:
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

### Disconnecting Records in a Mutation

One or more records can be disconnected using a mutation, whether the relationship is  _many-to-many_,  _one-to-many_, or  _one-to-one_. If the relationship is  _mandatory_, an error will be raised.

```graphql
# All posts belonging to the author Huxley are changed to the new set.
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

## Updating Using Filter Mutations

You can update multiple records concurrently using a filter. The operations are typically in the format  `tableNameUpdateByFilter`  and  `tableNameDeleteByFilter`.

For instance,

```graphql
mutation {
  userUpdateByFilter(
    filter: {
      email: {
        equals: "test@example.com"
      }
    }

    data: {
      lastName: {
        set: "New lastName"
      }
    }
  ) {
    items {
      lastName
    }
  }
}
```

This example demonstrates how to update the  `lastName`  of all users that have their  `email`  equal to  `test@example.com`.

You can update multiple table records using 8base's auto-generated GraphQL mutation operations.

### Updating the Titles of All Posts Published Before a Specific Day 

Prefix the title of every post published before a specific date with the string "LEGACY: ".

```graphql
mutation {
  postUpdateByFilter(
  data: {
    title: {
      prefix: "LEGACY: "
    }
  },
  filter: {
    publishingDate: {
      lt: "2020-06-05"
    }
  }) {
    count
    items {
      title
    }
  }
}

# Response:
{
  "data": {
    "postUpdateByFilter": {
      "count": 3,
      "items": [
        {
          "title": "LEGACY: My Post"
        },
        {
          "title": "LEGACY: My Other Post"
        },
        {
          "title": "LEGACY: My Other Awesome Post"
        }
      ]
    }
  }
}
```

### Field Type Predicates

When using the  `tableNameUpdateByFilter`  operation, different field types have different functions that can be used.

:::note
When running the `updateByFilter` operation, only one coercive method can be used at a time per field.
:::

#### String

-   **prefix**: String - Prepends a supplied string to the field's existing value.
-   **postfix**: String - Appends a supplied string to the field's existing value.
-   **set**: String - Sets a supplied string as the field's new value.

For example:

```graphql
mutation {
  postUpdateByFilter(data: { aTextTypeField: { postfix: " - ADD ME AFTER" } }) {
    items {
      aTextTypeField
    }
  }
}
```

#### Number

-   **add**: Int - Adds a supplied Int to the field's existing value.
-   **sub**: Int - Subtracts a supplied Int from the field's existing value.
-   **mult**: Int - Multiply a supplied Int by the field's existing value.
-   **dev**: Int - Divide the field's existing value by a supplied Int.
-   **mod**: Int - Modulo the field's existing value by a supplied Int.
-   **set**: Int - Sets a supplied Int as the field's new value.
-   **pow**: Int - Raise the field's existing value to the exponent of a supplied Int.
-   **sqrt**: Boolean - Set the field's existing value to its square root (use  `true`  or  `false`).

For example:

```graphql
mutation {
  postUpdateByFilter(data: { aNumberTypeField: { pow: 10 } }) {
    items {
      aNumberTypeField
    }
  }
}
```

#### Date

-   **set**: String - Sets a supplied Date as the field's new value.

-   **add**: `UpdateByFilterDatePartsInput` - Adds a given number of days, months, years, hours, minutes, seconds, and microseconds to the field's existing value.

-   **sub**: `UpdateByFilterDatePartsInput` - Subtracts a given number of days, months, years, hours, minutes, seconds, and microseconds from the field's existing value.

For example:

```graphql
mutation {
  postUpdateByFilter(
    data: {
      aDateTypeField: {
        add: {
          years: 1
          months: 3
          days: 20
          hours: 13
          seconds: 22
          microseconds: 980
        }
      }
    }
  ) {
    items {
      aDateTypeField
    }
  }
}
```

#### Switch

-   **set**: Boolean|String - Set the field's existing value to a supplied Boolean or String value.
-   **invert**: Boolean - Switches the field's existing value to its Boolean opposite (`true -> false`,  `false -> true`).

For example:

```graphql
mutation {
  postUpdateByFilter(data: { aSwitchTypeField: { set: "CUSTOM_OPTION" } }) {
    items {
      aSwitchTypeField
    }
  }
}
```

#### JSON

-   **set**: JSON - Set the field's existing value to a supplied JSON object.

For example:

```graphql
mutation {
  postUpdateByFilter(
    data: { aJsonTypeField: { set: { hey: "HO!", lets: "GO!" } } }
  ) {
    items {
      aJsonTypeField
    }
  }
}
```
