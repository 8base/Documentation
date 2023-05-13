---
id: 'app-components-other-components-badge'
sidebar_label: 'Badge'
redirect_from: '/frontend/app-components/other-components/badge'
slug: '/projects/frontend/app-components/other-components/badge'
---

# Badge

The _Badge_ component is a visual element that adds a badge to the top right of a child component, such as an icon.

### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>badgeContent</td><td>number</td><td></td><td>The badge counter value.</td></tr>
<tr><td>showZero</td><td>bool</td><td>false</td><td>If true, the badge counter displays a zero value.</td></tr>
<tr><td>invisible</td><td>bool</td><td>flase</td><td>If true, the badge is hidden.</td></tr>
<tr><td>maximum</td><td>number</td><td>99</td><td>The maximum counter value to display.</td></tr>
</tbody>
</table>

### Style Attributes

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>variant</td><td>dot<br/>standard<br/>string</td><td>standard</td><td>Specifies the type of variant to display.</td></tr>
<tr><td>color</td><td>default<br/>primary<br/>secondary<br/>error<br/>info<br/>success<br/>warning<br/>string</td><td>default</td><td>Defines the color of the badge.</td></tr>
<tr><td>overlap</td><td>circular<br/>rectangular</td><td>rectangular</td><td>Defines the wrapped shape the badge should overlap.</td></tr>
<tr><td>anchorOriginHorizontal</td><td>left<br/>right</td><td>right</td><td>The horizontal anchor position of the badge.</td></tr>
<tr><td>anchorOriginVertical</td><td>top<br/>bottom</td><td>top</td><td>The vertical anchor position of the badge.</td></tr>
</tbody>
</table>

## Subcomponents

The _Badge_ component requires an icon child subcomponent.

### Icon

Defines an _Icon_ component used to support the badge component.

For further details, see the *Icon* component.

#### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>color</td><td>inherit<br/>primary<br/>secondary<br/>action<br/>disabled<br/>error<br/>string</td><td>inherit</td><td>Defines the color of the icon.</td></tr>
<tr><td>size</td><td>inherit<br/>small<br/>medium<br/>large</td><td>medium</td><td>Defines the size of the icon.</td></tr>
<tr><td>viewBox</td><td>0 0 25 25<br/></td><td></td><td>Defines the size of the view box that displays the icon.</td></tr>
<tr><td>fill</td><td>hex #ffffff<br/>rgb 5,5,5</td><td></td><td>The fill color of the icon.</td></tr>
<tr><td>stroke</td><td>hex #ffffff<br/>rgb 5,5,5</td><td></td><td>The stroke color of the icon.</td></tr>
</tbody>
</table>

For more detail on the _Badge_ component, see the [MUI developer docs](https://mui.com/material-ui/api/badge/).
