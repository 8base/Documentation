---
id: 'app-components-layout-components-async-content'
sidebar_label: 'Async Content'
redirect_from: '/frontend/app-components/layout-components/async-content'
slug: '/projects/frontend/app-components/layout-components/async-content'
---

# Async Content

The _Async Content_ component is a progress indicator that displays an unspecified wait time or length of a process.

It informs users about the state of ongoing processes such as loading an application, submitting a form or saving updates.

Progress indicators are:

- Determinate - display how long an operation will take
- Indeterminate - visualize an unspecified wait time

### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>type</td><td>circular<br/>linear<br/>string</td><td>circular</td><td>Specifies the type of progress indicator to display.</td></tr>
<tr><td>loading</td><td>bool</td><td>false</td><td>If true, the loading animation is enabled.</td></tr>
</tbody>
</table>

### Style Attributes

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>variant</td><td>determinate<br/>indeterminate</td><td>indeterminate</td><td>Indicates the classification of progress indicator.</td></tr>
<tr><td>color</td><td>inherit<br/>primary<br/>secondary<br/>error<br/>info<br/>success<br/>warning<br/>string</td><td>primary</td><td>Defines the color of the component.</td></tr>
<tr><td>stretch</td><td>bool</td><td>true</td><td>If true, the component can stretch.</td></tr>
<tr><td>size</td><td>string</td><td>40px</td><td>Defines the size of the component in pixels.</td></tr>
<tr><td>thickness</td><td>number</td><td>3.6</td><td>Defines the line thickness of the component</td></tr>
</tbody>
</table>

For more detail on the _Async Content_ component, see the [MUI developer docs](https://mui.com/material-ui/api/circular-progress/).
