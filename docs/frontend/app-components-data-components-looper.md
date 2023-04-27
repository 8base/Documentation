---
id: 'app-components-data-components-looper'
sidebar_label: 'Looper'
redirect_from: '/frontend/app-components/data-components/looper'
slug: '/projects/frontend/app-components/data-components/looper'
---

# Looper

The _Looper_ component is a container that uses a static or dynamic data array. Other components, such as a _[List](./app-components-other-components-list)_ or _[Typography](./app-components-other-components-typography)_ component, are added to the _Looper_ component to render dynamic content on the page.

#### Properties

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>loopData</td><td>array</td><td></td><td>Defines an array of data in the format id, prop1, prop2, prop3. The id <b>must</b> be is small letters.</td></tr>
<tr><td>itemName</td><td>string</td><td></td><td>Defines a unique identifier that allows access the array element's properties.</td></tr>
</tbody>
</table>
