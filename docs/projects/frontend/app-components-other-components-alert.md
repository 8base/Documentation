---
id: 'app-components-other-components-alert'
sidebar_label: 'Alert'
redirect_from: '/frontend/app-components/other-components/alert'
slug: '/projects/frontend/app-components/other-components/alert'
---

# Alert

The _Alert_ component displays a brief, important message to attract the user's attention without interrupting their work.

### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>The message text to display in the alert.</td></tr>
<tr><td>icon</td><td>bool</td><td>false</td><td>If true, overrides the default icon displayed on the alert.</td></tr>
<tr><td>actionButton</td><td>bool</td><td>false</td><td>If true, will display an action button after the alert message.</td></tr>
<tr><td>closeText</td><td>string</td><td></td><td>Override for the close label on the popup icon button.</td></tr>
</tbody>
</table>

### Style Attributes

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>variant</td><td>filled<br/>outlined<br/>standard<br/>string</td><td>standard</td><td>Defines the display type to use.</td></tr>
<tr><td>severity</td><td>error<br/>info<br/>success<br/>warning<br/>string</td><td>success</td><td>The level of importance of the alert. A default color and icon are set based on the severity.</td></tr>
</tbody>
</table>

## Subcomponents

The _Alert_ component uses a subcomponent to create an alert title. Two optional subcomponents provide an icon and an action button for the alert component.

### Alert Title

The _Alert Title_ component provides a title for the alert.

#### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>title</td><td>string</td><td></td><td>The title of the alert.</td></tr>
</tbody>
</table>

### Icon

Allows the user to add an icon to the alert component.

For further details, see the *Icon* component.

#### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>color</td><td>inherit<br/>primary<br/>secondary<br/>action<br/>disabled<br/>error<br/>string</td><td>inherit</td><td>Defines the color of the icon.</td></tr>
<tr><td>size</td><td>inherit<br/>small<br/>medium<br/>large<br/>string</td><td>small</td><td>Defines the size of the icon.</td></tr>
<tr><td>viewBox</td><td>0 0 24 24</td><td></td><td>Defines the size of the view box that displays the icon.</td></tr>
<tr><td>fill</td><td>hex #ffffff<br/>rgb 5,5,5</td><td></td><td>The fill color of the icon.</td></tr>
<tr><td>stroke</td><td>hex #ffffff<br/>rgb 5,5,5</td><td></td><td>The stroke color of the icon.</td></tr>
</tbody>
</table>

### Button

Allows the user to add an action button to the alert.

For further details, see the *Button* component.

#### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>The text label for the button face.</td></tr>
</tbody>
</table>

For more detail on the _Alert_ component, see the [MUI developer docs](https://mui.com/material-ui/api/alert/).
