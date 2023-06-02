---
id: 'app-components-controls-components-multiselect'
sidebar_label: 'Multiselect'
redirect_from: '/frontend/app-components/input-components/multiselect'
slug: '/projects/frontend/app-components/controls-components/multiselect'
---

# Multiselect

The _Multiselect_ component provides the user with a list of options to select from. **Multiple** options can be chosen. It is used independently or as a form component within a Form Block.

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

The _Multiselect_ component uses a _Menu Item_ subcomponent to create an options list and one of three possible components _Text_, _Looper_, or _Container_ to render the multiselect.

### Menu Item

The _Menu Item_ component is a list component with a special target. It is static or dynamically generated text.

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

The _Text_ component creates a text value for another component.

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

The _Looper_ component creates a static or dynamic data array for another component.

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

For further details, see the [Container](/projects/frontend/app-components/layout-components/container) component.
