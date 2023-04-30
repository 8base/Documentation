---
id: 'connecting-to-data-sources-how-to-make-api-calls-how-to-execute-a-graphql-query-mutation'
sidebar_label: 'How to execute a GraphQL Query / Mutation'
redirect_from: '/frontend/connecting-to-data-sources/how-to-make-api-calls-requests/how-to-execute-a-graphql-querymutation'
slug: '/projects/frontend/connecting-to-data-sources/how-to-make-api-calls-requests/how-to-execute-a-graphql-querymutation'
---

# How to execute a GraphQL Query/Mutation

This article describes how developers can execute a GraphQL Query/Mutation request to an API.

---

There are several strategies for running GraphQL Queries and Mutations in App Builder; both in development and the built app. They include:

• Using the "Run" button in the Request Pane

• Setting a Request to run on an Event (i.e. Button Click)

• Calling the Request in code

## Using the "Run" button in the Request Pane

When viewing a GraphQL Query or Mutation Request request in App Builder, you'll notice a "Run" or "Save & Run" button at the top of the Request pane.

![Running GraphQL Request](./_images/ab-connecting-to-data-sources-how-to-make-api-calls-how-to-execute-a-graphql-query-mutation-1.png)

Pressing this button will run the request and populate the response pane with the result so you can preview it. Know too that running the request will save the response data in the state. This means you can bind this data to UI elements in the app during development.

## Setting a Request to run on an Event

App Builder allows you to set a request to run automatically on certain events in your app. For example, you could set a Request to run when a user clicks a Button. We refer to these as actions.

![Running GraphQL Request on an Action](./_images/ab-connecting-to-data-sources-how-to-make-api-calls-how-to-execute-a-graphql-query-mutation-2.png)

To do this, select a component on the canvas on which the event listener will be set. Then, in the **Events** pane, click the **+** button to add an appropriate event listener, then select **Run Request** from the Actions menu. Finally, select the Request you want to run.

Now when the user interacts with the element on the screen, your GraphQL Query or Mutation will automatically execute and populate the state in App Builder so you can reference what data is returned.

## Executing a Request with code

Requests can be executed from any location where code can be used.

```javascript
//Assuming the request is called myQuery
Promise p = myQuery.run();
```

Request will return a Promise, so if the code block wants to wait for the results to be recieved the code should look like this

```javascript
let results = await myQuery.run();
```

If the request needs variables, those can be passed using a object

```javascript
let results = await myQuer.run({
  variables: {
    variableName: variableValue,
    otherVariableName: otherValue,
  },
});
```

Please note these variables values will take precedence over the definitions within the Request configurations.

## Executing a Request with Variables

When a Query or Mutation requires variables to be used, those variables can be set in the Request's settings.

!["Running GraphQL Request with Variables](./_images/ab-connecting-to-data-sources-how-to-make-api-calls-how-to-execute-a-graphql-query-mutation-3.png)

Variables can be set dynamically by adding expressions to the value input. For example, a request may pull its' variables values from different inputs in a form by referencing their state accessors or another object stored in the state.
