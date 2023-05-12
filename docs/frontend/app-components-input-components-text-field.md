---
id: 'app-components-input-components-text-field'
sidebar_label: 'Text Field'
slug: '/frontend/app-components/input-components/text-field'
---

# Text Field
The *Text Field* component allows the user to enter and edit text.

The *Text Field* component is used independently or as a form component. To use it as a form component, place it within a *Form Block*.

### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>name</td><td>string</td><td></td><td>Specifies the name of the component.</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies the value of the component.</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Secifies a label for the component.</td></tr>
<tr><td>placeholder</td><td>string</td><td></td><td>Displays placeholder text in the text field to prompt the user for specific input.</td></tr>
<tr><td>helperText</td><td>node</td><td></td><td>Displays helper text beneath the text field to prompt the user for specific input.</td></tr>
<tr><td>type</td><td>text<br/>number<br/>color<br/>email<br/>url<br/>date<br/>datetime-local<br/>month<br/>password<br/>tel<br/>time<br/>week<br/>string</td><td>text</td><td>Specifies the type of text input.</td></tr>
<tr><td>validation</td><td>email<br/>url<br/>US phone number<br/>regular expression<br/>string</td><td></td><td>Defines the type of text to validate.</td></tr>
<tr><td>helperErrorText</td><td>node</td><td></td><td>If validation is enabled, will display an error message beneath the text field if the input is invalid.</td></tr>
<tr><td>debounce</td><td>number</td><td>0</td><td>Sets a delay on any events attached to the component.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the text field is disabled.</td></tr>
<tr><td>required</td><td>bool</td><td>false</td><td>If true, the text field must contain a value.</td></tr>
<tr><td>autofocus</td><td>bool</td><td>false</td><td>If true, autofocus is enabled.</td></tr>
<tr><td>multiline</td><td>bool</td><td>false</td><td>Specifies whether the text field contains multiple lines. If enabled, the input field changes to a text area field and will stretch to match the size of its content unless the Min and Max rows are set.</td></tr>
<tr><td>minRows</td><td>number</td><td></td><td>Indicates the minimum number of rows.</td></tr>
<tr><td>maxRows</td><td>number</td><td></td><td>Indicates the maximum number of rows.</td></tr>
<tr><td>startAdornment</td><td>component</td><td></td><td>Displays an icon or typography component at the start of the text field.</td></tr>
<tr><td>endAdornment</td><td>component</td><td></td><td>Displays an icon or typography component at the end of the text field.</td></tr>
</tbody>
</table>

### Style Attributes
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>variant</td><td>filled<br/>outlined<br/>standard<br/>string</td><td>outlined</td><td>Defines the display type of the component.</td></tr>
<tr><td>color</td><td>primary<br/>secondary<br/>error<br/>info<br/>success<br/>warning<br/>string</td><td>primary</td><td>Defines the color of the component.</td></tr>
<tr><td>size</td><td>small<br/>medium<br/>string</td><td>medium</td><td>Defines the size of the component.</td></tr>
<tr><td>fullWidth</td><td>bool</td><td>false</td><td>If true, the text field takes up the full width of its container.</td></tr>
</tbody>
</table>

## Subcomponents
The *Text Field* component has two subcomponents that allow an icon or typography to be placed as an adornment at the start or end of the text field.

### Icon
Specifies an icon to use at the start or end of a text field.

For further details, see the *Icon* component.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>color</td><td>inherit<br/>primary<br/>secondary<br/>action<br/>disabled<br/>error<br/>string</td><td>inherit</td><td>Defines the color of the icon.</td></tr>
<tr><td>size</td><td>inherit<br/>small<br/>medium<br/>large</td><td>medium</td><td>Defines the size of the component.</td></tr>
<tr><td>viewBox</td><td>0 0 25 25<br/></td><td></td><td>Defines the size of the view box that displays the icon.</td></tr>
<tr><td>fill</td><td>hex #ffffff<br/>rgb 5,5,5</td><td></td><td>The fill color of the icon.</td></tr>
<tr><td>stroke</td><td>hex #ffffff<br/>rgb 5,5,5</td><td></td><td>The stroke color of the icon.</td></tr>
</tbody>
</table>

### Typography
Specifies typography to use at the start or end of a text field.

For further details, see the *Typography* component.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>Defines the text to display in the text field.</td></tr>
<tr><td>variant</td><td>h1<br/>h2<br/>h3<br/>h4<br/>h5<br/>h6<br/>subtitle1<br/>subtitle2<br/>body1<br/>body2<br/>caption<br/>button<br/>overline<br/>inherit<br/>string</td><td>inherit</td><td>Specifies the type of typography to display.</td></tr>
<tr><td>color</td><td>initial<br/>inherit<br/>primary<br/>secondary<br/>textPrimary<br/>textSecondary<br/>error<br/>string</td><td>inherit</td><td>Defines the color of the typography.</td></tr>
<tr><td>gutterBottom</td><td>bool</td><td>false</td><td>Enables a gutter at the bottom of the typography component.</td></tr>
</tbody>
</table>

For more detail on the *Text Field* component, see the [MUI developer docs](https://mui.com/material-ui/api/text-field/).