---
id: 'app-components-other-components-list-item'
sidebar_label: 'List Item'
redirect_from: '/frontend/app-components/other-components/list-item'
slug: '/projects/frontend/app-components/other-components/list-item'
---

# List Item

The _List Item_ component is a text-based item contained within a list.

### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>Specifies the text for the list item.</td></tr>
<tr><td>button</td><td>bool</td><td>false</td><td>If true, the list item is a button and enables the selected and disabled properties.</td></tr>
<tr><td>selected</td><td>bool</td><td>false</td><td>If true, a selected style is applied to the list item.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the list item is disabled.</td></tr>
<tr><td>tooltipTitle</td><td>string</td><td></td><td>Defines a tooltip for the list item.</td></tr>
<tr><td>tooltipPlacement</td><td>bottom-end<br/>bottom-start<br/>bottom<br/>left-end<br/>left-start<br/>left<br/>right-end<br/>right-start<br/>right<br/>top-end<br/>top-start<br/>top<br/>string</td><td>bottom</td><td>Defines the placement of the tooltip on the list item.</td></tr>
<tr><td>loopData</td><td>array</td><td></td><td>Defines an array of options in the format id, label, value. The id must be is small letters.</td></tr>
<tr><td>itemName</td><td>string</td><td></td><td>Defines a unique identifier name for each menu item.</td></tr>
</tbody>
</table>

The **Add Left Component** allows the placement of an _[icon](./app-components-other-components-icon)_, _[badge](./app-components-other-components-badge)_, _[chip](./app-components-other-components-chip)_ or _[container](./app-components-layout-components-container)_ to the left-hand side of a list item.

### Style Attributes

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>alignItems</td><td>center<br/>flex-start</td><td>center</td><td>Defines the alignment applied to the list item.</td></tr>
<tr><td>dense</td><td>bool</td><td>false</td><td>If true, compact vertical padding is used for the list item.</td></tr>
<tr><td>disableGutters</td><td>bool</td><td>false</td><td>If true, removes the gutter on the left-hand side of the list item.</td></tr>
<tr><td>divider</td><td>bool</td><td>false</td><td>If true, adds a line beneath the list item.</td></tr>
</tbody>
</table>

For more detail on the _List Item_ component, see the [MUI developer docs](https://mui.com/material-ui/api/list-item/).
