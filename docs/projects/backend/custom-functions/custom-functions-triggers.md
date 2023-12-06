---
id: 'custom-functions-triggers'
sidebar_label: 'Triggers'
redirect_from: '/projects/backend/custom-functions/triggers'
slug: '/backend/custom-functions/triggers'
---
# Triggers

A trigger is a function that runs in response to a data mutation event. A mutation event is when an object is created, updated, or deleted. This means that important actions run as callbacks to your data commits, without cluttering up client apps with web requests. Triggers are often used to validate input parameters or to send notifications.

:::caution
You should not use triggers to create or change entities.
:::

## 8base.yml Declaration

There are two types of qualifiers for triggers based on whether they run before or after the data is modified: `trigger.before` and `trigger.after`. The `operation` parameter defines the data type and event the trigger should listen to. Possible values for the data event are `create`, `update` and `delete`. 

For example, if we want to execute a trigger after a `User` has been created, we will specify `User.create`: 

```yaml
function:
  #
  # Declare custom triggers like so.
  helloTrigger:
    handler:
      code: src/triggerBefore.ts
    type: trigger.before
    operation: User.create
```
### `operation` Options

When defining an operation, use: `<TableName>.(create|update|delete)`

### `trigger.before`

This type of trigger is executed before the data is written to the database. It allows you to validate or modify the data before saving it to the database.

```javascript
module.exports = (event) => {
  const { password, passwordConfirm } = event.data;

  if (password != passwordConfirm) {
    // Throwing an error will cancel the operation and data will not be inserted
    throw new Error("Passwords don't match");
  }

  // You can modify what goes into the database
  return {
    data: {
      ...event.data,
      status: 'confirmed',
    },
  };
};
```

### `trigger.after`

This type of trigger is executed after the data has been successfully saved in the database. It can be used to do post-processing or to enrich the returned data. For example, after creating a new calendar event, you might want to send an email notification alerting users they were invited:

```javascript
const sender = require('email-service');

module.exports = async (event) => {
  const { invitees } = event.data;

  let sent = false;
  try {
    await sender.sendInvites(invitees);
    sent = true;
  } catch (e) {
    console.error('Error sending invites: ', e);
  }

  // You can modify the returned response
  return {
    data: {
      ...event.data,
      sent,
    },
  };
};
```

## Trigger Arguments

A `trigger.after` type function receives the output of a mutation in the `event.data` property. However, sometimes parameters that were originally passed in the mutation are needed. Therefore, the `event` object is enriched to have a `event.originalData` property which maintains the original input object.

`event.originalObject` also contains the version of the object before the mutation was applied to it. This is useful when you need to compare objects before and after the mutation to find out what fields changed.

```json
{
  // Data returned
  "data": {...},
  // Data sent
  "originalData": {...},
  // Original data record
  "originalObject": {...} // or null,
  // Request headers
  "headers": {...}
}
```

To learn more about the arguments that are passed to triggers, see [custom function arguments](/backend/custom-functions/types#custom-function-arguments).

## Trigger Responses

The value returned by a trigger has two available properties: `data` and `errors`.

```javascript
return {
  data: {
    ...event.data,
  },
  errors: [
    {
      message: 'Error message',
      code: 'error_code',
    },
  ],
};
```

