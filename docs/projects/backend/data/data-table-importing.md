---
id: 'data-table-importing'
sidebar_label: 'Importing Data'
slug: '/backend/data/importing-data'
---

# Importing Data

Data can be imported from CSV files in the Data Viewer. 

1. Click the **...** button in the top right corner of the menu bar. 
2. Choose **Import CSV** from the drop-down. 
3. A dialog box will open. Add your CSV file and click **Import**.
![Importing records into the Data Viewer](../_images/data-viewer-import.gif)

## Data Validation

The CSV importer supports column mapping and enforces all schema defined validations. For example, if you have set a field to always have unique values, you cannot import records where this field has a duplicate value.

## Importing Complex Data

Please refer to the [CLI's Import](/projects/backend/development-tools/cli/commands#import) command docs to import more complex data, such as related records, images, smart fields, etc.



