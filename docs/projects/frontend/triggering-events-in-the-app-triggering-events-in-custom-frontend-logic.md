---
id: 'triggering-events-in-the-app-triggering-events-in-custom-frontend-logic'
sidebar_label: 'Triggering events in custom front-end logic'
redirect_from: '/frontend/triggering-events-in-the-app/triggering-events-in-custom-front-end-logic'
slug: '/projects/frontend/triggering-events-in-the-app/triggering-events-in-custom-front-end-logic'
---

# Triggering Events in Custom Front-end Logic

This article describes how developers can trigger events in custom frontend logic.

---

Just like an event listener can be set on the browser natively using Javascript, they can also be set in custom front-end logic using App Builder.

In order for an Event to get trigger first, it needs to be set. You can do this either in the Page code section of your App Settings or using a Function that runs on a certain page. For example:

```js
// Programatically set event listeners on all Button Components
document.querySelectorAll('button').forEach((el) => {
  el.addEventListener('click', (e) => console.log('I was clicked: ', e.target));
});
```

This code will log `"I was clicked: Button Name"` to the console every time any button is clicked on that page. You can also set different events for different buttons using unique IDs, classes, or other attributes.

### Emitting Events

Currently App Builder has no way implementation of a global event bus or event emitter. You can use native browser APIs like `window.postMessage` when relevant, or develop custom emitters using global Functions or modules.
