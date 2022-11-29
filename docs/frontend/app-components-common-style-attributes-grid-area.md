---
id: 'app-components-common-style-attributes-grid-area'
sidebar_label: 'Grid Area'
slug: '/frontend/app-components/common-style-attributes-grid-area'
---
# Grid Area
The *Grid Area* style attribute specifies a grid item's size and location within a grid. Grid lines, spans or the auto setting define an item's grid placement and set the edges of its grid area.

The *Grid Area* consists of four constituent properties.
- grid-row-start
- grid-column-start
- grid-row-end
- grid-column-end

**Example:**
~~~Class
.item1 {
background-color: blue;
grid-area = 2 / 1 / auto /span 3
}
~~~

The grid area for item1 will start in row 2 column 1 and will end after a span of 3 columns.

For more detail on the *Grid Area* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area).