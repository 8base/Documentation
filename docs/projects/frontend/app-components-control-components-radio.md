---
id: 'app-components-control-components-radio'
sidebar_label: 'Radio'
redirect_from: '/frontend/app-components/input-components/radio'
slug: '/projects/frontend/app-components/control-components/radio'
---

# Radio

A _Radio_ button is a component that acts as a single input control and is part of a set within a _Radio Group_. It has two states, On and Off.

### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies a value for the component.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the radio button is disabled.</td></tr>
<tr><td>required</td><td>bool</td><td>false</td><td>If true, the radio button must be checked.</td></tr>
<tr><td>readOnly</td><td>bool</td><td>false</td><td>If true, the radio button is read only.</td></tr>
<tr><td>autofocus</td><td>bool</td><td>false</td><td>If true, autofocus is enabled.</td></tr>
<tr><td>loopData</td><td>array</td><td></td><td>Defines an array of data in the format id, prop1, prop2, prop3. The id <b>must</b> be is small letters.</td></tr>
<tr><td>itemName</td><td>string</td><td></td><td>Defines a unique identifier that allows access the array element's properties.</td></tr>
</tbody>
</table>

### Style Attributes

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>color</td><td>default<br/>primary<br/>secondary<br/>error<br/>info<br/>success<br/>warning<br/>string</td><td>primary</td><td>Defines the color of the component.</td></tr>
<tr><td>size</td><td>small<br/>medium<br/>string</td><td>medium</td><td>Defines the size of the component.</td></tr>
<tr><td>labelPlacement</td><td>top<br/>bottom<br/>end<br/>start<br/>string</td><td>end</td><td>Specifies the location of the radio label.</td></tr>
<tr><td>disableRipple</td><td>bool</td><td>false</td><td>By default, the radio component has a ripple effect triggered when the radio state is modified. To disable this effect, set "Disable Ripple" on.</td></tr>
</tbody>
</table>

> [!NOTE] Example: How to create dynamic Radio buttons
>    There are a few ways in which you can create dynamic Radio buttons using the built in Loop property. 
> + A backend database request
> + A local state
> + An array
> 
> For this example we'll assume you already have a Page with a Radio Group component and a backend database request.
> 
> **Backend Database Request**
> 1. Select the first Radio item in your Radio Group, scroll to the bottom of the Properties pane, and expand the Loop section.
> 2. In the *Loop Data* field, enter the name of your database request as `{{Request.data}}` and enter the word `item` in the *Item Name* field. 
> 3. We will assume that your request contains a "lastName" field.
> 4. Scroll to the top of the Properties pane and enter `{{item.lastName}}` in the *Label* and *Value* fields.
> 5. You should immediately see your Radio Group populated by a list of last names from your database request.
> 6. Click "Preview" to see how your Radio Group looks in a browser window.
> 
> **Local State**
> 1. Click on the *State* icon, which opens the State pane. Ensure the Local tab is selected and click the "+" button to create a new state.
> 2. In the pop-up window, enter "myData" for the *Name*, select "Array" in the *Type* drop-down, and click the expand arrow in the *Default Value* input field.
> 3. Enter the following array in the pop-up panel: `[{"id":"1","lastname":"James"},{"id":"2","lastname":"Smith"},{"id":"3","lastname":"Williams"},{"id":"4","lastname":"Edwards"}]` then click "Create".
> 4. Close the State pane, select the first Radio item in your Radio Group, scroll to the bottom of the Properties pane, and expand the Loop section.
> 5. In the *Loop Data* field, enter the name of your database request as `{{myData.value}}` and enter the word `item` in the *Item Name* field. 
> 6. Scroll to the top of the Properties pane and enter `{{item.lastname}}` in the *Label* and *Value* fields.
> 7. You should immediately see your Radio Group populated by a list of last names from your local state.
> 8. Click "Preview" to see how your Radio Group looks in a browser window.
> 
> **Array**
> 1. Select the first Radio item in your Radio Group, scroll to the bottom of the Properties pane, and expand the Loop section.
> 2. In the *Loop Data* field, click the expand arrow and enter the following array in the pop-up panel: `[{"id":"1","lastname":"James"},{"id":"2","lastname":"Smith"},{"id":"3","lastname":"Williams"},{"id":"4","lastname":"Edwards"}]` then click "Done".
> 3. Enter the word `item` in the *Item Name* field. 
> 4. Scroll to the top of the Properties pane and enter `{{item.lastname}}` in the *Label* and *Value* fields.
> 5. You should immediately see your Radio Group populated by a list of last names from your array.
> 6. Click "Preview" to see how your Radio Group looks in a browser window.
 
 

For more detail on the _Radio_ component, see the [MUI developer docs](https://mui.com/material-ui/api/radio/).
