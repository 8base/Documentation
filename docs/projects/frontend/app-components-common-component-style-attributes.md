---
id: 'app-components-common-component-style-attributes'
sidebar_label: 'Common Component Style Attributes'
redirect_from: '/frontend/app-components/common-component-style-attributes'
slug: '/projects/frontend/app-components/common-component-style-attributes'
---

# Common Component Style Attributes

The style attributes listed in this section are common to **all components**. Style attributes that are unique to a component are listed as part of the component's documentation.

<table>
<thead>
<tr><th colspan="4">Common Style Attributes</th></tr>
</thead>
<tbody>
<tr><td><a href="#align">Align</a></td><td><a href="#direction">Direction</a></td><td><a href="#grid-row">Grid Row</a></td><td><a href="#max-height">Max Height</a></td></tr>
<tr><td><a href="#align-content">Align Content</a></td><td><a href="#display">Display</a></td><td><a href="#grid-rowend">Grid Row End</a></td><td><a href="#max-width">Max Width</a></td></tr>
<tr><td><a href="#align-items">Align Items</a></td><td><a href="#flex-basis">Flex Basis</a></td><td><a href="#grid-rowgap">Grid Row Gap</a></td><td><a href="#min-height">Min Height</a></td></tr>
<tr><td><a href="#align-self">Align Self</a></td><td><a href="#flex-grow">Flex Grow</a></td><td><a href="#grid-rowstart">Grid Row Start</a></td><td><a href="#min-width">Min Width</a></td></tr>
<tr><td><a href="#background-color">Background Color</a></td><td><a href="#flex-shrink">Flex Shrink</a></td><td><a href="#grid-template">Grid Template</a></td><td><a href="#overflow">Overflow</a></td></tr>
<tr><td><a href="#background-source">Background Source</a></td><td><a href="#font">Font</a></td><td><a href="#grid-templateareas">Grid Template Areas</a></td><td><a href="#place-content">Place Content</a></td></tr>
<tr><td><a href="#border-color">Border Color</a></td><td><a href="#grid-area">Grid Area</a></td><td><a href="#grid-templatecolumns">Grid Template Columns</a></td><td><a href="#place-items">Place Items</a></td></tr>
<tr><td><a href="#border-radius">Border Radius</a></td><td><a href="#grid-autocolumns">Grid Auto Columns</a></td><td><a href="#grid-templaterows">Grid Template Rows</a> </td><td><a href="#place-self">Place Self</a></td></tr>
<tr><td><a href="#border-width">Border Width</a></td><td><a href="#grid-autoflow">Grid Auto Flow</a></td><td><a href="#height">Height</a></td><td><a href="#size">Size</a></td></tr>
<tr><td><a href="#breaking">Breaking</a></td><td><a href="#grid-autorows">Grid Auto Rows</a></td><td><a href="#italicize">Italicize</a></td><td><a href="#spacing-margin">Spacing-Margin</a></td></tr>
<tr><td><a href="#capitalize">Capitalize</a></td><td><a href="#grid-column">Grid Column</a></td><td><a href="#justify">Justify</a></td><td><a href="#spacing-padding">Spacing-Padding</a></td></tr>
<tr><td><a href="#child">Children</a></td><td><a href="#grid-columngap">Grid Column Gap</a></td><td><a href="#justify-content">Justify Content</a></td><td><a href="#text-align">Text Align</a></td></tr>
<tr><td><a href="#color">Color</a></td><td><a href="#grid-columnend">Grid Column End</a></td><td><a href="#justify-items">Justify Items</a></td><td><a href="#weight">Weight</a></td></tr>
<tr><td><a href="#cursor">Cursor</a> </td><td><a href="#grid-columnstart">Grid Column Start</a></td><td><a href="#justify-self">Justify Self</a></td><td><a href="#width">Width</a></td></tr>
<tr><td><a href="#decoration">Decoration</a></td><td><a href="#grid-gap">Grid Gap</a></td><td><a href="#line-height">Line Height</a></td><td>&nbsp;</td></tr>
</tbody>
</table>

<br/>

### <a id="align">Align</a>

The _Align_ style attribute is available when the layout display selected is Flex. It sets the align-self value on all direct children as a group, and the alignment is along the Cross Axis.

**Type:** Flex start, Flex end, Center, Stretch and Baseline.

For more detail on the _Align_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).

### <a id="align-content">Align Content</a>

The _Align Content_ style attribute is available when the layout display selected is Grid. It sets distribution space between and around items along the Block Axis.

**Type:** Start, Center, End, Stretch, Space between, Space around, and Space evenly.

For more detail on the _Align Content_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).

### <a id="align-items">Align Items</a>

The _Align Items_ style attribute is available when the layout display selected is Grid. It sets the align-self value on all direct children as a group, and the alignment is along the Block Axis.

