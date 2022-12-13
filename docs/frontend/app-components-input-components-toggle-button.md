---
id: 'app-components-input-components-toggle-button'
sidebar_label: 'Toggle Button'
slug: '/frontend/app-components/input-components/toggle-button'
---

# Toggle Button
 A *Toggle Button* is a component that acts as a single input control and is part of a set within a Toggle Button Group. It is possible to select multiple toggle buttons unless the **exclusive property** is enabled for the *Toggle Button Group*.
 
 The toggle button has two states, On and Off.
 
### Unique Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>Specifies the text value for the toggle button face.</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies the value of the component.</td></tr>
<tr><td>type</td><td>button<br/>submit<br/>reset</td><td>button</td><td>Specifies the type of the component.</td></tr>
<tr><td>classes</td><td>object</td><td></td><td>Overrides or extends the classes applied to the component.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>Specifies whether the component is disabled.</td></tr>
<tr><td>href</td><td>string</td><td></td><td>A URL to link to when the component is clicked.</td></tr>
</tbody>
</table>

### Unique Style Attributes
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>color</td><td>standard<br/>primary<br/>secondary<br/>error<br/>info<br/>success<br/>warning<br/>string</td><td>standard</td><td>Specifies the color of the component.</td></tr>
<tr><td>size</td><td>small<br/>medium<br/>large<br/>string</td><td>medium</td><td>Specifies the size of the component.</td></tr>
<tr><td>fullWidth</td><td>bool</td><td>false</td><td>Specifies whether the component takes up the full width of its container.</td></tr>
<tr><td>sx</td><td>array<br/></td><td></td><td>Specifies custom CSS styles for the toggle button.</td></tr>
<tr><td>disableElevation</td><td>bool</td><td>false</td><td>If true, the toggle button will sit flat on the background surface.</td></tr>
<tr><td>disableFocusRipple</td><td>bool</td><td>false</td><td>If true, the keyboard focus ripple is disabled.</td></tr>
<tr><td>disableRipple</td><td>bool</td><td>false</td><td>If true, the ripple effect is disabled.</td></tr>
</tbody>
</table>

## Subcomponents

The *Toggle Button* component has an icon subcomponent that allows the placement of an icon on the left or right side of the button face.

### Icon
*Left Icon* - specifies an icon to use on the left side of the button face.

*Right Icon* - specifies an icon to use on the right side of the button face.

For further details, see the Icon component.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>color</td><td>inherit<br/>primary<br/>secondary<br/>action<br/>disabled<br/>error<br/>string</td><td>inherit</td><td>Specifies the color of the icon.</td></tr>
<tr><td>size</td><td>inherit<br/>small<br/>medium<br/>large<br/>string</td><td>small</td><td>Specifies the size of the icon.</td></tr>
<tr><td>viewBox</td><td>0 0 24 24</td><td></td><td>Defines the size of the view box that displays the icon.</td></tr>
<tr><td>fill</td><td>hex #ffffff<br/>rgb 5,5,5</td><td></td><td>The fill color of the icon.</td></tr>
<tr><td>stroke</td><td>hex #ffffff<br/>rgb 5,5,5</td><td></td><td>The stroke color of the icon.</td></tr>
</tbody>
</table>

For more detail on the *Toggle Button* component, see the [MUI developer docs](https://mui.com/material-ui/api/toggle-button).
