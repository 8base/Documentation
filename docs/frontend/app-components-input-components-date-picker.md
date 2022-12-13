---
id: 'app-components-input-components-date-picker'
sidebar_label: 'Date Picker'
slug: '/frontend/app-components/input-components/date-picker'
---

# Date Picker
The *Date Picker* component allows the user to select a date. *Date Picker* components display in dialogs on mobile devices and text drop-downs on desktops.

The *Date Picker* component is used independently or as a form component. To use it as a form component, place it within a *Form Block*.

### Unique Properties
<table>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
<tr><td>name</td><td>string</td><td></td><td>Specifies the name of the component (form component only).</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies a value for the component.</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>initialDate</td><td>string</td><td></td><td>Specifies an initial date in the form of a string.</td></tr>
<tr><td>format</td><td>string</td><td></td><td>Specifies a date format in the form of a string.</td></tr>
<tr><td>readOnly</td><td>bool</td><td>false</td><td>Specifies whether the component is Read-Only.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>Specifies whether the component is disabled.</td></tr>
<tr><td>strictCompareDates</td><td>bool</td><td>false</td><td></td></tr>
<tr><td>openTo</td><td>day<br/>month<br/>year<br/>string</td><td>day</td><td>Specifies the first view type.</td></tr>
<tr><td>animateYearScrolling</td><td>bool</td><td>false</td><td></td></tr>
<tr><td>autoOk</td><td>bool</td><td>false</td><td>If enabled, this will automatically close the date picker once the user has selected a date.</td></tr>
<tr><td>disableFuture</td><td>bool</td><td>false</td><td>If set to true, future days are disabled, and only past days are selectable.</td></tr>
<tr><td>disablePast</td><td>bool</td><td>false</td><td>If set to true, past days are disabled, and only future days are selectable.</td></tr>
<tr><td>disableToolbar</td><td>bool</td><td>false</td><td>Specifies whether the toolbar in the date picker is disabled.</td></tr>
<tr><td>emptyLabel</td><td></td><td></td><td></td></tr>
<tr><td>invalidLabel</td><td></td><td></td><td></td></tr>
<tr><td>mask</td><td>string</td><td></td><td>Specifies a custom mask for the date format in the form of a string. Overrides the Format property.</td></tr>
<tr><td>maskChar</td><td>string</td><td></td><td></td></tr>
</table>

### Unique Style Attributes
<table>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
<tr><td>inputVariant</td><td>standard<br/>outlined<br/>filled<br/>string</td><td>outlined</td><td>Specifies the display type of the component.</td></tr>
</table>

For more detail on the *Date Picker* component, see the [MUI developer docs](https://mui.com/x/api/date-pickers/date-picker/).
