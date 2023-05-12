---
id: 'app-components-input-components-checkbox'
sidebar_label: 'Checkbox'
slug: '/frontend/app-components/input-components/checkbox'
---

# Checkbox
The *Checkbox* component allows the user to select one or more items from a set.

The checkbox component has three states, checked, unchecked, and indeterminate. When used as a form component, a checkbox has two states, checked or unchecked.

The *Checkbox* component is used independently or as a form component. To use it as a form component, place it within a *Form Block*.

### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>name</td><td>string</td><td></td><td>Specifies the name of the component (form component only).</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies a boolean value for the component; the default value is on.</td></tr>
<tr><td>checked</td><td>bool</td><td>false</td><td>Specifies whether the component is checked</td></tr>
<tr><td>required</td><td>bool</td><td>false</td><td>If true, the checkbox must be checked.</td></tr>
<tr><td>indeterminate</td><td>bool</td><td>false</td><td>If true, a dash symbol appears on the checkbox, and you cannot modify its state.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the checkbox is disabled.</td></tr>
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
<tr><td>labelPlacement</td><td>top<br/>bottom<br/>start<br/>end<br/>string</td><td>end</td><td>Specifies the location of the checkbox label.</td></tr>
<tr><td>disableRipple</td><td>bool</td><td>false</td><td>By default, the checkbox component has a ripple effect triggered when the checkbox state is modified. To disable this effect, set "Disable Ripple" on.</td></tr>
</tbody>
</table>

## Subcomponents
The *Checkbox* component has a subcomponent that allows an icon to be used in place of the standard checkmark.

### Icon
*Checked Icon* - specifies an icon to use when the checkbox is checked.

*Unchecked Icon* - specifies an icon to use when the checkbox is unchecked.

*Indeterminate Icon* - specifies an icon to use when the checkbox is indeterminate.

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

For more detail on the *Checkbox* component, see the [MUI developer docs](https://mui.com/material-ui/api/checkbox/).
