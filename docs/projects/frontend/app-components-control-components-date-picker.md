---
id: 'app-components-control-components-date-picker'
sidebar_label: 'Date Picker'
redirect_from: '/frontend/app-components/input-components/date-picker'
slug: '/projects/frontend/app-components/control-components/date-picker'
---

# Date Picker

The _Date Picker_ component allows the user to select a date. _Date Picker_ components display in dialogs on mobile devices and text drop-downs on desktops. It is used independently or as a form component within a Form Block.

### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>name</td><td>string</td><td></td><td>Specifies the name of the component (form component only).</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies a value for the component.</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>initialDate</td><td>string</td><td></td><td>Specifies an initial date in the form of a string.</td></tr>
<tr><td>format</td><td>string</td><td></td><td>Specifies a date format in the form of a string.</td></tr>
<tr><td>readOnly</td><td>bool</td><td>false</td><td>If true, the date picker is read only.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the date picker is disabled.</td></tr>
<tr><td>disableFuture</td><td>bool</td><td>false</td><td>If true, future days are disabled, and only past days are selectable.</td></tr>
<tr><td>disablePast</td><td>bool</td><td>false</td><td>If true, past days are disabled, and only future days are selectable.</td></tr>
</tbody>
</table>

### Style Attributes

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>inputVariant</td><td>standard<br/>outlined<br/>filled<br/>string</td><td>outlined</td><td>Specifies the display type of the component.</td></tr>
</tbody>
</table>

For more detail on the _Date Picker_ component, see the [MUI developer docs](https://mui.com/x/api/date-pickers/date-picker/).
