---
id: 'app-navigation-create-and-editing-app-pages-using-url-fragment-parameters'
sidebar_label: 'Using URL Fragment Parameters'
redirect_from: '/frontend/app-navigation/create-and-editing-app-pages/using-url-fragment-parameters'
slug: '/projects/frontend/app-navigation/create-and-editing-app-pages/using-url-fragment-parameters'
---

# Using URL Fragment Params

This article describes how developers use URL fragment parameters.

---

In App Builder, the `router` is a global state entry provided to every page. On the currently active route, App Builder parses and makes available any fragment params included in the URL path.

![Fragment params state](./_images/ab-app-navigation-create-and-editing-app-pages-using-url-fragment-parameters-1.png)

This makes it so that you can access `fragments` for the current route in any function, request, or custom script.

```js
// Accessing the fragments of the current page from the router
var urlFragments = router.currentRoute.fragments;
```
