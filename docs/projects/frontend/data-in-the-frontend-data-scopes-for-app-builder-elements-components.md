---
id: 'data-in-the-frontend-data-scopes-for-app-builder-elements-components'
sidebar_label: 'Components'
redirect_from: '/frontend/data-in-the-frontend/data-scopes-for-app-builder-elements/components'
slug: '/projects/frontend/data-in-the-frontend/data-scopes-for-app-builder-elements/components'
---

# Data Scopes for App Builder Components

This article describes how developers can expect data scopes to be applied when working with Components.

---

When working with App Builder Components, developers can expect data scopes to be applied in the following way:

## Local Scope

When a Component is added to a Page, a managed read-only state entry is created for it in the Local state of the page. The Component's scope then allows it to reference the state of any elements (other Components, Functions, Layout, and Requests) contained within the same Local namespace (Page).

## Global Scope

Components are never added to the global state namespace, as all Component instances exist within the context of a Page or Layout. However, a Component's scope gives it visibility into the global state. This allows Component's to read global state attributes, as well as write global custom state attributes.
