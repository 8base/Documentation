---
id: 'connecting-to-data-sources-send-form-data-with-an-api-request'
sidebar_label: 'Send Form Data with an API Request'
redirect_from: '/frontend/send-form-data-with-an-api-request'
slug: '/projects/frontend/send-form-data-with-an-api-request'
---

# Send form data with an API Request

This article describes the process a developer must go through to send data with an API request collected in a form.

---

In a Frontend application, developers can send form data to an API (GraphQL or REST). To do so, there are several concepts that they need to be familiar with.

1. Form Components
2. Form Submission
3. On Submit Event
4. Custom Code (JavaScript)
5. Setting/Accessing Global State Values
6. Setting Variables in Requests

With those listed, let's walk through each one so you can start sending data from the front end.

## Form Components

To collect values from Forms in your Frontend application, you must use *Form* components. 

![Form block](./_images/ab-connecting-to-data-sources-send-form-data-with-an-api-request-1.png)

*Form* components **have** a Name property and **must** be placed within a _Form Block_.

**Form components:**

For more detailed information on a specific *Form* component, see the **Controls Components** section on the _8base documentation site_.

- Form Block
- Form Autocomplete
- Form Checkbox
- Form Date Picker
- Form Field Array
- Form File Upload
- Form Multiselect
- Form Radio Group
- Form Text Field
- Form Time Picker
- Form Select
- Form Slider
- Form Switch

Another type of component that you can use within your form is a *Controls* component.

*Controls* components **do not have** a Name property and **must** be placed within a _Page_. You can use **only** these specific *Controls* components within a *Form*.

**Controls components:**

- Button
- Radio
- Toggle Button
- Toggle Button Group

:::note
 All other components except for the *Controls* components can be placed within a Form.
:::

## Form Submission

Every *Form Block* contains an **On Submit** event that allows you to submit the data collected by your form. You also need a **Button** of type *Submit*, and you must write custom code to process and handle the form submission.

## On Submit Event

You can access the **On Submit** event on the *Events* tab on the right-hand pane of the project builder. After adding an On Submit event, set the "Choose Action" to **Run Custom Code**.

![Events](./_images/ab-connecting-to-data-sources-send-form-data-with-an-api-request-2.png)

## Custom Code (JavaScript)

To add custom code to process your form data, click the "Add Custom Code" button, which opens the **Code Editor**.

![Javascript code](./_images/ab-connecting-to-data-sources-send-form-data-with-an-api-request-3.png)

Every *Form* has a hidden variable called `data`. You can access your form's data by referencing this variable, and you reference the component's name to access data in a specific component.

Let's say you have a *Form* component called *TextField_1*. To access this component's data, you would reference it as `data.TextField_1`.

To access all of the form's data, especially during testing, you can log it to the console using `console.log("Data " + data)`, which will allow you to confirm all your form's components are working correctly.

## Setting/Accessing Global State Values

![Global State](./_images/ab-connecting-to-data-sources-send-form-data-with-an-api-request-4.png)

To set a global state value, you'll need to use the `setValue` function on a Global State Entry. Makes sure that you add a separate entry in the Global State (DO NOT USE LOCAL STATE) for every form Input. Once you do, you'll be able to reference it by name and use the `setValue` method.

```js
let inputValue = data.TextField_1;
globalStateKeyName.setValue(inputValue);
```

Now that you've been able to store the input value in the Global State, you can reference it in the arguments/variables passed to a Request.

## Setting Variables in Requests

![Setting variables](./_images/ab-connecting-to-data-sources-send-form-data-with-an-api-request-5.png)

To set a Variable in a Request, you'll need to add the entry for it in the Request's "Variables" editor of either a REST or GraphQL request. Add an entry and give it a name. Then, in the value input use handlebars syntax to reference your Global State entry value like so, `{{ globalStateKeyName.value }}`.

## Final Step

You'll probably now want to make sure that the actual Request runs! You can accomplish this by adding an extra line to your Javascript code that references the Request by name and then calls the `run` method. It's important that the `run` method gets called after the value is set since you will want to ensure that the Request accesses the Global State value after it's been updated.

```js
// Access value from form Submit event
let inputValue = data.TextField_1;
// Update value
globalStateKeyName.setValue(inputValue);
// Run request AFTER value set
myRequest.run();
```

That's it! Follow these 6 steps and you'll be able to start sending data with API Requests in App Builder.
