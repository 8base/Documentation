---
id: 'app-components-input-components-select'
sidebar_label: 'Select'
slug: '/frontend/app-components/input-components/select'
---

# Select
The *Select* component provides the user with a list of options to select from. Only **one** option is chosen.

The *Select* component is used independently or as a form component. To use it as a form component, place it within a *Form Block*.

### Unique Properties
<table>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
<tr><td>name</td><td>string</td><td></td><td>Specifies the name of the component (form component only).</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies a value for the component.</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>Specifies whether the component is disabled.</td></tr>
<tr><td>menuItem</td><td>component</td><td></td><td>Specifies a menu item in the select list.</td></tr>
</table>


### Unique Style Attributes
<table>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
<tr><td>variant</td><td>filled<br/>outlined<br/>standard<br/>string</td><td>outlined</td><td>Specifies the display type of the component.</td></tr>
<tr><td>size</td><td>small<br/>medium<br/>string</td><td>medium</td><td>Specifies the size of the component.</td></tr>
<tr><td>autoWidth</td><td>bool</td><td>false</td><td>If enabled, the width of the popover will automatically be set based on the size of the items in the menu.</td></tr>
</table>

## Subcomponents
The *Select* component uses a menu item subcomponent to create the options list.

### Menu Item
Specifies a list of menu items set manually or dynamically.

For further details, see the Menu Item component.

#### Properties
<table>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies the value of the component.</td></tr>
<tr><td>label</td><td>node</td><td></td><td>specifies a label for the component.</td></tr>
<tr><td>loopData</td><td>array</td><td></td><td>Specifies an array of options in the format id,label,value.</td></tr>
<tr><td>itemName</td><td>string</td><td></td><td>Specifies a unique identifier name for each item in the options list.</td></tr>
</table>

For more detail on the *Select* component, see the [MUI developer docs](https://mui.com/material-ui/api/select/).