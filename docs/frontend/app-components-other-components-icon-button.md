---
id: 'app-components-other-components-icon-button'
sidebar_label: 'Icon Button'
slug: '/frontend/app-components/other-components/icon-button'
---

# Icon Button
The *Icon Button* component is a button represented as an icon. It functions the same way as the button component.

### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>type</td><td>button<br/>reset<br/>submit</td><td>button</td><td>Specifies the type of icon button.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the icon button is disabled.</td></tr>
<tr><td>href</td><td>string</td><td></td><td>A URL to navigate to after pressing the icon button.</td></tr>
</tbody>
</table>

### Style Attributes
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>fontColor</td><td>default<br/>inherit<br/>primary<br/>secondary<br/>string</td><td>default</td><td>Defines the font color of the icon button.</td></tr>
<tr><td>size</td><td>small<br/>medium<br/>large<br/></td><td>medium</td><td>Defines the size of the icon button.</td></tr>
<tr><td>fullWidth</td><td>bool</td><td>false</td><td>If true, the icon button takes up the full width of its container.</td></tr>
<tr><td>disableElevation</td><td>bool</td><td>false</td><td>If true, the icon button will sit flat on the background surface.</td></tr>
<tr><td>disableFocusRipple</td><td>bool</td><td>false</td><td>If true, the keyboard focus ripple is disabled.</td></tr>
<tr><td>disableRipple</td><td>bool</td><td>false</td><td>If true, the ripple effect is disabled.</td></tr>
</tbody>
</table>

## Subcomponents
The *Icon Button* component has one subcomponent that uses an icon as a button face.

### Icon
The *Icon* component allows the user to select an icon to place on the icon button.

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



