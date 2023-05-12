---
id: 'app-components-other-components-breadcrumbs'
sidebar_label: 'Breadcrumbs'
slug: '/frontend/app-components/other-components/breadcrumbs'
---

# Breadcrumbs
The *Breadcrumbs* component displays a list of links that help the user visualize a page's location within the structure of a website and allows navigation to any page within the list. The component uses either *Typography* or *[Link](./app-components-other-components-link)* components to create the location list.
 
### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>separator</td><td>node</td><td></td><td>Opens the typography subcomponent used to define the separator for the breadcrumbs.</td></tr>
<tr><td>maxItems</td><td>integer</td><td>8</td><td>Specifies the maximum number of breadcrumbs to display. The items before collapse and the items after collapse, will display with an ellipsis between them if the maximum number is exceeded.</td></tr>
<tr><td>itemsBeforeCollapse</td><td>integer</td><td>1</td><td>If the max items is exceeded, the number of items to show before the ellipsis.</td></tr>
<tr><td>itemsAfterCollapse</td><td>integer</td><td>1</td><td>If the max items is exceeded, the number of items to show after the ellipsis.</td></tr>
<tr><td>expandText</td><td>string</td><td>show path</td><td>Overrides the default label for the expand button.</td></tr>
</tbody>
</table> 

## Subcomponents
The *Breadcrumbs* component has a *Typography* subcomponent that allows for a separator character between breadcrumb items.

### Typography
Specifies a separator character to separate the breadcrumb items.

For further details, see the *Typography* component.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>Defines the text to use as a separator character.</td></tr>
<tr><td>variant</td><td>h1<br/>h2<br/>h3<br/>h4<br/>h5<br/>h6<br/>subtitle1<br/>subtitle2<br/>body1<br/>body2<br/>caption<br/>button<br/>overline<br/>inherit<br/>string</td><td>inherit</td><td>Defines the type of typography to display.</td></tr>
<tr><td>color</td><td>initial<br/>inherit<br/>primary<br/>secondary<br/>textPrimary<br/>textSecondary<br/>error<br/>string</td><td>inherit</td><td>Defines the color of the typography.</td></tr>
<tr><td>gutterBottom</td><td>bool</td><td>false</td><td>Enables a gutter at the bottom of the typography component.</td></tr>
</tbody>
</table>


For more detail on the *Breadcrumbs* component, see the [MUI developer docs](https://mui.com/material-ui/api/breadcrumbs/).
