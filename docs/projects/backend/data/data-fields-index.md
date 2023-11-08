---
id: 'data-fields-index'
sidebar_label: 'Fields'
redirect_from: '/projects/backend/data/data-fields-index'
slug: '/backend/data/data-fields-index'
---
# Fields

Tables columns are made up of fields. Fields have different types of data, such as text, numbers, dates, and geographic points.
Certain fields have extended capabilities that streamline specific tasks. For example, `File` fields allow you to seamlessly attach files to records and `Smart` fields make it easy to implement complex validations for addresses or phone number.

## Working with Fields

### Creating Fields

Every field gets defined in a table and requires a _name_ and a _type_. Field names must be unique in the table, irrespective of their type. Once a new field has been created, a configuration modal will appear allowing for further customizations.

### Updating Fields

Fields are updated in the same interface used to create them. Updates to attributes like the field's _name_ and even _type_ in some cases - are changed in real-time. Changes to configurations must be saved. If 8base detects an issue with the change being made, an alert will display with instructions to fix the issue.

![Updating fields in the Data Builder](../_images/data-builder-field-update.png)

### Deleting Fields

To delete a field:

1. Click the **X** to the right of the field name input.
2. Enter the field name in the confirmation modal. Click **Delete**. 
:::warning
Deleted fields **cannot** be restored and any existing data will be lost.
:::

## Field Types

There are nine field types:

1. [Text](data-fields-text.md)
2. [Number](data-fields-number.md)
3. [Date](data-fields-date.md)
4. [Switch](data-fields-switch.md)
5. [File](data-fields-file.md)
6. [Table](data-fields-table.md)
7. [Smart](data-fields-smart.md)
8. [JSON](data-fields-json.md)
9. [Geo](data-fields-geo.md)
