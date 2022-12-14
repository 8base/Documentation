---
id: 'app-components-input-components-multiselect'
sidebar_label: 'Multiselect'
slug: '/frontend/app-components/input-components/multiselect'
---

# Multiselect
The *Multiselect* component provides the user with a list of options to select from. **Multiple** options can be chosen.

The *Multiselect* component is used independently or as a form component. To use it as a form component, place it within a *Form Block*.

### Unique Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>name</td><td>string</td><td></td><td>Specifies the name of the component (form component only)</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>Specifies whether the component is disabled.</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies a value for the component.</td></tr>
<tr><td>menuItem</td><td>component</td><td></td><td>Specifies a menu item in the select list.</td></tr>
<tr><td>addRenderValue</td><td>text<br/>looper<br/>container<br/>component</td><td></td><td>Specifies how the component should render.</td></tr>
</tbody>
</table>

### Unique Style Attributes
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>variant</td><td>filled<br/>outlined<br/>standard<br/>string</td><td>outlined</td><td>Specifies the display type of the component.</td></tr>
<tr><td>size</td><td>small<br/>medium<br/>string</td><td>medium</td><td>Specifies the size of the component.</td></tr>
<tr><td>autoWidth</td><td>bool</td><td>false</td><td>If enabled, the width of the popover will automatically be set based on the size of the items in the menu.</td></tr>
</tbody>
</table>

## Subcomponents
The *Multiselect* component uses a *Menu Item* subcomponent to create the options list and one of three possible components (*Text*, *Looper*, *Container*) to render the multiselect.

### Menu Item
Specifies a list of menu items set manually or dynamically.

For further details, see the Menu Item component.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>value</td><td>any</td><td></td><td>Specifies the value of the component.</td></tr>
<tr><td>label</td><td>node</td><td></td><td>specifies a label for the component.</td></tr>
<tr><td>loopData</td><td>array</td><td></td><td>Specifies an array of options in the format id,label,value.</td></tr>
<tr><td>itemName</td><td>string</td><td></td><td>Specifies a unique identifier name for each menu item.</td></tr>
</tbody>
</table>

### Text
Specifies a text value.

For further details, see the Text component.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>Specifies a text value for the multiselect item.</td></tr>
</tbody>
</table> 

### Looper
Specifies an array of text values.

For further details, see the Looper component.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>loopData</td><td>array</td><td></td><td>Specifies an array of text items.</td></tr>
<tr><td>itemName</td><td>string</td><td></td><td>Specifies a unique identifier name for each data item.</td></tr>
</tbody>
</table>

### Container
Specifies margin and padding around a multiselect item.

For further details, see the Container component.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>margin</td><td></td><td></td><td>Specifies margin space around each item in the multiselect.</td></tr>
<tr><td>padding</td><td></td><td></td><td>Specifies padding space around each item in the multiselect.</td></tr>
</tbody>
</table>



