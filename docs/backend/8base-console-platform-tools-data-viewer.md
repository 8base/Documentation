---
id: '8base-console-platform-tools-data-viewer'
sidebar_label: 'Data Viewer'
slug: '/backend/console/data-viewer'
---

# Data Viewer

While logged into a project's workspace, 8base provides an "Admin Panel" like interface for searching and managing table records. The *Data Viewer* is located within the management console's *Data* screen, tabbed alongside each table's *Schema*. 

![8Base Data Viewer](./images/data-viewer.png)

## Adding Records
New table records can be added using the "+" button next to the table name. A form modal will appear that displays all table fields. All validations specified in the schema definition are enforced while using the data viewer.

![Adding a new record in the Data Viewer](./images/data-viewer-add.png)

### Filtering Records
When using the Data Viewer, filters can be applied to reduce the number of records displayed. Multiple filters can be added and used together. Please note, the Data Viewer's filtering UI does not support filtering based on related tables. 

Use the API Explorer for advanced table filtering.

![Filtering records in the Data Viewer](./images/data-viewer-filtering.png)

### Sorting Records
Data records can be sorted by using one or more sortable attributes. Sort attributes are ranked in the order in which they were created. Additionally, filters can be applied to reduce the number of records displayed. Multiple filters can be added and used together. Please note, the Data Viewer's sorting UI does not support sorting based on related table values. 

Use API Explorer for advanced table sorting.

![Sorting records in the Data Viewer](./images/data-viewer-sorting.png)

### Selected Fields
By default, the *createdAt*, and *updatedAt* field columns are hidden in the Data Viewer. In order to customize which fields and columns display for a given table, click on the `[Selected Fields]` drop-down and toggle on/off desired fields.

In the same drop-down, columns can easily be reordered. Simply drag-and-drop items in the drop-down to any preferred order.

![Selecting fields in the Data Viewer](./images/data-viewer-selected-fields.png)

### Importing Data
To import a CSV file, click the ellipsis button in the top right corner of the menu bar and choose `[Import CSV]` from the drop-down. The CSV importer supports column mapping and enforces all schema defined validations on create.

Please refer to the [CLI's Import](/docs/development-tools/cli/commands#import) command docs to import more complex data (related records, images, smart fields, etc).

![Importing records into the Data Viewer](./images/data-viewer-import.gif)
