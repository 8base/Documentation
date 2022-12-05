---
id: 'app-components-common-component-style-attributes'
sidebar_label: 'Common Component Style Attributes'
slug: '/frontend/app-components/common-component-style-attributes'
---
# Common Component Style Attributes
The style attributes listed in this section are common to **all components**. Style attributes that are unique to a component are listed as part of the component's documentation.

| Attributes A-F                                     | Attributes G-I                                            | Attributes J-W                                 |
| :------------------------------------------------- | :-------------------------------------------------------- | :--------------------------------------------- |
| <a href="#align">Align</a>                         | <a href="#grid-area">Grid Area</a>                        | <a href="#justify">Justify</a>                 |
| <a href="#align-content">Align Content</a>         | <a href="#grid-autocolumns">Grid Auto Columns</a>         | <a href="#justify-content">Justify Content</a> |
| <a href="#align-items">Align Items</a>             | <a href="#grid-autoflow">Grid Auto Flow</a>               | <a href="#justify-items">Justify Items</a>     |
| <a href="#align-self">Align Self</a>               | <a href="#grid-autorows">Grid Auto Rows</a>               | <a href="#justify-self">Justify Self</a>       |
| <a href="#background-color">Background Color</a>   | <a href="#grid-column">Grid Column</a>                    | <a href="#line-height">Line Height</a>         |
| <a href="#background-source">Background Source</a> | <a href="#grid-columngap">Grid Column Gap</a>             | <a href="#max-height">Max Height</a>           |
| <a href="#border-color">Border Color</a>           | <a href="#grid-columnend">Grid Column End</a>             | <a href="#max-width">Max Width</a>             |
| <a href="#border-radius">Border Radius</a>         | <a href="#grid-columnstart">Grid Column Start</a>         | <a href="#min-height">Min Height</a>           |
| <a href="#border-width">Border Width</a>           | <a href="#grid-gap">Grid Gap</a>                          | <a href="#min-width">Min Width</a>             |
| <a href="#breaking">Breaking</a>                   | <a href="#grid-row">Grid Row</a>                          | <a href="#overflow">Overflow</a>               |
| <a href="#capitalize">Capitalize</a>               | <a href="#grid-rowend">Grid Row End</a>                   | <a href="#place-content">Place Content</a>     |
| <a href="#child">Children</a>                      | <a href="#grid-rowgap">Grid Row Gap</a>                   | <a href="#place-items">Place Items</a>         |
| <a href="#color">Color</a>                         | <a href="#grid-rowstart">Grid Row Start</a>               | <a href="#place-self">Place Self</a>           |
| <a href="#cursor">Cursor</a>                       | <a href="#grid-template">Grid Template</a>                | <a href="#size">Size</a>                       |
| <a href="#decoration">Decoration</a>               | <a href="#grid-templateareas">Grid Template Areas</a>     | <a href="#spacing-margin">Spacing-Margin</a>   |
| <a href="#direction">Direction</a>                 | <a href="#grid-templatecolumns">Grid Template Columns</a> | <a href="#spacing-padding">Spacing-Padding</a> |
| <a href="#display">Display</a>                     | <a href="#grid-templaterows">Grid Template Rows</a>       | <a href="#text-align">Text Align</a>           |
| <a href="#flex-basis">Flex Basis</a>               | <a href="#height">Height</a>                              | <a href="#weight">Weight</a>                   |
| <a href="#flex-grow">Flex Grow</a>                 | <a href="#italicize">Italicize</a>                        | <a href="#width">Width</a>                     |
| <a href="#flex-shrink">Flex Shrink</a>             | &nbsp;                                                    | &nbsp;                                         |
| <a href="#font">Font</a>                           | &nbsp;                                                    | &nbsp;                                         |

<br/>

## <a id="align">Align</a>
The *Align* style attribute is available when the layout display selected is Flex. It sets the align-self value on all direct children as a group, and the alignment is along the Cross Axis.

**Values:** Flex start, Flex end, Center, Stretch and Baseline.

For more detail on the *Align* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).

## <a id="align-content">Align Content</a>
The *Align Content* style attribute is available when the layout display selected is Grid. It sets distribution space between and around items along the Block Axis.

**Values:** Start, Center, End, Stretch, Space between, Space around, and Space evenly.

For more detail on the *Align Content* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).

## <a id="align-items">Align Items</a>
The *Align Items* style attribute is available when the layout display selected is Grid. It sets the align-self value on all direct children as a group, and the alignment is along the Block Axis.

