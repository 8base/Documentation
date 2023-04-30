---
id: 'triggering-events-in-the-app-managing-events-on-components-and-requests'
sidebar_label: 'Managing Events on Components and Requests'
redirect_from: '/frontend/triggering-events-in-the-app/managing-events-on-components-and-requests'
slug: '/projects/frontend/triggering-events-in-the-app/managing-events-on-components-and-requests'
---

# Managing Events on Components and Requests

This article describes how developers can manage Events of Components and Requests.

---

In App Builder, while multiple Events can be added to a Component, currently only one Action can be configured per event type. If you want to create multiple Actions on a single event, you need to do so using Custom code.

For example, let's imagine that you wanted to Fuctions to run when a Button is clicked. You can set the On Click event of the Button to trigger Custom Code that handles the execution of both functions..

```js
// Run first function
myFn1.function();
// Run second function
myFn2.function();
```

If you want to add multiple actions to a Request, the same logic applies. Simply script out the Requests, Functions, or Navigation that you want to occur when the Request Completes or throws an Error.

### Updating Events

If you need to update an Event that is already in place, simply go to the event's configuration panel and make your changes.

For example, if you wanted to change the On Click event of a Button to trigger a different Request, simply select the new Request from the dropdown.

### Removing Events

If you need to remove an Event from a Component or Request, simply click on the Event's Action's gear icon and press the "Delete". This will remove the Event completely.