**Type:** Start, Center, End, and Stretch.

For more detail on the _Align Items_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).

### <a id="align-self">Align Self</a>

The _Align Self_ style attribute overrides the align-items value of a Flex or Grid item. In a Grid, the item is aligned inside the grid area and in Flex, along the cross axis.

**Type:** Start, Center, End, and Stretch.

For more detail on the _Align Self_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self).

### <a id="background-color">Background Color</a>

The _Background Color_ style attribute sets the background color of a component.

**Type:** Hex: `#FFFFFF` or RGB: 104, 37, 37

For more detail on the _Background Color_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color).

### <a id="background-source">Background Source</a>

The _Background Source_ style attribute sets the background image on a component.

For more detail on the _Background Source_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image).

### <a id="border-color">Border Color</a>

The _Border Color_ style attribute sets the border color of a component.

**Type:** Hex: `#FFFFFF` or RGB: 104, 37, 37.

For more detail on the _Border Color_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color).

### <a id="border-radius">Border Radius</a>

The _Border Radius_ style attribute rounds the corners of a component's outer border edge.

The border radius uses one, two, three or four values; these can be in pixels or percentages.

**Example:**

- border-radius: 50%;
- border-radius: 40px 10px;
- border-radius: 10px 100px/120px;
- border-radius: 10px 30px 20px 25px;

The border radius also has four constituent properties.

- border-top-left-radius - rounds the top left corner of an element
- border-top-right-radius - rounds the top right corner of an element
- border -bottom-left-radius - rounds the bottom left corner of the element
- border-bottom-right-radius - rounds the bottom right radius of an element

A border radius constituent requires two values, if in pixels or a single percentage value.

**Example:**

- border-top-left-radius: 80px 80px;
- border-top-left-radius: 50%;

For more detail on the _Border Radius_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius).

### <a id="border-width">Border Width</a>

The _Border Width_ style attribute sets the width, in pixels, of a component's border.

For more detail on the _Border Width_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width).

### <a id="breadking">Breaking</a>

The _Breaking_ style attribute controls the white-space within lines of text in a component.

**Type:** Normal, No Wrap, Pre, Pre Wrap, and Break Spaces.

- Normal - text will wrap onto a new line when needed. Extra spaces and tabs will collapse.
- No Wrap - text will display on a single line and not wrap to a new line. Extra spaces and tabs will collapse.
- Pre - text will wrap to a new line on line breaks. Extra spaces and tabs will not collapse.
- Pre Wrap - text will wrap to a new line when necessary and on any line breaks. Extra spaces and tabs will not collapse.
- Break Spaces - text will wrap to a new line when necessary and on any line breaks or spaces. Extra spaces and tabs will not collapse.

### <a id="capitalize">Capitalize</a>

The _Capitalize_ style attribute controls how text input is automatically capitalized as it is entered by the user.

**Type:** Uppercase, Capitalize, and Lowercase.

For more detail on the _Capitalize_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize).

### <a id="child">Children</a>

The _Children_ style attribute sets whether flex items are forced onto a single line or can wrap across multiple lines. If wrapping is allowed, its sets the direction that lines are stacked.

The _Display_ value must be Flex.

**Type:** NoWrap, Wrap, and Reverse.

For more detail on the _Children_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap).

### <a id="color">Color</a>

The _Color_ style attribute sets the foreground color of a component's text and text decorations.

**Type:** Hex: `#FFFFFF` or RGB: 104, 37, 37.

For more detail on the _Color_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/color).

### <a id="cursor">Cursor</a>

The _Cursor_ style attribute sets the mouse cursor to show when the mouse pointer is over a component.

For more detail on the _Cursor_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor).

### <a id="decoration">Decoration</a>

The _Decoration_ style attribute sets the appearance of decorative lines on text.

**Type:** Line through, Underline, and Overline.

For more detail on the _Decoration_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/decoration).

### <a id="direction">Direction</a>

The _Direction_ style attribute sets the direction of text, table columns, and horizontal overflow.

**Type:** rtl - right to left, ltr - left to right.

For more detail on the _Direction_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/direction).

### <a id="display">Display</a>

The _Display_ style attribute defines whether a component is considered a block or inline type and the layout of its children.

**Type:** Block, Flex, Grid, Inline-block, Inline, and Hidden.

For more detail on the _Display_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/display).

### <a id="flex-basis">Flex Basis</a>

The _Flex Basis_ style attribute sets the initial size of a flex item.

For more detail on the _Flex Basis_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis).

### <a id="flex-grow">Flex Grow</a>

The _Flex Grow_ style attribute sets the grow factor of a flex item's main size.

For more detail on the _Flex Grow_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow).

### <a id="flex-shrink">Flex Shrink</a>

The _Flex Shrink_ style attribute sets the shrink factor of a flex item. If the combined size of all flex items is larger than the container, items will shrink according to their flex shrink value.

