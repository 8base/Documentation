---
id: 'app-components-input-components-multiselect'
sidebar_label: 'Multiselect'
slug: '/frontend/app-components/input-components/multiselect'
---

# Multiselect
The *Multiselect* component provides the user with a list of options to select from. **Multiple** options can be chosen.

The *Multiselect* component is used independently or as a form component. To use it as a form component, place it within a *Form Block*.

### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>name</td><td>string</td><td></td><td>Specifies the name of the component (form component only)</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the multiselect is disabled.</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies a value for the component.</td></tr>
<tr><td>menuItem</td><td>node</td><td></td><td>Defines a menu item in the select list.</td></tr>
<tr><td>addRenderValue</td><td>text<br/>looper<br/>container<br/>component</td><td></td><td>Specifies how the component should render the values in the select list.</td></tr>
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
<tr><td>autoWidth</td><td>bool</td><td>false</td><td>If true, the width of the popover will automatically be set based on the size of the items in the menu.</td></tr>
</tbody>
</table>

## Subcomponents
The *Multiselect* component uses a *Menu Item* subcomponent to create an options list and one of three possible components *Text*, *Looper*,  or *Container* to render the multiselect.

### Menu Item
The *Menu Item* component is a list component with a special target. It is static or dynamically generated text.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>value</td><td>any</td><td></td><td>Specifies the value of the component.</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>loopData</td><td>array</td><td></td><td>Defines an array of options in the format value, label.</td></tr>
<tr><td>itemName</td><td>string</td><td></td><td>Defines a unique identifier that allows access the array element's properties.</td></tr>
</tbody>
</table>

### Text
The *Text* component creates a text value for another component.

For further details, see the *Text* component.

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
The *Looper* component creates a static or dynamic data array for another component.

For further details, see the *Looper* component.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>loopData</td><td>array</td><td></td><td>Defines an array of data in the format id, prop1, prop2, prop3. The id <b>must</b> be is small letters.</td></tr>
<tr><td>itemName</td><td>string</td><td></td><td>Defines a unique identifier that allows access the array element's properties.</td></tr>
</tbody>
</table>

### Container
Defines the margin and padding around a multiselect item.

For further details, see the *Container* component.



