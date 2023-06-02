---
id: 'app-components-controls-components-tab-group'
sidebar_label: 'Tab Group'
redirect_from: ''
slug: '/projects/frontend/app-components/controls-components/tab-group'
---

# Tab Group

The _Tab Group_ component acts like a container that holds a set of *Tabs* and allows users to select only one option. Each *Tab* has its own *Tab Panel*, which holds the content for that *Tab*.

### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>ariaLabel</td><td>string</td><td></td><td>Specifies a label for the tab panel.</td></tr>
<tr><td>ariaLabelledby</td><td>string</td><td></td><td>Specifies the id of the element that contains the tab panel label.</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies the value of the component.</td></tr>
<tr><td>tabItems</td><td>component</td><td></td><td>Defines a list of tab items within the tab group.</td></tr>
</tbody>
</table>

### Style Attributes

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>indicatorColor</td><td>primary<br/>secondary</td><td>primary</td><td>Defines the indicator color (underline) of the selected tab.</td></tr>
<tr><td>orientation</td><td>horizontal<br/>vertical</td><td>horizontal</td><td>Defines the orientation of the component.</td></tr>
<tr><td>variation</td><td>scrollable<br/>full width<br/>standard</td><td>standard</td><td>Defines the type of component.</td></tr>
<tr><td>scrollButtons</td><td>bool</td><td>false</td><td>If true, adds scroll buttons to the start and end of the component.</td></tr>
<tr><td>centered</td><td>bool</td><td>false</td><td>If true, centers the tab items within the tab panel.</td></tr>
<tr><td>visableScrollBar</td><td>bool</td><td>false</td><td>If true, displays a scrollbar.</td></tr>
<tr><td>customTabHeadersx</td><td>array</td><td></td><td>Specifies custom CSS styles for the tab header.</td></tr>
<tr><td>customTabPanelsx</td><td>array</td><td></td><td>Specifies custom CSS styles for the tab panel.</td></tr>
</tbody>
</table>

## Subcomponents

The _Tab Group_ component has one subcomponent, a _Tab_ component, used to create a set of Tab items.

### Tab

A _Tab_ is a component that acts as a single control that allows users to switch between multiple views.

*Tabs* organize and allow navigation between related content groups at the same level of hierarchy.

For further details, see the *Tab* component.

#### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>header</td><td>string</td><td></td><td>Specifies a header for the component.</td></tr>
<tr><td>tabIndex</td><td>integer</td><td></td><td>Specifies a unique index to render the tab panel.</td></tr>
<tr><td>wrapped</td><td>bool</td><td>false</td><td>If true, the tab label is wrapped across multiple lines.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>If true, the tab is disabled.</td></tr>
</tbody>
</table>

