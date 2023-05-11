---
id: 'app-components-input-components-field-array'
sidebar_label: 'Field Array'
redirect_from: '/frontend/app-components/input-components/field-array'
slug: '/projects/frontend/app-components/input-components/field-array'
---

# Field Array

The _Field Array_ component displays form inputs based on a data array. It requires a _[Looper](./app-components-data-components-looper)_ component to generate the data array and an input control such as a _[Select](./app-components-input-components-select)_ component, which will populate based on the data array.

The _Field Array_ component is used as a form component and must be placed within a _Form Block_.

### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>name</td><td>string</td><td></td><td>Specifies the name of the component.</td></tr>
<tr><td>validateOnChange</td><td>bool</td><td>false</td><td>If true, validates the data when a change occurs.</td></tr>
</tbody>
</table>