**Values:** Start, Center, End, and Stretch.

For more detail on the *Align Items* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).

## <a id="align-self">Align Self</a>
The *Align Self* style attribute overrides the align-items value of a Flex or Grid item. In a Grid, the item is aligned inside the grid area and in Flex, along the cross axis.

**Values:** Start, Center, End, and Stretch.

For more detail on the *Align Self* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self).

## <a id="background-color">Background Color</a>
The *Background Color* style attribute sets the background color of a component. 

**Values:** Hex: `#FFFFFF` or RGB: 104, 37, 37
 
For more detail on the *Background Color* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color).

## <a id="background-source">Background Source</a>
The *Background Source* style attribute sets the background image on a component. 
 
For more detail on the *Background Source* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image).

## <a id="border-color">Border Color</a>
The *Border Color* style attribute sets the border color of a component. 

**Values:** Hex: `#FFFFFF` or RGB: 104, 37, 37.
 
For more detail on the *Border Color* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color).

## <a id="border-radius">Border Radius</a>
The *Border Radius* style attribute rounds the corners of a component's outer border edge. 

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

For more detail on the *Border Radius* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius).

## <a id="border-width">Border Width</a>
The *Border Width* style attribute sets the width, in pixels, of a component's border.

For more detail on the *Border Width* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width).

## <a id="breadking">Breaking</a>
The *Breaking* style attribute controls the white-space within lines of text in a component.

**Values:** Normal, No Wrap, Pre, Pre Wrap, and Break Spaces.

- Normal - text will wrap onto a new line when needed. Extra spaces and tabs will collapse.
- No Wrap -  text will display on a single line and not wrap to a new line. Extra spaces and tabs will collapse.
- Pre - text will wrap to a new line on line breaks. Extra spaces and tabs will not collapse.
- Pre Wrap - text will wrap to a new line when necessary and on any line breaks. Extra spaces and tabs will not collapse.
- Break Spaces - text will wrap to a new line when necessary and on any line breaks or spaces. Extra spaces and tabs will not collapse.

## <a id="capitalize">Capitalize</a>
The *Capitalize* style attribute controls how text input is automatically capitalized as it is entered by the user.

**Values:** Uppercase, Capitalize, and Lowercase.

For more detail on the *Capitalize* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize).

## <a id="child">Children</a>
The *Children* style attribute sets whether flex items are forced onto a single line or can wrap across multiple lines. If wrapping is allowed, its sets the direction that lines are stacked. 

The *Display* value must be Flex.

**Values:** NoWrap, Wrap, and Reverse.

For more detail on the *Children* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap).

## <a id="color">Color</a>
The *Color* style attribute sets the foreground color of a component's text and text decorations.

**Values:** Hex: `#FFFFFF` or RGB: 104, 37, 37. 

For more detail on the *Color* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/color).

## <a id="cursor">Cursor</a>
The *Cursor* style attribute sets the mouse cursor to show when the mouse pointer is over a component.

For more detail on the *Cursor* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor).

## <a id="decoration">Decoration</a>
The *Decoration* style attribute sets the appearance of decorative lines on text.

**Values:** Line through, Underline, and Overline.

For more detail on the *Decoration* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/decoration).

## <a id="direction">Direction</a>
The *Direction* style attribute sets the direction of text, table columns, and horizontal overflow.

**Values:** rtl - right to left, ltr - left to right.

For more detail on the *Direction* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/direction).

## <a id="display">Display</a>
The *Display* style attribute defines whether a component is considered a block or inline type and the layout of its children.

**Values:** Block, Flex, Grid, Inline-block, Inline, and Hidden.

For more detail on the *Display* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/display).

## <a id="flex-basis">Flex Basis</a>
The *Flex Basis* style attribute sets the initial size of a flex item.

For more detail on the *Flex Basis* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis).

## <a id="flex-grow">Flex Grow</a>
The *Flex Grow* style attribute sets the grow factor of a flex item's main size.

For more detail on the *Flex Grow* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow).

## <a id="flex-shrink">Flex Shrink</a>
The *Flex Shrink* style attribute sets the shrink factor of a flex item. If the combined size of all flex items is larger than the container, items will shrink according to their flex shrink value.

For more detail on the *Flex Shrink* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink).

## <a id="font">Font</a>
The *Font* style attribute sets the font family of a component's font.

