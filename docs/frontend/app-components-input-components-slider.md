---
id: 'app-components-input-components-slider'
sidebar_label: 'Slider'
slug: '/frontend/app-components/input-components/slider'
---

# Slider
The *Slider* component allows the user to select one value from a range of values along a bar. They are ideal for adjusting volume, brightness, and image filter settings.

The *Slider* component is used independently or as a form component. To use it as a form component, place it within a *Form Block*.

### Unique Properties
<table>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
<tr><td>name</td><td>string</td><td></td><td>Specifies the name of the component (form component only).</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>ariaLabel</td><td>string</td><td></td><td>Specifies a label for the slider.</td></tr>
<tr><td>ariaLabeledBy</td><td>string</td><td></td><td>Specifies the id of the element that contains the slider label.</td></tr>
<tr><td>ariaValueText</td><td>string</td><td></td><td>Specifies a string value for the current value of the slider.</td></tr>
<tr><td>value</td><td>number</td><td></td><td>Specifies the value of the slider. A ranged slider requires an array of two values.</td></tr>
<tr><td>min</td><td>number</td><td>0</td><td>Specifies the minimum value of the slider. The minimum value should not equal the maximum value.</td></tr>
<tr><td>max</td><td>number</td><td>100</td><td>Specifies the maximum value of the slider. The maximum value should not equal the minimum value.</td></tr>
<tr><td>defaultValue</td><td>any</td><td></td><td>Specifies a default value for the component.
</td></tr>
<tr><td>scale</td><td>func</td><td></td><td>Specifies a transformation function to change the scale of the slider.</td></tr>
<tr><td>step</td><td>number</td><td>1</td><td>Specifies the granularity with which the slider can step through values. The minimum prop is the origin point for valid values. If the step is *null*, the thumb will use values provided by the marks prop.</td></tr>
<tr><td>getAriaLabel</td><td>func</td><td></td><td>Accepts a function that returns a string value for the thumb labels of the slider.</td></tr>
<tr><td>getAriaValueText</td><td>func</td><td></td><td>Accepts a function that returns a string value for the current value of the slider.</td></tr>
<tr><td>classes</td><td>object</td><td></td><td>Accepts a function that returns a string value for the current value of the slider.</td></tr>
<tr><td>marks</td><td>bool</td><td>false</td><td>If true, marks will display on the slider for each unique step. Custom marks can be displayed using an array of value/label keys</td></tr>
<tr><td>disableSwap</td><td>bool</td><td>false</td><td>If true, prevents the current thumb from swapping when dragging it over another thumb.</td></tr>
<tr><td>disabled</td><td>bool</td><td>false</td><td>Specifies whether the component is disabled.</td></tr>
</table>

### Unique Style Attributes
<table>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
<tr><td>color</td><td>primary<br/>secondary<br/>error<br/>info<br/>success<br/>warning<br/>string</td><td>primary</td><td>Specifies the color of the component.</td></tr>
<tr><td>size</td><td>small<br/>medium<br/>string</td><td>medium</td><td>Specifies the size of the component.</td></tr>
<tr><td>labelPlacement</td><td>top<br/>bottom<br/>start<br/>end<br/>string</td><td>end</td><td>Specifies the placement of the component label.</td></tr>
<tr><td>track</td><td>normal<br/>inverted<br/>false<br/>string</td><td>false</td><td>Specifies how the track for the slider displays.</td></tr>
<tr><td>valueLabelDisplayed</td><td>auto<br/>on<br/>off<br/>string</td><td>off</td><td>Specifies whether the value label displays.</td></tr>
<tr><td>orientation</td><td>horizontal<br/>vertical<br/>string</td><td>horizontal</td><td>Specifies the orientation of the component.</td></tr>
<tr><td>tabIndex</td><td>number</td><td></td><td>Specifies the tab index of a hidden input element.</td></tr>
<tr><td>valueLabelFormat</td><td>func</td><td></td><td>A function to specify the format of the value label's value.</td></tr>
<tr><td>sx</td><td>array</td><td></td><td>Specifies custom CSS styles for the slider.</td></tr>
</table>

For more detail on the *Slider* component, see the [MUI developer docs](https://mui.com/material-ui/api/slider/).