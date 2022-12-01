---
id: 'app-components-common-properties-class'
sidebar_label: 'Class'
slug: '/frontend/app-components/common-properties-class'
---
# Class
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