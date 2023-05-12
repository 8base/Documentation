---
id: 'app-components-input-components-radio-group'
sidebar_label: 'Radio Group'
slug: '/frontend/app-components/input-components/radio-group'
---

# Radio Group
The *Radio Group* component allows the user to select one option from a set.

The *Radio Group* component is used independently or as a form component. To use it as a form component, place it within a *Form Block*.

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
The *Radio Group* component has one subcomponent, a *Radio* component, used to create a list of Radio Items.

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
<tr><td>color</td><td>default<br/>primary<br/>secondary<br/>error<br/>info<br/>success<br/>warning<br/>string</td><td>primary</td><td>Defines the color of the component.</td></tr>
<tr><td>size</td><td>small<br/>medium<br/>string</td><td>medium</td><td>Defines the size of the component.</td></tr>
<tr><td>labelPlacement</td><td>top<br/>bottom<br/>start<br/>end<br/>string</td><td>end</td><td>Specifies the location of the component label.</td></tr>
<tr><td>disableRipple</td><td>bool</td><td>false</td><td>If true, disables the ripple effect on the radio button.</td></tr>
</tbody>
</table>

For more detail on the *Radio Group* component, see the [MUI developer docs](https://mui.com/material-ui/api/radio-group/).