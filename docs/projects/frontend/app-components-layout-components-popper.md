---
id: 'app-components-layout-components-popper'
sidebar_label: 'Popper'
redirect_from: '/frontend/app-components/layout-components/popper'
slug: '/projects/frontend/app-components/layout-components/popper'
---

# Popper

The _Popper_ component displays content on top of other content. The component API is an alternative to the react-popper and relies on a 3rd party library, _Popper.js_, for perfect positioning.

When you add a _Popper_ component to a page, a _Button_ component that controls the state of the _Popper_ is automatically added for you. Other components, such as an _Icon_ or _Image_, can also be used.

### Style Attributes

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>placement</td><td>auto-end<br/>auto-start<br/>auto<br/>bottom-end<br/>bottom-start<br/>bottom<br/>left-end<br/>left-start<br/>left<br/>right-end<br/>right-start<br/>right<br/>top-end<br/>top-start<br/>top</td><td>bottom</td><td>Defines the positioning of the component on the page.</td></tr>
</tbody>
</table>

## Popper Content

The *Popper Content* is the area within the *Popper* component that displays the content.

### Style Attributes
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>variant</td><td>elevation<br/>outlined<br/>string</td><td></td><td>Defines the type of the component.</td></tr>
<tr><td>square</td><td>bool</td><td>false</td><td>If true, rounded corners are disabled.</td></tr>
<tr><td>elevation</td><td>integer</td><td></td><td>Specifies a shadow applied to the surface, making the component appear raised above the surface. Valid values are 0-24.</td></tr>
</tbody>
</table>

For more detail on the _Popper_ component, see the [MUI developer docs](https://mui.com/material-ui/api/popper/).
