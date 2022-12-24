---
id: 'app-components-other-components-avatar'
sidebar_label: 'Avatar'
slug: '/frontend/app-components/other-components/avatar'
---

# Avatar
The *Avatar* component is a visual element, such as an image, letter(s) or icon, used to represent a user, label or tool.

### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>source</td><td>string</td><td></td><td>Defines the path to the image.</td></tr>
<tr><td>altText</td><td>string</td><td></td><td>Defines the alt text attribute for the image.</td></tr>
<tr><td>sourceSet</td><td>string</td><td></td><td>Defines the srcSet attribute for the image. </td></tr>
</tbody>
</table>

### Style Attributes
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>variant</td><td>circular<br/>rounded<br/>square<br/>string</td><td>circular</td><td>Specifies the shape of the avatar.</td></tr>
</tbody>
</table>

## Subcomponents
The *Avatar* component has two subcomponents that allow the addition of either an icon or typography to the avatar component.

### Icon
An icon to use on the avatar.

For further details, see the [Icon](./app-components-other-components-icon) component.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>color</td><td>inherit<br/>primary<br/>secondary<br/>action<br/>disabled<br/>error<br/>string</td><td>inherit</td><td>Defines the color of the icon.</td></tr>
<tr><td>size</td><td>inherit<br/>small<br/>medium<br/>large</td><td>medium</td><td>Defines the size of the icon.</td></tr>
<tr><td>viewBox</td><td>0 0 25 25<br/></td><td></td><td>Defines the size of the view box that displays the icon.</td></tr>
<tr><td>fill</td><td>hex #ffffff<br/>rgb 5,5,5</td><td></td><td>The fill color of the icon.</td></tr>
<tr><td>stroke</td><td>hex #ffffff<br/>rgb 5,5,5</td><td></td><td>The stroke color of the icon.</td></tr>
</tbody>
</table>

### Typography
The typography to use on the avatar.

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

For more detail on the *Avatar* component, see the [MUI developer docs](https://mui.com/material-ui/api/avatar/).
