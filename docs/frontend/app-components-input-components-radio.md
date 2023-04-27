---
id: 'app-components-input-components-radio'
sidebar_label: 'Radio'
redirect_from: '/frontend/app-components/input-components/radio'
slug: '/projects/frontend/app-components/input-components/radio'
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

For more detail on the _Radio_ component, see the [MUI developer docs](https://mui.com/material-ui/api/radio/).
