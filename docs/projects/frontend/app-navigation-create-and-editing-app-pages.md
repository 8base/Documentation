---
id: 'app-navigation-create-and-editing-app-pages'
redirect_from: '/frontend/app-navigation/create-and-editing-app-pages'
slug: '/projects/frontend/app-navigation/create-and-editing-app-pages'
sidebar_label: 'Creating, cloning, and editing App Pages'
---

# Creating, cloning, and editing App Pages

This article describes how developers can create or clone *Pages* and edit their *Page Settings*.
___

## Creating Pages

Assuming you have an App already created in App Builder, to Create a new Page, simply select the "+" button on the *Pages* pane.

![Creating page](./_images/ab-app-navigation-create-and-editing-app-pages-1.png)

Pages have the following properties that can be set:

• Name:  A unique name for the page. This will be used internally by App Builder and is required.

• Path: The path for the page. This is required and must be unique.

• HTML Meta Tags:   These are HTML Meta tags that will be placed in the `<head>` section of the page.

• Default Path Parameters: These are parameters that will be set on the page. The format is `ParameterName=DefaultValue`.

• Route Metadata:  This is metadata that will be associated with the page. The format is `MetaKey=MetaValue`.

• Local Route Hooks: These are functions that will be called when the page is navigated to. The format is `FunctionName(to, from, state)`.

After you have set all of the properties for the page, simply click the "Save" button to save the page.

## Cloning Pages
To Clone an existing *Page*, click the "Clone" button on the top of the Page Settings panel. You will be prompted to confirm you want to clone the page.

![Cloning page](./_images/ab-app-navigation-create-and-editing-app-pages-3.png)

A copy of the *Page* will be created with the same name and the word "Copy" added to the end of the page name. The page will show up in the **Pages** section of the *Pages* pane.

![Cloning Copy](./_images/ab-app-navigation-create-and-editing-app-pages-4.png)

When a *Page* is cloned the following features are preserved in the cloned page.

+ Page settings
+ Components
+ Events
+ Local states
+ Global states
+ Custom code

![Cloned Page](./_images/ab-app-navigation-create-and-editing-app-pages-5.png)


## Editing Pages

To Edit an existing *Page*, simply change the values in the Pages Settings panel and click "Save":

![Editing page](./_images/ab-app-navigation-create-and-editing-app-pages-2.png)
