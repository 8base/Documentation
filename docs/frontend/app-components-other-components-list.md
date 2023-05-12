---
id: 'app-components-other-components-list'
sidebar_label: 'List'
slug: '/frontend/app-components/other-components/list'
---

# List
The *List* component is a continuous vertical index of text or images. The *List* component uses *List Item* or *Nav-List Item* components to create a list.

### Style Attributes
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>dense</td><td>bool</td><td>false</td><td>If true, compact vertical padding is used for the list and list items.</td></tr>
<tr><td>disablePadding</td><td>bool</td><td>false</td><td>If true, the vertical padding is removed from the list.</td></tr>
</tbody>
</table>

## Subcomponents
The *List* component has two possible subcomponents, the *List Item* and the *Nav-List Item*.

### List Item
A text-based item for a list.

For further details, see the *List Item* component.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>The text for the list item.</td></tr>
<tr><td>button</td><td>bool</td><td>false</td><td>If true, the list item is a button and enables the selected and disabled properties.</td></tr>
<tr><td>selected</td><td>bool</td><td>false</td><td>If true, a selected style is applied to the list item.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the list item is disabled.</td></tr>
</tbody>
</table>

### Nav-List Item
A navigational element within a list.

For further details, see the *Nav-List Item* component.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>The text for the nav list item.</td></tr>
<tr><td>path</td><td>string</td><td></td><td>The navigational path for the nav list item.</td></tr>
<tr><td>exact</td><td>bool</td><td>false</td><td>If true, the active style will be applied if the location is matched exactly.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the nav list item is disabled.</td></tr>
</tbody>
</table>

The **Add Left Component** allows the placement of an *icon*, *badge*, *chip* or *container* to the left-hand side of a list item or nav-list item.


For more detail on the *List* component, see the [MUI developer docs](https://mui.com/material-ui/api/list/).