For more detail on the _Flex Shrink_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink).

### <a id="font">Font</a>

The _Font_ style attribute sets the font family of a component's font.

For more detail on the _Font_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face).

### <a id="grid-area">Grid Area</a>

The _Grid Area_ style attribute specifies a grid item's size and location within a grid. Grid lines, spans or the auto setting define an item's grid placement and set the edges of its grid area.

The _Grid Area_ consists of four constituent properties.

- grid-row-start
- grid-column-start
- grid-row-end
- grid-column-end

**Example:**

```Class
.item1 {
background-color: blue;
grid-area = 2 / 1 / auto /span 3
}
```

The grid area for item1 will start in row 2 column 1 and will end after a span of 3 columns.

For more detail on the _Grid Area_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area).

### <a id="grid-autocolumns">Grid Auto Columns</a>

The _Grid Auto Columns_ style attribute specifies the size of an implicitly created grid column track.

For more detail on the _Grid Auto Columns_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns).

### <a id="grid-autoflow">Grid Auto Flow</a>

The _Grid Auto Flow_ style attribute controls how the auto-placement algorithm works and specifies how auto-placed items get flowed into the grid.

For more detail on the _Grid Auto Flow_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow).

### <a id="grid-autorows">Grid Auto Rows</a>

The _Grid Auto Rows_ style attribute specifies the size of an implicitly created grid row track.

For more detail on the _Grid Auto Rows_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows).

### <a id="grid-column">Grid Column</a>

The _Grid Column_ style attribute specifies a grid item's size and location within a grid column. Grid lines, spans or the auto setting define an item's grid placement and set the inline-start and inline-end edge of its grid area.

For more detail on the _Grid Column_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column).

### <a id="grid-columngap">Grid Column Gap</a>

The _Grid Column Gap_ style attribute sets the size of the gap (gutter) between a component's columns.

For more detail on the _Grid Column Gap_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap).

### <a id="grid-columnend">Grid Column End</a>

The _Grid Column End_ style attribute specifies a grid item's end position within a grid column. Grid lines, spans or the auto setting define an item's grid placement and set the block-end edge of its grid area.

For more detail on the _Grid Column End_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end).

### <a id="grid-columnstart">Grid Column Start</a>

The _Grid Column Start_ style attribute specifies a grid item's start position within a grid column. Grid lines, spans or the auto setting define an item's grid placement and set the block-start edge of its grid area.

For more detail on the _Grid Column Start_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start).

### <a id="grid-gap">Grid Gap</a>

The _Grid Gap_ style attribute sets the size of the gaps (gutters) between rows and columns.

For more detail on the _Grid Gap_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).

### <a id="grid-row">Grid Row</a>

The _Grid Row_ style attribute specifies a grid item's size and location within a grid row. Grid lines, spans or the auto setting define an item's grid placement and set the inline-start and inline-end edge of its grid area.

For more detail on the _Grid Row_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row).

### <a id="grid-rowend">Grid Row End</a>

The _Grid Row End_ style attribute specifies a grid item's end position within a grid row. Grid lines, spans or the auto setting define an item's grid placement and set the inline-end edge of its grid area.

For more detail on the _Grid Row End_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end).

### <a id="grid-rowgap">Grid Row Gap</a>

The _Grid Row Gap_ style attribute sets the size of the gap (gutter) between a component's rows.

For more detail on the _Grid Row Gap_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap).

### <a id="grid-rowstart">Grid Row Start</a>

The _Grid Row Start_ style attribute specifies a grid item's start position within a grid row. Grid lines, spans or the auto setting define an item's grid placement and set the inline-start edge of its grid area.

For more detail on the _Grid Row Start_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start).

### <a id="grid-template">Grid Template</a>

The _Grid Template_ style attribute is a shorthand attribute to define the grid template columns, grid template rows, and grid template areas.

For more detail on the _Grid Template_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template).

### <a id="grid-templateareas">Grid Template Areas</a>

The _Grid Template Areas_ style attribute specifies named grid areas, establishing the grid cells and assigning them names.

For more detail on the _Grid Template Areas_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas).

### <a id="grid-templatecolumns">Grid Template Columns</a>

The _Grid Template Columns_ style attribute defines the line names and track sizing functions of the grid columns.

For more detail on the _Grid Template Columns_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns).

### <a id="grid-templaterows">Grid Template Rows</a>

The _Grid Template Rows_ style attribute defines the line names and track sizing functions of the grid rows.

For more detail on the _Grid Template Rows_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows).

### <a id="height">Height</a>

The _Height_ style attribute sets the height of a component. By default, it defines the height of the content area unless box-sizing is border box, then it determines the height of the border area.

For more detail on the _Height_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/height).

### <a id="italicize">Italicize</a>

The _Italicize_ style attribute sets the font style of the font.

