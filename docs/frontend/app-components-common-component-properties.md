---
id: 'app-components-common-component-properties'
sidebar_label: 'Common Component Properties'
slug: '/frontend/app-components/common-component-properties'
---
# Common Component Properties
The properties listed in this section are common to **all components**. Properties that are unique to a component are listed as part of the component's documentation.

### Conditional Rendering
The *Conditional Rendering* property takes any valid expression and is used to render the component, and its children, if the expression evaluates to true.

### Class
A *Class* defines one or more attribute values for a component. Each attribute value is defined by a set of styles, such as the **error** example below.

```CSS
.error {
 font-weight: bold;
 color: red;
 align-content: center;
}
```

Two important points about classes.
1. A list of classes **must** contain a space between each class.
2. Classes are case-sensitive.

JavaScript and CSS can access specific elements through its class via class selectors or the DOM method (document.getElementsByClassName). 

For more detail on the *Class* property, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class).

### Draggable
The *Draggable* property indicates whether a component can be dragged via native browser behavior or the HTML Drag and Drop API.

For more detail on the *Draggable* property, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable).

### Id
The *Id* defines an identifier (ID) that **must** be unique across the entire application. The *Id* identifies a component when linking, scripting or styling (using CSS).

The Id's value **may not** contain whitespace characters such as space, tab, line feed (LF) or carriage return (CR).

For more detail on the *Id* property, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

### Language
The *Language* property identifies the language of a component.

The lang attribute will not be added to the component, if the *Language* property is empty.

For more detail on the *Language* property, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang).

### Local States
The *Local States* property is a custom state, request or function connected to a component. It is only accessible from the component or its children.

### Title
The *Title* property contains text that identifies the content in a component, iframe, or data table.

A title's primary purpose, when used as a label for an iframe, is to identify the element for assistive devices such as screen readers.  

For more information on the *Title* property, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title).

### Translate
The *Translate* property indicates whether a component's translatable attribute values and text node children should be translated by translation tools such as Google translate.

For more detail on the *Translate* property, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate).
