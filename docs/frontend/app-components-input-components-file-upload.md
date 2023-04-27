---
id: 'app-components-input-components-file-upload'
sidebar_label: 'File Upload'
redirect_from: '/frontend/app-components/input-components/file-upload'
slug: '/projects/frontend/app-components/input-components/file-upload'
---

# File Upload

The _File Upload_ component allows the user to browse and select one or more files to upload.

The _File Upload_ component is used independently or as a form component. To use it as a form component, place it within a _Form Block_.

### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>name</td><td>string</td><td></td><td>Specifies the name of the component (form component only).</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the file upload is disabled.</td></tr>
<tr><td>required</td><td>bool</td><td>false</td><td>If true, the user must select a file.</td></tr>
<tr><td>autoFocus</td><td>bool</td><td>false</td><td>If true, autofocus is enabled.</td></tr>
<tr><td>multiline</td><td>bool</td><td>false</td><td>Specifies whether the text field contains multiple lines. If enabled, the input field changes to a text area field and will stretch to match the size of its content unless the Min and Max rows are set.</td></tr>
<tr><td>minRows</td><td>number</td><td></td><td>Indicates the minimum number of rows.</td></tr>
<tr><td>maxRows</td><td>number</td><td></td><td>Indicates the maximum number of rows.</td></tr>
<tr><td>startAdornment</td><td>component</td><td></td><td>Displays an icon or typography component at the start of the text field.</td></tr>
<tr><td>endAdornment</td><td>component</td><td></td><td>Displays an icon or typography component at the end of the text field.</td></tr>
<tr><td>acceptedFiles</td><td>string</td><td></td><td>Defines a comma-separated list of allowed file types.</td></tr>
<tr><td>maxFileSize</td><td>number</td><td></td><td>Defines the maximum size of a file.</td></tr>
</tbody>
</table>

## Subcomponents

The _File Upload_ component has two subcomponents that allow an icon or typography to be placed as an adornment at the start or end of the text field.

### Icon

Specifies an icon to use at the start or end of a text field.

For further details, see the [Icon](./app-components-other-components-icon) component.

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

Specifies typography to use at the start or end of the text field.

For further details, see the [Typography](./app-components-other-components-typography) component.

#### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>Defines the text to display in the text field.</td></tr>
<tr><td>variant</td><td>h1<br/>h2<br/>h3<br/>h4<br/>h5<br/>h6<br/>subtitle1<br/>subtitle2<br/>body1<br/>body2<br/>caption<br/>button<br/>overline<br/>inherit<br/>string</td><td>inherit</td><td>Defines the type of typography to display.</td></tr>
<tr><td>color</td><td>initial<br/>inherit<br/>primary<br/>secondary<br/>textPrimary<br/>textSecondary<br/>error<br/>string</td><td>inherit</td><td>Defines the color of the typography.</td></tr>
<tr><td>gutterBottom</td><td>bool</td><td>false</td><td>Enables a gutter at the bottom of the typography component.</td></tr>
</tbody>
</table>
