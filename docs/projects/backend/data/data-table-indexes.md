---
id: 'data-table-indexes'
sidebar_label: 'Table Indexes'
slug: '/backend/data/table-indexes'
---
# Table Indexes

Data retrieval performance can be improved by adding one or more indexes to your tables. Indexes are used to find rows with specific column values quickly. Without an index, the search must begin with the first row and then read through the entire table to find relevant rows.

Indexes in 8base are based on MySQL. To learn more, see [How MySQL Uses Indexes](https://dev.mysql.com/doc/refman/8.0/en/mysql-indexes.html).

## Unique Indexes

A unique indexes only contains rows that are unique. This means that the same row cannot have identical non-NULL values for all columns in this index as another row. This allows you to quickly reach certain record ranges. Unique indexes can also be used to enforce restraints on data, because 8base will not allow you to create duplicate values when you insert or update data.

## Creating an Index

To create an index:

1. Select a table and click the gear icon. Then click **Add Index**.
![Adding an index](_images/ui_data_addindex.png)
2. Select one or several fields from which the index will be generated. You can choose whether or not it will be a unique index. Index names cannot contain spaces.
![Creating new table index](../_images/creating-table-indexes.png) 
3. When you are done, click **Create**.


