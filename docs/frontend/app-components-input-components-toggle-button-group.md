---
id: 'app-components-input-components-toggle-button-group'
sidebar_label: 'Toggle Button Group'
slug: '/frontend/app-components/input-components/toggle-button-group'
---

# Toggle Button Group
The *Toggle Button Group* component allows the user to select one option from a set.

The *Toggle Button Group* component is used independently or as a form component. To use it as a form component, place it within a *Form Block*.

### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies a value for the component.</td></tr>
<tr><td>classes</td><td>object</td><td></td><td>Overrides or extends the classes applied to the component.</td></tr>
<tr><td>exclusive</td><td>bool</td><td>false</td><td>If true, only allow one of the toggle buttons to be selected.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the toggle button group is disabled.</td></tr>
<tr><td>toggleButtonItems</td><td>component</td><td></td><td>Specifies a list of toggle buttons within the toggle button group. </td></tr>
</tbody>
</table>

### Style Attributes
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>orientation</td><td>horizontal<br/>vertical<br/>string</td><td>horizontal</td><td>Specifies the orientation of the toggle button group.</td></tr>
<tr><td>size</td><td>small<br/>medium<br/>large<br/>string</td><td>medium</td><td>Defines the size of the component.</td></tr>
<tr><td>color</td><td>standard<br/>primary<br/>secondary<br/>error<br/>info<br/>success<br/>warning<br/>string</td><td>standard</td><td>Defines the color of the component.</td></tr>
<tr><td>fullWidth</td><td>bool</td><td>false</td><td>If true, the toggle button group takes up the full width of its container.</td></tr>
<tr><td>sx</td><td>array</td><td></td><td>Specifies custom CSS styles for the toggle button group.</td></tr>
</tbody>
</table>

## Subcomponents
The *Toggle Button Group* component has one subcomponent, a *Toggle Button* component, used to create a list of Toggle Button Items.

### Toggle Button
 A *Toggle Button* is a component that acts as a single input control and is part of a set within a Toggle Button Group. It is possible to select multiple toggle buttons unless the **exclusive property** is enabled for the *Toggle Button Group*. 
 
 The toggle button has two states, On and Off.
 
 For further details, see the *Toggle Button* component.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>The text label of the component (read only in the toggle button group props) .</td></tr>
</tbody>
</table>

For more detail on the *Toggle Button Group* component, see the [MUI developer docs](https://mui.com/material-ui/api/toggle-button-group/).