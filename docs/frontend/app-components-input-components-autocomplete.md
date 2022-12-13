---
id: 'app-components-input-components-autocomplete'
sidebar_label: 'Autocomplete'
slug: '/frontend/app-components/input-components/autocomplete'
---

# Autocomplete
The *Autocomplete* component is a single-line textbox component that is useful in two scenarios:

1. As a **combo-box** - a value is chosen from a predefined set of options such as a country list.
2. As a **free-solo** - the textbox may contain an arbitrary value, but it saves the user time by suggesting values. An example is Google Search, where a completion string appears inline after the input cursor.

The *Autocomplete* component is used independently or as a form component. To use it as a form component, place it within a *Form Block*.

### Unique Properties
<table>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
<tr><td>name</td><td>string</td><td></td><td>Specifies the name of the component (form component only).</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies a default value for the component; if the value contains an array, a combo-box will support multiple selections (form component only).</td></tr>
<tr><td>label</td><td>node</td><td></td><td>Specifies a label for the component.</td></tr>
<tr><td>required</td><td>bool</td><td>false</td><td>Specifies whether a selection must be made or input must be entered.</td></tr>
<tr><td>autofocus</td><td>bool</td><td>false</td><td>Specifies whether Autofocus is enabled.</td></tr>
<tr><td>readOnly</td><td>bool</td><td>false</td><td>Specifies whether the component is Read-Only.</td></tr>
<tr><td>options</td><td>array</td><td></td><td>Defines a list of options for the component in the form of label/value pairs.</td></tr>
<tr><td>value</td><td>any</td><td></td><td>Specifies the value of the autocomplete. The value must be equal to the option to be selected.</td></tr>
<tr><td>defaultValue</td><td>any</td><td></td><td>Specifies a default value for the component (independent component only).</td></tr>
<tr><td>disabled</td><td>bool</td><td></td><td>Specifies whether the component is disabled.</td></tr>
<tr><td>getOptionLabel</td><td>func</td><td></td><td>Determines the label for a given option.</td></tr>
<tr><td>isOptionEqualToValue</td><td>func</td><td></td><td>Determines if the option selected represents a given value.</td></tr>
<tr><td>autoComplete</td><td>bool</td><td>false</td><td>If true, the completion string appears inline after the input cursor in the text box.</td></tr>
<tr><td>autoHighlight</td><td>bool</td><td>false</td><td>If true, the first option in the options list is highlighted.</td></tr>
<tr><td>autoSelect</td><td>bool</td><td>false</td><td>If true, the option selected becomes the input value when the Autocomplete loses focus.</td></tr>
<tr><td>loading</td><td>bool</td><td>false</td><td>If true, the component is in a loading state and displays the value of the loading text.</td></tr>
<tr><td>clearOnBlur</td><td>bool</td><td>false</td><td>If true, the input's text is cleared on blur if no value is selected.</td></tr>
<tr><td>clearOnEscape</td><td>bool</td><td>false</td><td>If true, clear all values when the user presses escape, and the popup is closed.</td></tr>
<tr><td>loadingText</td><td>node</td><td></td><td>The text to display when in a loading state.</td></tr>
<tr><td>noOptionsText</td><td>node</td><td></td><td>The text to display when there are no options.</td></tr>
<tr><td>openText</td><td>string</td><td></td><td>Override the default text for the open popup icon button.</td></tr>
<tr><td>open</td><td>bool</td><td>false</td><td>If true, displays the component.</td></tr>
<tr><td>openOnFocus</td><td>bool</td><td>false</td><td>If true, the popup will open on input focus.</td></tr>
<tr><td>popUpIcon</td><td>node</td><td></td><td>The icon to display to replace the default popup icon.</td></tr>
<tr><td>clearIcon</td><td>node</td><td></td><td>The icon to display in place of the clear icon.</td></tr>
<tr><td>disableClearable</td><td>bool</td><td>false</td><td>If true, the input cannot be cleared.</td></tr>
<tr><td>disableCloseOnSelect</td><td>bool</td><td>false</td><td>If true, the popup will not close when a value is selected. </td></tr>
<tr><td>disabledItemsFocusable</td><td>bool</td><td>false</td><td>If true, will allow focus on disabled items.</td></tr>
<tr><td>disableListWrap</td><td>bool</td><td>false</td><td>If true, the list box in the popup will not wrap focus.</td></tr>
<tr><td>disablePortal</td><td>bool</td><td>false</td><td>If true, the Popper content will be under the DOM hierarchy of parent component.</td></tr>
<tr><td>filterSelectedOptions</td><td>bool</td><td>false</td><td>If true, hide the selected options from the list box.</td></tr>
<tr><td>freeSolo</td><td>bool</td><td>false</td><td>If true, the user input is not bound to provided options.</td></tr>
<tr><td>filterOptions</td><td>func</td><td></td><td>Determines the filtered options to be rendered on search.</td></tr>
<tr><td>getOptionDisabled</td><td>func</td><td></td><td>Determines the disabled state for a given option.</td></tr>
<tr><td>groupBy</td><td>func</td><td></td><td>The options will be grouped under the return string.</td></tr>
<tr><td>handleHomeEndKeys</td><td>bool</td><td>false</td><td>If true, handle the "Home" and "End" keys when the popup is open and move focus, respectively.</td></tr>
<tr><td>includeInputInList</td><td>bool</td><td>false</td><td>If true, the highlight can move to the input.</td></tr>
<tr><td>ID</td><td>string</td><td></td><td>The ID is to implement accessibility logic. If empty, a random id is generated.</td></tr>
<tr><td>inputValue</td><td>string</td><td></td><td>The input value.</td></tr>
<tr><td>selectOnFocus</td><td>bool</td><td>false</td><td>If true, the input's text is selected on focus.</td></tr>
</table>

### Unique Style Attributes
<table>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
<tr><td>variant</td><td>standard<br/>outlined<br/>filled<br/>string</td><td>outlined</td><td>Defines the visual display of the component.</td></tr>
<tr><td>size</td><td>medium<br/>small<br/>string</td><td>medium</td><td>Defines the size of the component.</td></tr>
<tr><td>fullWidth</td><td>bool</td><td>false</td><td>Specifies whether the component occupies the full width of its container.</td></tr>
</table>

## Subcomponents
The *Autocomplete* component has a subcomponent that allows an icon to replace the default popup or clear icons.

### Icon
*Popup Icon* - specifies an icon to replace the default popup icon.

*Clear Icon* - specifies an icon to replace the clear icon.

For further details, see the Icon component.

#### Properties
<table>
<tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
<tr><td>color</td><td>inherit<br/>primary<br/>secondary<br/>action<br/>disabled<br/>error<br/>string</td><td>inherit</td><td>Specifies the color of the icon.</td></tr>
<tr><td>size</td><td>inherit<br/>small<br/>medium<br/>large<br/>string</td><td>small</td><td>Specifies the size of the icon.</td></tr>
<tr><td>viewBox</td><td>0 0 24 24</td><td></td><td>Defines the size of the view box that displays the icon.</td></tr>
<tr><td>fill</td><td>hex #ffffff<br/>rgb 5,5,5</td><td></td><td>The fill color of the icon.</td></tr>
<tr><td>stroke</td><td>hex #ffffff<br/>rgb 5,5,5</td><td></td><td>The stroke color of the icon.</td></tr>
</table>

For more detail on the *Autocomplete* component, see the [MUI developer docs](https://mui.com/material-ui/api/autocomplete/).