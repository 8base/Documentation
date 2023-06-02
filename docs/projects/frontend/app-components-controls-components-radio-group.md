---
id: 'app-components-controls-components-radio-group'
sidebar_label: 'Radio Group'
redirect_from: '/frontend/app-components/input-components/radio-group'
slug: '/projects/frontend/app-components/controls-components/radio-group'
---

# Radio Group

The *Radio Group* component allows the user to select one option from a set.  It is used independently or as a form component within a Form Block.

### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>name</td><td>string</td><td></td><td>Specifies the name of the component (form component only).</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies the value of the component.</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>radioItems</td><td>component</td><td></td><td>Defines a list of radio items within the radio group.</td></tr>
</tbody>
</table>

### Style Attributes

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>row</td><td>bool</td><td>false</td><td>If true, aligns the radio items in a row along the horizontal axis. By default, the radio items align in a column along the vertical axis.</td></tr>
</tbody>
</table>

## Subcomponents

The _Radio Group_ component has one subcomponent, a _Radio_ component, used to create a list of Radio Items.

### Radio

A *Radio* button is a component that acts as a single input control and is part of a set within a *Radio Group*. It has two states, On and Off.

For further details, see the *Radio* component.

#### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies the value of the component.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the radio button is disabled.</td></tr>
<tr><td>required</td><td>bool</td><td>false</td><td>If true, the radio button must be checked.</td></tr>
<tr><td>readOnly</td><td>bool</td><td>false</td><td>If true, the radio button is read only.</td></tr>
<tr><td>autofocus</td><td>bool</td><td>false</td><td>If true, autofocus is enabled.</td></tr>
<tr><td>loopData</td><td>array</td><td></td><td>Defines an array of data in the format id, prop1, prop2, prop3. The id <b>must</b> be is small letters.</td></tr>
<tr><td>itemName</td><td>string</td><td></td><td>Defines a unique identifier that allows access the array element's properties.</td></tr>
<tr><td>color</td><td>default<br/>primary<br/>secondary<br/>error<br/>info<br/>success<br/>warning<br/>string</td><td>primary</td><td>Defines the color of the component.</td></tr>
<tr><td>size</td><td>small<br/>medium<br/>string</td><td>medium</td><td>Defines the size of the component.</td></tr>
<tr><td>labelPlacement</td><td>top<br/>bottom<br/>start<br/>end<br/>string</td><td>end</td><td>Specifies the location of the component label.</td></tr>
<tr><td>disableRipple</td><td>bool</td><td>false</td><td>If true, disables the ripple effect on the radio button.</td></tr>
</tbody>
</table>
<br/>

For more detail on the _Radio Group_ component, see the [MUI developer docs](https://mui.com/material-ui/api/radio-group/).
