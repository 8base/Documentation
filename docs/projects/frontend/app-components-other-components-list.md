---
id: 'app-components-other-components-list'
sidebar_label: 'List'
redirect_from: '/frontend/app-components/other-components/list'
slug: '/projects/frontend/app-components/other-components/list'
---

# List

The _List_ component is a continuous vertical index of text or images. The _List_ component uses _List Item_ or _Nav-List Item_ components to create a list.

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

The _List_ component has two possible subcomponents, the _List Item_ and the _Nav-List Item_.

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

The **Add Left Component** allows the placement of an _icon_, _badge_, _chip_ or _container_ to the left-hand side of a list item or nav-list item.

For more detail on the _List_ component, see the [MUI developer docs](https://mui.com/material-ui/api/list/).