For more detail on the *Font* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face).

## <a id="grid-area">Grid Area</a>
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

## <a id="grid-autocolumns">Grid Auto Columns</a>
The *Grid Auto Columns* style attribute specifies the size of an implicitly created grid column track.

For more detail on the *Grid Auto Columns* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns).

## <a id="grid-autoflow">Grid Auto Flow</a>
The *Grid Auto Flow* style attribute controls how the auto-placement algorithm works and specifies how auto-placed items get flowed into the grid.

For more detail on the *Grid Auto Flow* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow).

## <a id="grid-autorows">Grid Auto Rows</a>
The *Grid Auto Rows* style attribute specifies the size of an implicitly created grid row track.

For more detail on the *Grid Auto Rows* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows).

## <a id="grid-column">Grid Column</a>
The *Grid Column* style attribute specifies a grid item's size and location within a grid column. Grid lines, spans or the auto setting define an item's grid placement and set the inline-start and inline-end edge of its grid area.

For more detail on the *Grid Column* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column).

## <a id="grid-columngap">Grid Column Gap</a>
The *Grid Column Gap* style attribute sets the size of the gap (gutter) between a component's columns. 

For more detail on the *Grid Column Gap* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap).

## <a id="grid-columnend">Grid Column End</a>
The *Grid Column End* style attribute specifies a grid item's end position within a grid column. Grid lines, spans or the auto setting define an item's grid placement and set the block-end edge of its grid area.

For more detail on the *Grid Column End* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end).

## <a id="grid-columnstart">Grid Column Start</a>
The *Grid Column Start* style attribute specifies a grid item's start position within a grid column. Grid lines, spans or the auto setting define an item's grid placement and set the block-start edge of its grid area.

For more detail on the *Grid Column Start* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start).

## <a id="grid-gap">Grid Gap</a>
The *Grid Gap* style attribute sets the size of the gaps (gutters) between rows and columns. 

For more detail on the *Grid Gap* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).

## <a id="grid-row">Grid Row</a>
The *Grid Row* style attribute specifies a grid item's size and location within a grid row. Grid lines, spans or the auto setting define an item's grid placement and set the inline-start and inline-end edge of its grid area.

For more detail on the *Grid Row* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row).

## <a id="grid-rowend">Grid Row End</a>
The *Grid Row End* style attribute specifies a grid item's end position within a grid row. Grid lines, spans or the auto setting define an item's grid placement and set the inline-end edge of its grid area.

For more detail on the *Grid Row End* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end).

## <a id="grid-rowgap">Grid Row Gap</a>
The *Grid Row Gap* style attribute sets the size of the gap (gutter) between a component's rows. 

For more detail on the *Grid Row Gap* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap).

## <a id="grid-rowstart">Grid Row Start</a>
The *Grid Row Start* style attribute specifies a grid item's start position within a grid row. Grid lines, spans or the auto setting define an item's grid placement and set the inline-start edge of its grid area.

For more detail on the *Grid Row Start* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start).

## <a id="grid-template">Grid Template</a>
The *Grid Template* style attribute is a shorthand attribute to define the grid template columns, grid template rows, and grid template areas. 

For more detail on the *Grid Template* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template).

## <a id="grid-templateareas">Grid Template Areas</a>
The *Grid Template Areas* style attribute specifies named grid areas, establishing the grid cells and assigning them names. 

For more detail on the *Grid Template Areas* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas).

## <a id="grid-templatecolumns">Grid Template Columns</a>
The *Grid Template Columns* style attribute defines the line names and track sizing functions of the grid columns. 

For more detail on the *Grid Template Columns* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns).

## <a id="grid-templaterows">Grid Template Rows</a>
The *Grid Template Rows* style attribute defines the line names and track sizing functions of the grid rows. 

For more detail on the *Grid Template Rows* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows).

## <a id="height">Height</a>
The *Height* style attribute sets the height of a component. By default, it defines the height of the content area unless box-sizing is border box, then it determines the height of the border area.

For more detail on the *Height* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/height).

## <a id="italicize">Italicize</a>
The *Italicize* style attribute sets the font style of the font.

***Values:*** Normal and Italic.

For more detail on the *Italicize* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style).

## <a id="justify">Justify</a>
The *Justify* style attribute is available when the layout display selected is Flex. It defines the justify-self value on all items within a container and justifies all items as a group.

