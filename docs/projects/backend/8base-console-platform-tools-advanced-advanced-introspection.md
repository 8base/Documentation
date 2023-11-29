---
id: '8base-console-platform-tools-advanced-advanced-introspection'
sidebar_label: 'Advanced Introspection'
redirect_from: '/projects/backend/console/advanced-introspection'
slug: '/backend/console/advanced-introspection'
---

# Advanced Introspection

Introspection allows you to query the database system to understand the operations you can perform on your schema.

To learn more about Introspection, visit the [GraphQL](https://graphql.org/learn/introspection/) website.

## Retrieving Your Schema

Retrieving your schema is a two-step process.

**Step 1.** Paste the following query into the left pane of the API Explorer to retrieve introspection information about your schema.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
query Introspection {
  system {
    introspection {
      url
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
    "system": {
      "introspection": {
        "url": "https://8base-user-uploads-3bjwok12adad.s3.amazonaws.com/
        introspection/816nag82jdg2"
      }
    }
  }
}
```

</div>
</div>

The response returns a very long URL.

:::note
The URL provided in this example is truncated and is for demonstration purposes only.
:::


**Step 2.** Copy the URL returned in the response and paste it into a browser window; this will download a JSON file.

If you open the JSON file, you will see a description of all the possible types and operations available for the schema.

## Querying Your Schema Interactively

You can query your schema interactively to learn more about the data types and operations available.

### Query Data Types

Running the following query returns the kind and name of the different data types.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
query qSchema {
 __schema {
        types {
              kind
              name
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
    "__schema": {
      "types": [
        {
          "kind": "OBJECT",
          "name": "ImportedTable"
        },
        {
          "kind": "OBJECT",
          "name": "MissingRelation"
        },
        {
          "kind": "INTERFACE",
          "name": "FunctionInfo"
        },
        {
          "kind": "ENUM",
          "name": "FunctionType"
        },
        {
          "kind": "OBJECT",
          "name": "Application"
        },
        {
          "kind": "ENUM",
          "name": "ApplicationStatusEnum"
        },
        {
          "kind": "OBJECT",
          "name": "FunctionWebhookInfo"
        }
      ]
    }
  }
}
```

</div>
</div>

You can query for multiple type properties such as name, kind, and description.

Running the following query returns the kind, name, and description of the different data types.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
query qSchema {
  __schema {
    types {
      kind
      name
      description
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
    "__schema": {
      "types": [
       {
          "kind": "SCALAR",
          "name": "Boolean",
          "description": "The `Boolean` scalar type represents `true` or `false`."
        },
        {
          "kind": "OBJECT",
          "name": "WorkspaceInfo",
          "description": "LoginResponseWorkspace name and id"
        },
       {
          "kind": "SCALAR",
          "name": "String",
          "description": "The `String` scalar type represents textual data,
          represented as UTF-8 character sequences. The String type is most often
          used by GraphQL to represent free-form human-readable text."
        },
        {
          "kind": "OBJECT",
          "name": "SuccessResponse",
          "description": null
        },
        {
          "kind": "OBJECT",
          "name": "AsyncSession",
          "description": "Async Session"
        },
        {
          "kind": "SCALAR",
          "name": "DateTime",
          "description": "A date-time string at UTC, such as `2007-12-25T16:15:30Z`,
          compliant with the `date-time` format outlined in section 5.6 of the
          RFC 3339 profile of the ISO 8601 standard for representation of dates
          and times using the Gregorian calendar."
        }
      ]
    }
  }
}
```

</div>
</div>

You can also query for the available fields in your schema.

Running the following query returns a list of fields, which includes the field name and type properties.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
query qSchema {
  __schema {
     types {
       kind
       name
      fields {
         name
         type {
           name
           description
         }
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
   "__schema": {
     "types": [
       {
        "kind": "OBJECT",
        "name": "__EnumValue",
        "fields": [
          {
            "name": "name",
            "type": {
              "name": null,
              "description": null
            }
          },
          {
            "name": "description",
            "type": {
              "name": "String",
              "description": "The `String` scalar type represents textual data,
              represented as UTF-8 character sequences. The String type is most
              often used by GraphQL to represent free-form human-readable text."
             }
           },
           {
            "name": "isDeprecated",
            "type": {
              "name": null,
              "description": null
            }
          },
          {
           "name": "deprecationReason",
           "type": {
             "name": "String",
             "description": "The `String` scalar type represents textual data,
             represented as UTF-8 character sequences. The String type is most
             often used by GraphQL to represent free-form human-readable text."
            }
           }
         ]
       }
     ]
    }
  }
}
```

</div>
</div>

## Managing Introspection Settings

You have the option of not exposing your introspection information. If you decide to do so, you can turn it off and on as needed.

### Checking the Environment Settings

Running the following query will check the environment settings for your introspection.

The response returns a null value if your environment settings are not set up.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
query ReadSettings {
   system {
      environmentSettings {
         introspection
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
    "system": {
      "environmentSettings": {
        "introspection": null
      }
    }
  }
}
```

</div>
</div>

### Turning Introspection Off and On

Introspection can be turned off and on by running a mutation against the system.

The mutation name can be anything, but it should be something that describes what the mutation does.

#### Turning Introspection Off

Running the following mutation will turn off introspection.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
mutation mName {
   system {
     environmentSetup(
       data: {
         introspection: false
       }
      ) {
         success
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
    "system": {
      "environmentSetup": {
        "success": true
      }
    }
  }
}
```

</div>
</div>

Attempting to query the schema after introspection has been turned off will display an error.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
query qSchema {
  __schema {
     types {
       kind
       name
     }
  }
}
```

</div>
<div>
<label>Response</label>

```json
{
  'errors': {
    'message': { 'Introspection was turned off' ,
      'locations': [
         {
          'line': 2,
          'column' : 3
         }
      ]
    }
  }
}
```

</div>
</div>

#### Turning Introspection On

Running the following mutation will turn introspection on.

<div class="code-sample">
<div>
<label>Request</label>

```javascript
mutation mutationName {
   system {
     environmentSetup(
       data: {
         introspection: true
       }
      ) {
         success
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
    "system": {
      "environmentSetup": {
        "success": true
      }
    }
  }
}
```

</div>
</div>
