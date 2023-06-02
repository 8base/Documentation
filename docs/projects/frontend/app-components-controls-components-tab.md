---
id: 'app-components-controls-components-tab'
sidebar_label: 'Tab'
redirect_from: ''
slug: '/projects/frontend/app-components/controls-components/tab'
---

### Tab

A _Tab_ is a component that acts as a single control that allows users to switch between multiple views.

*Tabs* organize and allow navigation between related content groups at the same level of hierarchy.

#### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>header</td><td>string</td><td></td><td>Specifies a header for the component.</td></tr>
<tr><td>tabIndex</td><td>integer</td><td></td><td>Specifies a unique index to render the tab panel.</td></tr>
<tr><td>wrapped</td><td>bool</td><td>false</td><td>If true, the tab label is wrapped across multiple lines.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the tab is disabled.</td></tr>
</tbody>
</table>

### Style Attributes

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>icon</td><td>phone<br/>favorite<br/>person<br/>none</td><td>none</td><td>Specifies an icon to use on the tab.</td></tr>
<tr><td>iconPosition</td><td>top<br/>start<br/>end<br/>bottom</td><td>start</td><td>Specifies the position of the icon on the tab.</td></tr>
<tr><td>disableFocusRipple</td><td>bool</td><td>false</td><td>If true, the keyboard focus ripple is disabled.</td></tr>
<tr><td>disableRipple</td><td>bool</td><td>false</td><td>By default, the tab component has a ripple effect triggered when the tab state is modified. To disable this effect, set "Disable Ripple" on.</td></tr>
</tbody>
</table>

## Subcomponents

The _Tab_ component has two subcomponents, a _Tab Panel_ component, which is just a *Container* component, and a *Tab Label* component.

### Tab Panel

The *Tab Panel* component centers content horizontally and provides an area to lay out other components to create a unified design.

For more detail on the _Tab Panel_ component, see the [MUI developer docs](https://mui.com/material-ui/api/tab-panel/).

### Tab Label

A _Tab Label_ component is a text label for the *Tab*, it has similar style attributes to the *Typography* component.

For further details, see the *Typography* component.

#### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>Defines the text to display.</td></tr>
<tr><td>paragraph</td><td>bool</td><td>false</td><td>If true, the element will be a paragraph element.</td></tr>
</tbody>
</table>

For more detail on the _Tab_ component, see the [MUI developer docs](https://mui.com/material-ui/api/tabs/).
