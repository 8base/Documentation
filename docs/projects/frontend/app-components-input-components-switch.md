---
id: 'app-components-input-components-switch'
sidebar_label: 'Switch'
redirect_from: '/frontend/app-components/input-components/switch'
slug: '/projects/frontend/app-components/input-components/switch'
---

# Switch

The _Switch_ component toggles the state of a single setting on or off.

The _Switch_ component is used independently or as a form component. To use it as a form component, place it within a _Form Block_.

### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>name</td><td>string</td><td></td><td>Specifies the name of the component (form component only).</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies a value for the component.</td></tr>
<tr><td>checked</td><td>bool</td><td>false</td><td>If true, the switch is checked.</td></tr>
<tr><td>required</td><td>bool</td><td>false</td><td>Indicates if the switch must be set.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the switch is disabled.</td></tr>
<tr><td>autofocus</td><td>bool</td><td>false</td><td>If true, autofocus is enabled.</td></tr>
</tbody>
</table>

### Style Attributes

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>color</td><td>default<br/>primary<br/>secondary<br/>error<br/>info<br/>success<br/>warning<br/>string</td><td>primary</td><td>Defines the color of the component.</td></tr>
<tr><td>size</td><td>small<br/>medium<br/>string</td><td>medium</td><td>Defines the size of the component.</td></tr>
<tr><td>labelPlacement</td><td>top<br/>bottom<br/>start<br/>end<br/>string</td><td>end</td><td>Specifies the location of the switch label.</td></tr>
<tr><td>disableRipple</td><td>bool</td><td>false</td><td>By default, the switch component has a ripple effect triggered when the switch state is modified. To disable this effect, set "Disable Ripple" on.</td></tr>
</tbody>
</table>

## Subcomponents

The _Switch_ component has a subcomponent that allows an icon to replace the normal thumb on the switch.

### Icon

_Checked Icon_ - specifies an icon to use when the switch is set.

_Unchecked Icon_ - specifies an icon to use when the switch is not set.

For further details, see the [Icon](./app-components-other-components-icon) component.

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

For more detail on the _Switch_ component, see the [MUI developer docs](https://mui.com/material-ui/api/switch/).
