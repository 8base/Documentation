---
id: 'app-components-controls-components-button'
sidebar_label: 'Button'
redirect_from: '/frontend/app-components/input-components/button'
slug: '/projects/frontend/app-components/controls-components/button'
---

# Button

The _Button_ component allows a user to take actions or make choices with a single tap. It is used independently or as a form component within a Form Block.

### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>Specifies the text to display on the component.</td></tr>
<tr><td>type</td><td>button<br/>reset<br/>submit</td><td>submit</td><td>Defines the type of the component.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the button is disabled.</td></tr>
<tr><td>href</td><td>string</td><td></td><td>A URL to link to when the component is clicked.</td></tr>
</tbody>
</table>

### Style Attributes

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>variant</td><td>contained<br/>outlined<br/>text<br/>string</td><td>text</td><td>Defines the display type of the component.</td></tr>
<tr><td>color</td><td>primary<br/>secondary<br/>inherit<br/>info<br/>error<br/>success<br/>warning<br/>string</td><td>primary</td><td>Defines the color of the component.</td></tr>
<tr><td>size</td><td>small<br/>medium<br/>large<br/>string</td><td>medium</td><td>Defines the size of the component.</td></tr>
<tr><td>fullWidth</td><td>bool</td><td>false</td><td>If true, the button takes up the full width of its container.</td></tr>
<tr><td>disableElevation</td><td>bool</td><td>false</td><td>If true, no elevation is used.</td></tr>
<tr><td>disableFocusRipple</td><td>bool</td><td>false</td><td>If true, the keyboard focus ripple is disabled.</td></tr>
<tr><td>disableRipple</td><td>bool</td><td>false</td><td>If true, the ripple effect is disabled.</td></tr>
</tbody>
</table>

## Subcomponents

The _Button_ component has a subcomponent that allows the placement of an icon on the left or right side of the button face.

### Icon

_Left Icon_ - specifies an icon to use on the left side of the button face.

_Right Icon_ - specifies an icon to use on the right side of the button face.

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

For more detail on the _Button_ component, see the [MUI developer docs](https://mui.com/material-ui/api/button/).
