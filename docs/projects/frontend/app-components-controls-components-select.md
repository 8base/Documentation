---
id: 'app-components-controls-components-select'
sidebar_label: 'Select'
redirect_from: '/frontend/app-components/input-components/select'
slug: '/projects/frontend/app-components/controls-components/select'
---

# Select

The _Select_ component provides the user with a list of options to select from. Only **one** option is chosen.

The _Select_ component is used independently or as a form component within a Form Block. 

### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>name</td><td>string</td><td></td><td>Specifies the name of the component (form component only).</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies a value for the component.</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the select component is disabled.</td></tr>
<tr><td>menuItem</td><td>component</td><td></td><td>Defines a menu item in the select list.</td></tr>
</tbody>
</table>

### Style Attributes

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>variant</td><td>filled<br/>outlined<br/>standard<br/>string</td><td>outlined</td><td>Defines the display type of the component.</td></tr>
<tr><td>size</td><td>small<br/>medium<br/>string</td><td>medium</td><td>Defines the size of the component.</td></tr>
<tr><td>autoWidth</td><td>bool</td><td>false</td><td>If enabled, the width of the popover will automatically be set based on the size of the items in the menu.</td></tr>
</tbody>
</table>

## Subcomponents

The _Select_ component uses a _Menu Item_ subcomponent to create the options list.

### Menu Item

The *Menu Item* component creates a menu item either manually or dynamically.

#### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>value</td><td>any</td><td></td><td>Specifies the value of the component.</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>loopData</td><td>array</td><td></td><td>Defines an array of options in the format id, label, value. The id must be is small letters.</td></tr>
<tr><td>itemName</td><td>string</td><td></td><td>Defines a unique identifier name for each menu item.</td></tr>
</tbody>
</table>

For more detail on the _Select_ component, see the [MUI developer docs](https://mui.com/material-ui/api/select/).