**_Type:_** Normal and Italic.

For more detail on the _Italicize_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style).

### <a id="justify">Justify</a>

The _Justify_ style attribute is available when the layout display selected is Flex. It defines the justify-self value on all items within a container and justifies all items as a group.

**Type:** Flex start, Flex end, Center, Space between and Space around.

For more detail on the _Justify_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items).

### <a id="justify-content">Justify Content</a>

The _Justify Content_ style attribute is available when the layout display selected is Grid. It defines the spatial distribution between and around items along the inline axis of a grid container.

**Type:** Start, Center, End, Stretch, Space between, Space around, and Space evenly.

For more detail on the _Justify Content_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).

### <a id="justify-items">Justify Items</a>

The _Justify Items_ style attribute is available when the layout display selected is Grid. It defines the justify-self value on all items within a container and justifies each item along the appropriate axis.

**Type:** Start, Center, End, and Stretch.

For more detail on the _Justify Items_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items).

### <a id="justify-self">Justify Self</a>

The _Justify Self_ style attribute is available when the layout display selected is Flex or Grid. It defines the justification of an item inside its container along the appropriate axis.

**Type:** Start, Center, End, Space between, Space around, and Space evenly.

For more detail on the _Justify Self_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self).

### <a id="line-height">Line Height</a>

The _Line Height_ style attribute sets the height of a line box, which defines the distance between lines of text in a paragraph.

For more detail on the _Line Height_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height).

### <a id="max-height">Max Height</a>

The _Max-Height_ style attribute sets the maximum height of a component. It prevents the height value from becoming larger than the max-height value.

For more detail on the _Max-Height_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height).

### <a id="max-width">Max Width</a>

The _Max-Width_ style attribute sets the maximum width of a component. It prevents the width value from becoming larger than the max-width value.

For more detail on the _Max-Width_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width).

### <a id="min-height">Min Height</a>

The _Min-Height_ style attribute sets the minimum height of a component. It prevents the height value from becoming smaller than the min-height value.

For more detail on the _Min-Height_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height).

### <a id="min-width">Min Width</a>

The _Min-Width_ style attribute sets the minimum width of a component. It prevents the width value from becoming smaller than the min-width value.

For more detail on the _Min-Width_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width).

### <a id="overflow">Overflow</a>

The _Overflow_ style attribute sets the desired behavior of a component's overflow when the content is too big to fit its formatting context.

**Type:** Visible, Hidden, Scroll, and Auto.

For more detail on the _Overflow_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow).

### <a id="place-content">Place Content</a>

The _Place Content_ style attribute allows you to align content along the block and inline directions simultaneously when the _Display_ value is Grid.

For more detail on the _Place Content_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/place-content).

### <a id="place-items">Place Items</a>

The _Place Items_ style attribute allows you to align items along the block and inline directions simultaneously when the _Display_ value is Grid.

For more detail on the _Place Items_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items).

### <a id="place-self">Place Self</a>

The _Place Self_ style attribute allows you to align an individual item along the block and inline directions simultaneously.

For more detail on the _Place Self_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/place-self).

### <a id="size">Size</a>

The *Size* style attribute sets the size (font size) of the font. The value is one of absolute size, relative size, or length.

**Example**

- Absolute - small, medium, large
- Relative - smaller, larger
- Length - 20em

For more detail on the _Size_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size).

### <a id="spacing-margin">Spacing-Margin</a>

The _Spacing-Margin_ style attribute sets the margin on all four sides of a component. All four values can be set at once or constituent values can be set individually.

**Example:**

1. margin: 10px 50px 30px 5px;
2. margin-top: 10px;
3. margin-bottom: 30px;
4. margin-left: 5px;
5. margin-right: 50px;

For more detail on the _Spacing-Margin_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin).

### <a id="spacing-padding">Spacing-Padding</a>

The _Spacing-Padding_ style attribute sets the padding on all four sides of an component. All four values can be set at once or constituent values can be set individually.

**Example:**

1. padding: 10px 50px 30px 5px;
2. padding-top: 10px;
3. padding-bottom: 30px;
4. padding-left: 5px;
5. padding-right: 50px;

For more detail on the _Spacing-Padding_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding).

### <a id="tex-align">Text Align</a>

The _Text Align_ style attribute sets the horizontal alignment of the inline-level content of a block or table-box component.

**Type:** Left, Center, Right, and Justify.

For more detail on the _Text Align_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align).

### <a id="weight">Weight</a>

The _Weight_ style attribute sets the weight or boldness of a text component. The values available will depend on the current font (font family) setting.

For more detail on the _Weight_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/weight).

### <a id="width">Width</a>

The _Width_ style attribute sets the width of a component. By default, it defines the width of the content area unless box-sizing is border box, then it determines the width of the border area.

For more detail on the _Width_ style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/width).
