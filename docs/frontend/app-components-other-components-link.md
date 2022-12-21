---
id: 'app-components-other-components-link'
sidebar_label: 'Link'
slug: '/frontend/app-components/other-components/link'
---

# Link
The *Link* component provides a link to either a document or a location.

### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>Defines the text to use as a link.</td></tr>
<tr><td>absolute</td><td>bool</td><td>false</td><td>If true, enables the href and target properties and disables the to property.</td></tr>
<tr><td>to</td><td>string</td><td></td><td>Specifies the document to link to.</td></tr>
<tr><td>href</td><td>string</td><td></td><td>Specifies the URL to link to.</td></tr>
<tr><td>target</td><td>_blank<br/>_self<br/>string</td><td></td><td>Sets the window target.</td></tr>
</tbody>
</table>

#### Style Attributes
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>variant</td><td>h1<br/h2<br/>h3<br/>h4<br/>h5<br/>h6<br/>subtitle1<br/>subtitle2<br/>body1<br/>body2<br/>caption<br/>button<br/>overline<br/>srOnly<br/>inherit<br/>string</td><td>inherit</td><td>Specifies the display type to use.</td></tr>
<tr><td>underline</td><td>none<br/>hover<br/>always<br/>string</td><td>none</td><td>Specifies whether the link is underlined.</td></tr>
<tr><td>fontColor</td><td>default<br/>inherit<br/>primary<br/>secondary<br/>string</td><td>primary</td><td>Defines the font color of the link.</td></tr>
</tbody>
</table>

For more detail on the *Link* component, see the [MUI developer docs](https://mui.com/material-ui/api/link/).




