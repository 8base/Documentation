---
id: 'app-components-other-components-tooltip'
sidebar_label: 'Tooltip'
slug: '/frontend/app-components/other-components/tooltip'
---

# Tooltip
The *Tooltip* component displays informative text when a user hovers over, focuses on, or taps an element.

### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>title</td><td>node</td><td></td><td>Opens the typography subcomponent used to define the text for the tooltip.</td></tr>
<tr><td>open</td><td>bool</td><td>false</td><td>If true, the tooltip component is shown.</td></tr>
<tr><td>disableInteractive</td><td>bool</td><td>false</td><td>If true, the tooltip is non-interactive.</td></tr>
<tr><td>disableFocusListener</td><td>bool</td><td>false</td><td>If true, will not respond to focus events.</td></tr>
<tr><td>disableHoverListener</td><td>bool</td><td>false</td><td>If true, will not respond to hover events.</td></tr>
<tr><td>disableTouchListener</td><td>bool</td><td>false</td><td>If true, will not respond to long press touch events.</td></tr>
<tr><td>enterDelay</td><td>number</td><td>100</td><td>Defines the number of milliseconds to wait before showing the tooltip.</td></tr>
<tr><td>enterNextDelay</td><td>number</td><td>0</td><td>Defines the number of milliseconds to wait before showing the tooltip when one was recently opened.</td></tr>
<tr><td>enterTouchDelay</td><td>number</td><td>700</td><td>Defines the number of milliseconds a user must touch an element before the tooltip is shown.</td></tr>
<tr><td>leaveDelay</td><td>number</td><td>0</td><td>Defines the number of milliseconds to wait before hiding the tooltip.</td></tr>
<tr><td>leaveTouchDelay</td><td>number</td><td>1500</td><td>Defines the number of milliseconds after a user stops touching an element before hiding the tooltip.</td></tr>
</tbody>
</table> 

### Style Attributes
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>placement</td><td>bottom-end<br/>bottom-start<br/>bottom<br/>left-end<br/>left-start<br/>left<br/>right-end<br/>right-start<br/>right<br/>top-end<br/>top-start<br/>top<br/>string</td><td>bottom</td><td>Defines the placement of the tooltip.</td></tr>
<tr><td>arrow</td><td>bool</td><td>false</td><td>If true, adds an arrow to the tooltip.</td></tr>
</tbody>
</table> 

## Subcomponents
The *Tooltip* component has two typography subcomponents used to create text for a typography element and the tooltip text.

### Typography
Specifies text for the typography element and the tooltip.

For further details, see the [Typography](./app-components-other-components-typography) component.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>Defines the text to use.</td></tr>
<tr><td>variant</td><td>h1<br/>h2<br/>h3<br/>h4<br/>h5<br/>h6<br/>subtitle1<br/>subtitle2<br/>body1<br/>body2<br/>caption<br/>button<br/>overline<br/>inherit<br/>string</td><td>inherit</td><td>Defines the type of typography to display.</td></tr>
<tr><td>color</td><td>initial<br/>inherit<br/>primary<br/>secondary<br/>textPrimary<br/>textSecondary<br/>error<br/>string</td><td>inherit</td><td>Defines the color of the typography.</td></tr>
<tr><td>gutterBottom</td><td>bool</td><td>false</td><td>Enables a gutter at the bottom of the typography component.</td></tr>
</tbody>
</table>

For more detail on the *Tooltip* component, see the [MUI developer docs](https://mui.com/material-ui/api/tooltip/).



