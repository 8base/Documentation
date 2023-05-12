---
id: 'app-components-other-components-nav-list-item'
sidebar_label: 'Nav List Item'
redirect_from: '/frontend/app-components/other-components/nav-list-item'
slug: '/projects/frontend/app-components/other-components/nav-list-item'
---

# Nav List Item

The _Nav List_ component is a navigational element contained within a list.

### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>Specifies the text for the nav list item.</td></tr>
<tr><td>path</td><td>string</td><td></td><td>Specifies the navigational path for the nav list item.</td></tr>
<tr><td>exact</td><td>bool</td><td>false</td><td>If true, the active style will be applied if the location is matched exactly.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the nav list item is disabled.</td></tr>
<tr><td>tooltipTitle</td><td>string</td><td></td><td>Defines a tooltip for the nav list item.</td></tr>
<tr><td>tooltipPlacement</td><td>bottom-end<br/>bottom-start<br/>bottom<br/>left-end<br/>left-start<br/>left<br/>right-end<br/>right-start<br/>right<br/>top-end<br/>top-start<br/>top<br/>string</td><td>bottom</td><td>Defines the placement of the tooltip on the nav list item.</td></tr>
<tr><td>loopData</td><td>array</td><td></td><td>Defines an array of options in the format id, label, value. The id must be is small letters.</td></tr>
<tr><td>itemName</td><td>string</td><td></td><td>Defines a unique identifier name for each menu item.</td></tr>
</tbody>
</table>

The **Add Left Component** allows the placement of an _[icon](/projects/frontend/app-components/other-components/icon)_, _[badge](/projects/frontend/app-components/other-components/badge)_, _[chip](/projects/frontend/app-components/other-components/chip)_ or _[container](/projects/frontend/app-components/layout-components/container)_ to the left-hand side of a nav list item.

### Style Attributes

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>alignItems</td><td>center<br/>flex-start</td><td>center</td><td>The alignment applied to the nav list item.</td></tr>
<tr><td>dense</td><td>bool</td><td>false</td><td>If true, compact vertical padding is used for the nav list item.</td></tr>
<tr><td>disableGutters</td><td>bool</td><td>false</td><td>If true, removes the gutter on the left-hand side of the nav list item.</td></tr>
<tr><td>divider</td><td>bool</td><td>false</td><td>If true, adds a line beneath the nav list item.</td></tr>
<tr><td>backgroundColor</td><td>hex#666666<br/>rgb 5,5,5</td><td></td><td>Defines the background color.</td></tr>
<tr><td>textColor</td><td>hex#666666<br/>rgb 5,5,5</td><td></td><td>Defines the text color.</td></tr>
<tr><td>iconColor</td><td>hex#666666<br/>rgb 5,5,5</td><td></td><td>Defines the icon color if the nav list item has an attached icon.</td></tr>
<tr><td>selectedBackgroundColor</td><td>hex#666666<br/>rgb 5,5,5</td><td></td><td>Defines the background color if the nav list item is selected.</td></tr>
<tr><td>selectedTextColor</td><td>hex#666666<br/>rgb 5,5,5</td><td></td><td>Defines the text color if the nav list item is selected.</td></tr>
<tr><td>selectedIconColor</td><td>hex#666666<br/>rgb 5,5,5</td><td></td><td>Defines the icon color if the nav list item has an attached icon and is selected.</td></tr>
<tr><td>disableFocusRipple</td><td>bool</td><td>false</td><td>If true, the keyboard focus ripple is disabled.</td></tr>
<tr><td>disableRipple</td><td>bool</td><td>false</td><td>If true, the ripple effect is disabled.</td></tr>
</tbody>
</table>
