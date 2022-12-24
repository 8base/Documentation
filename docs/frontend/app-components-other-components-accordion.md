---
id: 'app-components-other-components-accordion'
sidebar_label: 'Accordion'
slug: '/frontend/app-components/other-components/accordion'
---

# Accordion
The *Accordion* component allows the user to show and hide sections of associated content on a page.

### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>actions</td><td>bool</td><td>false</td><td>If enabled, displays the Accordion Action settings.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the component is disabled.</td></tr>
<tr><td>expanded</td><td>code</td><td></td><td>Allows the user to add additional code to control the expansion functionality of the component.</td></tr>
</tbody>
</table> 

### Style Attributes
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>square</td><td>bool</td><td>false</td><td>If true, disables rounded corners on the component.</td></tr>
</tbody>
</table> 

## Subcomponents
The *Accordion* component consists of several subcomponents that define various aspects of an accordion's content.

### Accordion Summary
The *Accordion Summary* component provides a title for the content within the details section of the accordion and an expansion indicator to expand the accordion.

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>expandIcon</td><td>node</td><td>down arrow</td><td>Defines the icon to display as the expand indicator.</td></tr>
<tr><td>margin</td><td>string</td><td></td><td>The margin space around the accordion summary content.</td></tr>
<tr><td>padding</td><td>string</td><td></td><td>The padding space around the accordion summary content.</td></tr>
<tr><td>font</td><td>serif<br/>sans-serif<br/>monospaced<br/>arial<br/>arial black<br/>verdana<br/>times new roman<br/>didot<br/>georgia<br/>american typewriter<br/>courier<br/>monaco<br/>bradley hand<br/>string</td><td></td><td>Defines the font face for the title.</td></tr>
<tr><td>size</td><td>string</td><td></td><td>Defines the size of the accordion summary component in pixels.</td></tr>
<tr><td>color</td><td>href #ffffff<br/>rgb 5,5,5<br/>string</td><td></td><td>Defines the color of the accordion summary component.</td></tr>
</tbody>
</table> 

### Accordion Details
The *Accordion Details* component provides a surface to display additional information through other components, such as a *[Card](./app-components-layout-components-card)*, *[Typography](./app-components-other-components-typography)* or *[Text](./app-components-other-components-text)* component.

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>margin</td><td>string</td><td></td><td>The margin space around the accordion details content.</td></tr>
<tr><td>padding</td><td>string</td><td></td><td>The padding space around the accordion details content.</td></tr>
<tr><td>font</td><td>serif<br/>sans-serif<br/>monospaced<br/>arial<br/>arial black<br/>verdana<br/>times new roman<br/>didot<br/>georgia<br/>american typewriter<br/>courier<br/>monaco<br/>bradley hand<br/>string</td><td></td><td>Defines the font face for the detail text.</td></tr>
<tr><td>size</td><td>string</td><td></td><td>Defines the size of the accordion details component in pixels.</td></tr>
<tr><td>color</td><td>href #ffffff<br/>rgb 5,5,5<br/>string</td><td></td><td>Defines the color of the accordion details component.</td></tr>
</tbody>
</table> 

### Accordion Actions
The *Accordion Actions* component allows for the placement of *[Button](./app-components-input-components-button)* components to perform actions related to the accordion's function. By default, when the accordion actions are enabled, both the **Cancel** and **OK** buttons are added to the component.

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>disableSpacing</td><td>bool</td><td>false</td><td>If true, removes additional margin spacing around the actions.</td></tr>
<tr><td>margin</td><td>string</td><td></td><td>The margin space around the accordion actions content.</td></tr>
<tr><td>padding</td><td>string</td><td></td><td>The padding space around the accordion actions content.</td></tr>
<tr><td>font</td><td>serif<br/>sans-serif<br/>monospaced<br/>arial<br/>arial black<br/>verdana<br/>times new roman<br/>didot<br/>georgia<br/>american typewriter<br/>courier<br/>monaco<br/>bradley hand<br/>string</td><td></td><td>Defines the font face for the actions component.</td></tr>
<tr><td>size</td><td>string</td><td></td><td>Defines the size of the accordion actions component in pixels.</td></tr>
<tr><td>color</td><td>href #ffffff<br/>rgb 5,5,5<br/>string</td><td></td><td>Defines the color of the accordion actions component.</td></tr>
</tbody>
</table> 

For more detail on the *Accordion* component, see the [MUI developer docs](https://mui.com/material-ui/api/accordion/).