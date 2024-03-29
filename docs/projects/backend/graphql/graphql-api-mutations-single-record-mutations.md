---
id: 'graphql-api-mutations-single-record-mutations'
sidebar_label: 'Single Record Mutations'
slug: '/backend/graphql-api/mutations/single-record-mutations'
---
# Mutating Individual Records

You can create, update, and delete individual table records using 8base's auto-generated GraphQL mutation operations.

In the following examples, we have a table called `Posts`, which contains fields and relations like `title`, `body`, `author`.

:::note 
Some examples will use [aliases](/backend/graphql-api/#aliases) to show side by side the use of `data.id` versus `filter`. All examples work without aliases.
:::

## Creating a Single Record

Create a new record using the data argument that define the records data.

```graphql
mutation {
  authorCreate(data: {
    name: "Wyatt"
  }) {
    id
    name
  }
}
```

```json
{
  "data": {
    "authorCreate": {
      "id": "ck0d12w8e01c001l1dtxz5b7f",
      "name": "Wyatt"
    }
  }
}
```

## Updating a Single Record

Update a record using the data argument while including the records `id` OR using a `filter` that includes a unqiue field.

```graphql
mutation {
  /* Updates record name with find by unqiue name) */
  quade: authorUpdate(filter: {
    name: "Quade"
  },
  data: {
    name: "PenPossum"
  }) {
    id
    name
  }
}
  /* Updates record with (find by id) */
  wyatt: authorUpdate(data: {
    id: "ck0d12w8e01c001l1dtxz5b7f",
    name: "Hyatt"
  }) {
    id
    name
  }
```

```json
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

## Delete a Single Record

Delete a record using the data argument while including the records `id` OR using a `filter` that includes a unqiue field.

```graphql
mutation {
  /* Deletes record by unqiue field. */
  quade: authorDelete(filter: {
    name: "PenPossum"
  }) {
    success
  }

  /* Deletes record by id. */
  wyatt: authorDelete(data: {
    id: "ck0d12w8e01c001l1dtxz5b7f"
  }) {
    success
  }
}
```

```json
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

When handling delete mutations, an additional force parameter can be specified in the data object that accepts a Boolean value - the default value is `false`. When set to `true` it will force a cascading delete on the record. This means that if the record being deleted is a parent in a mandatory relationship with child records, all child records will be deleted as well.
