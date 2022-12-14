---
id: 'app-components-input-components-time-picker'
sidebar_label: 'Time Picker'
slug: '/frontend/app-components/input-components/time-picker'
---

# Time Picker
The *Time Picker* component allows the user to select a single time. It renders a modal dialogue on a mobile device and a text field with a popover on a desktop.

The *Time Picker* component is used independently or as a form component. To use it as a form component, place it within a *Form Block*.

### Unique Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>name</td><td>string</td><td></td><td>Specifies the name of the component (form component only).</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies the value of the component.</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>format</td><td>HH:mm:ss<br/>any</td><td>HH:mm:ss</td><td>Specifies the time format to display.</td></tr>
<tr><td>maxTime</td><td>HH:mm:ss<br/>HH:mm<br/>HH<br/>any</td><td>HH:mm:ss</td><td>Specifies a maximum time.</td></tr>
<tr><td>minTime</td><td>HH:mm:ss<br/>HH:mm<br/>HH<br/>any</td><td>HH:mm:ss</td><td>Specifies a minimum.</td></tr>
<tr><td>minutesStep</td><td>number</td><td>1</td><td>Specifies the Step over minutes value.</td></tr>
<tr><td>responsiveness</td><td>mobile<br/>desktop<br/>static<br/>string</td><td>desktop</td><td>Specifies the device the time picker is optimized for.</td></tr>
<tr><td>showToolbar</td><td>bool</td><td>true</td><td>Specifies whether the toolbar is enabled.</td></tr>
<tr><td>orientation</td><td>portrait<br/>landscape<br/>string</td><td>portrait</td><td>Specifies the orientation of the component.</td></tr>
<tr><td>ampm</td><td>bool</td><td>true</td><td>If enabled, AM/PM will display 12/24 view for clock selection.</td></tr>
<tr><td>ampmInClock</td><td>bool</td><td>false</td><td>If enabled, AM/PM will display on either side of the analog clock.</td></tr>
<tr><td>readOnly</td><td>bool</td><td>false</td><td>Specifies whether the component is read only.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>Specifies whether the component is disabled.</td></tr>
<tr><td>openTo</td><td>hours<br/>minutes<br/>seconds<br/>string</td><td>hours</td><td>Specifies the initial view to display.</td></tr>
<tr><td>hoursView</td><td>bool</td><td>true</td><td>If enabled, the component will display the hour view.</td></tr>
<tr><td>minutesView</td><td>bool</td><td>true</td><td>If enabled, the component will display the minute view.</td></tr>
<tr><td>secondsView</td><td>bool</td><td>false</td><td>If enabled, the component will display the seconds view.</td></tr>
</tbody>
</table>

### Unique Style Attributes
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>inputVariant</td><td>Filled<br/>Outlined<br/>Standard<br/>string</td><td>Outlined</td><td>Specifies the display type of the component.</td></tr>
</tbody>
</table>

For more detail on the *Time Picker* component, see the [MUI developer docs](https://mui.com/x/api/date-pickers/time-picker/).