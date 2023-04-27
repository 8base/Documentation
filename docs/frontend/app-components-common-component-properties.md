---
id: 'app-components-common-component-properties'
sidebar_label: 'Common Component Properties'
redirect_from: '/frontend/app-components/common-component-properties'
slug: '/projects/frontend/app-components/common-component-properties'
---

# Common Component Properties

The properties listed in this section are common to **all components**. Properties that are unique to a component are listed as part of the component's documentation.

### Conditional Rendering

The _Conditional Rendering_ property takes any valid expression and is used to render the component, and its children, if the expression evaluates to true.

### Class

A _Class_ defines one or more attribute values for a component. Each attribute value is defined by a set of styles, such as the **error** example below.

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

For more detail on the _Class_ property, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class).

### Draggable

The _Draggable_ property indicates whether a component can be dragged via native browser behavior or the HTML Drag and Drop API.

For more detail on the _Draggable_ property, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable).

### Id

The _Id_ defines an identifier (ID) that **must** be unique across the entire application. The _Id_ identifies a component when linking, scripting or styling (using CSS).

The Id's value **may not** contain whitespace characters such as space, tab, line feed (LF) or carriage return (CR).

For more detail on the _Id_ property, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

### Language

The _Language_ property identifies the language of a component.

The lang attribute will not be added to the component, if the _Language_ property is empty.

For more detail on the _Language_ property, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang).

### Local States

The _Local States_ property is a custom state, request or function connected to a component. It is only accessible from the component or its children.

### Title

The _Title_ property contains text that identifies the content in a component, iframe, or data table.

A title's primary purpose, when used as a label for an iframe, is to identify the element for assistive devices such as screen readers.

For more information on the _Title_ property, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title).

### Translate

The _Translate_ property indicates whether a component's translatable attribute values and text node children should be translated by translation tools such as Google translate.

For more detail on the _Translate_ property, see the [Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate).
