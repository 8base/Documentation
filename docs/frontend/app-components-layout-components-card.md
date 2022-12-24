---
id: 'app-components-layout-components-card'
sidebar_label: 'Card'
slug: '/frontend/app-components/layout-components/card'
---

# Card
The *Card* component is a surface that displays content and actions for a single topic. 

Cards can contain text, media, and UI controls, and are used to display complex or detailed information.

### Style Attributes
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>raised</td><td>bool</td><td>false</td><td>If true, the card uses a raised style.</td></tr>
</tbody>
</table>

## Subcomponents
The *Card* component consists several subcomponents that define various aspects of a card's content.

### Header (CardHeader)
The *Header* component provides an area on the card to display a title and subheading.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>title</td><td>node</td><td></td><td>Defines the title of a card.</td></tr>
<tr><td>subheader</td><td>node</td><td></td><td>Defines the subheading of a card.</td></tr>
</tbody>
</table>

### Content (CardContent)
The *Content* component is the area of the card where content is displayed.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>padding</td><td>string</td><td></td><td>The padding space around the card content.</td></tr>
<tr><td>margin</td><td>string</td><td></td><td>The margin space around the card content.</td></tr>
</tbody>
</table>

### Media (CardMedia)
The *Media* component displays media elements for the card.

#### Properties
<table>
<thead>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>title</td><td>string</td><td></td><td>Defines the title of a media element.</td></tr>
<tr><td>image</td><td>string</td><td></td><td>The image  to be displayed as a background image.</td></tr>
<tr><td>height</td><td>string</td><td></td><td>The height of the background image in pixels; if missing the image will not display.</td></tr>
</tbody>
</table>

For more detail on the *Card* component, see the [MUI developer docs](https://mui.com/material-ui/api/card/).