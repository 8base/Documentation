---
id: 'app-components-other-components-table'
sidebar_label: 'Table'
slug: '/frontend/app-components/other-components/table'
---

# Table
The *Table* component displays data in a table format on a page.

### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>data</td><td>array</td><td></td><td>Defines the data for the table in the format column name, column value. The array may use static or dynamic data, <b>must</b> have an id field for each array element, and the id <b>must</b> be lowercase. </td></tr>
<tr><td>autoGenerateColumns</td><td></td><td></td><td>The table will populate based on what is in the data field.</td></tr>
<tr><td>rowCount</td><td>integer</td><td></td><td>Specifies the total number of rows in the table.</td></tr>
<tr><td>loading</td><td>bool</td><td>false</td><td>If true, displays a loading animation.</td></tr>
<tr><td>columnsAddItem</td><td></td><td></td><td>Adds a new column to the table. (See column settings).</td></tr>
<tr><td>rowsPerPage</td><td>integer</td><td>5</td><td>Defines the number of table rows to display per page.</td></tr>
<tr><td>rowsPerPageOptions</td><td>array</td><td></td><td>Defines an array of options for the rows per page selection.</td></tr>
<tr><td>hideFooter</td><td>bool</td><td>false</td><td>If true, hides the footer at the bottom of the table.</td></tr>
<tr><td>hideFooterPagination</td><td>bool</td><td>false</td><td>If true, hides the pagination information in the footer.</td></tr>
<tr><td>hideFooterSelectedRowCount</td><td>bool</td><td>false</td><td>If true, hides the selected row counter in the footer.</td></tr>
<tr><td>checkboxSelection</td><td>bool</td><td>false</td><td>If true, adds a column of checkboxes to the table.</td></tr>
<tr><td>disableSelectionOnClick</td><td>bool</td><td>false</td><td>If true, disables clicking on a column to select it.</td></tr>
<tr><td>disableColumnSelector</td><td>bool</td><td>false</td><td>If true, disables access to the column selector to show or hide columns.</td></tr>
</tbody>
</table> 

**Column Settings**
Clicking on the gear on the right-hand side of a column brings up the settings panel for the column.

<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>key</td><td>string</td><td></td><td>Specifies a unique key for the column.</td></tr>
<tr><td>name</td><td>string</td><td></td><td>Specifies a unique name for the column.</td></tr>
<tr><td>hide</td><td>bool</td><td>false</td><td>If true, hides the column in the table.</td></tr>
<tr><td>width</td><td>integer</td><td></td><td>Specifies the width of each cell in the column.</td></tr>
<tr><td>transform</td><td></td><td></td><td>Defines a transformation on the column.</td></tr>
<tr><td>addRenderCell</td><td>text<br/>link<br/>container<br/>node</td><td></td><td>Specifies the component to render the cell content.</td></tr>
<tr><td>format</td><td>text<br/>usd<br/>usd(cents)<br/>boolean<br/>date<br/>dateTime<br/>float<br/>integer<br/>percent<br/>url<br/>button<br/>checkbox<br/>datePicker<br/>dropDown<br/>modal<br/>object<br/>radioButton<br/>textInput<br/>string</td><td></td><td>Defines the data type in the column.</td></tr>
</tbody>
</table>

### Style Attributes
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>showRightCellBorder</td><td>bool</td><td>false</td><td>If true, displays the right-hand border on all cells except those in the last column.</td></tr>
<tr><td>showColumnRightBorder</td><td>bool</td><td>false</td><td></td></tr>
<tr><td>showTableBorder</td><td>bool</td><td>false</td><td>If true, displays the table border.</td></tr>
<tr><td>rowHeight</td><td>integer</td><td></td><td>Defines the height of the table rows.</td></tr>
</tbody>
</table> 

## Subcomponents
The *Table* component has three possible subcomponents *Text*, *Link*,  or *Container* used to render the cell data within the table.

### Text
The *Text* component creates a text value for another component.

For further details, see the [Text](./app-components-other-components-text) component.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>Specifies a text value for the multiselect item.</td></tr>
</tbody>
</table> 

### Link
The *Link* component provides a link to either a document or a location.

For further details, see the [Link](./app-components-other-components-link) component.

### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>string</td><td></td><td>Defines the text to use as a link.</td></tr>
<tr><td>absolute</td><td>bool</td><td>false</td><td>If true, enables the href and target properties and disables the to property.</td></tr>
<tr><td>to</td><td>string</td><td></td><td>Specifies the document to link to.</td></tr>
</tbody>
</table>

### Container
Defines the margin and padding around a multiselect item.

For further details, see the [Container](./app-components-layout-components-container) component.