**Values:** Flex start, Flex end, Center, Space between and Space around.

For more detail on the *Justify* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items).

## <a id="justify-content">Justify Content</a>
The *Justify Content* style attribute is available when the layout display selected is Grid. It defines the spatial distribution between and around items along the inline axis of a grid container.

**Values:** Start, Center, End, Stretch, Space between, Space around, and Space evenly.

For more detail on the *Justify Content* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).

## <a id="justify-items">Justify Items</a>
The *Justify Items* style attribute is available when the layout display selected is Grid. It defines the justify-self value on all items within a container and justifies each item along the appropriate axis.

**Values:** Start, Center, End, and Stretch.

For more detail on the *Justify Items* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items).

## <a id="justify-self">Justify Self</a>
The *Justify Self* style attribute is available when the layout display selected is Flex or Grid. It defines the justification of an item inside its container along the appropriate axis.

**Values:** Start, Center, End, Space between, Space around, and Space evenly.

For more detail on the *Justify Self* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self).

## <a id="line-height">Line Height</a>
The *Line Height* style attribute sets the height of a line box, which defines the distance between lines of text in a paragraph.

For more detail on the *Line Height* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height).

## <a id="max-height">Max Height</a>
The *Max-Height* style attribute sets the maximum height of a component. It prevents the height value from becoming larger than the max-height value.

For more detail on the *Max-Height* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height).

## <a id="max-width">Max Width</a>
The *Max-Width* style attribute sets the maximum width of a component. It prevents the width value from becoming larger than the max-width value.

For more detail on the *Max-Width* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width).

## <a id="min-height">Min Height</a>
The *Min-Height* style attribute sets the minimum height of a component. It prevents the height value from becoming smaller than the min-height value.

For more detail on the *Min-Height* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height).

## <a id="min-width">Min Width</a>
The *Min-Width* style attribute sets the minimum width of a component. It prevents the width value from becoming smaller than the min-width value.

For more detail on the *Min-Width* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width).

## <a id="overflow">Overflow</a>
The *Overflow* style attribute sets the desired behavior of a component's overflow when the content is too big to fit its formatting context.

**Values:** Visible, Hidden, Scroll, and Auto. 

For more detail on the *Overflow* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow).

## <a id="place-content">Place Content</a>
The *Place Content* style attribute allows you to align content along the block and inline directions simultaneously when the *Display* value is Grid.

For more detail on the *Place Content* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/place-content).

## <a id="place-items">Place Items</a>
The *Place Items* style attribute allows you to align items along the block and inline directions simultaneously when the *Display* value is Grid.

For more detail on the *Place Items* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items).

## <a id="place-self">Place Self</a>
The *Place Self* style attribute allows you to align an individual item along the block and inline directions simultaneously.

For more detail on the *Place Self* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/place-self).

## <a id="size">Size</a>
The *Size* style attribute sets the size (font-size) of the font.

For more detail on the *Size* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size).

## <a id="spacing-margin">Spacing-Margin</a>
The *Spacing-Margin* style attribute sets the margin on all four sides of a component. All four values can be set at once or constituent values can be set individually.

**Example:**
1. margin: 10px 50px 30px 5px;
2. margin-top: 10px;
3. margin-bottom: 30px;
4. margin-left: 5px;
5. margin-right: 50px;

For more detail on the *Spacing-Margin* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin).

## <a id="spacing-padding">Spacing-Padding</a>
The *Spacing-Padding* style attribute sets the padding on all four sides of an component. All four values can be set at once or constituent values can be set individually.

**Example:**
1. padding: 10px 50px 30px 5px;
2. padding-top: 10px;
3. padding-bottom: 30px;
4. padding-left: 5px;
5. padding-right: 50px;

For more detail on the *Spacing-Padding* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding).

## <a id="tex-align">Text Align</a>
The *Text Align* style attribute sets the horizontal alignment of the inline-level content of a block or table-box component.

**Values:** Left, Center, Right, and Justify.

For more detail on the *Text Align* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align).

## <a id="weight">Weight</a>
The *Weight* style attribute sets the weight or boldness of a text component. The values available will depend on the current font (font family) setting. 

For more detail on the *Weight* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/weight).

## <a id="width">Width</a>
The *Width* style attribute sets the width of a component. By default, it defines the width of the content area unless box-sizing is border box, then it determines the width of the border area.

For more detail on the *Width* style attribute, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/CSS/width).














