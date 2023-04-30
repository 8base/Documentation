---
id: 'custom-app-styling-creating-a-global-app-theme-setting-default-styles-on-components'
sidebar_label: 'Setting default styles on Components'
redirect_from: '/frontend/custom-app-styling/creating-a-global-app-theme/setting-default-styles-on-components'
slug: '/projects/frontend/custom-app-styling/creating-a-global-app-theme/setting-default-styles-on-components'
---

# Setting default styles on Components

This document describes how you can add custom CSS to style your components' default look and feel.

![Component Default Styling](./_images/ab-custom-styles-component-defaults-1.png)

## Understanding Component Defaults vs. Component Instances

In App Builder, there is a distinction made between component defaults and component instances.

Component defaults are the definitions for a component that will affect how it looks and behaves when first added to the page canvas. This is the default styling of each component in your component library.

Component instances are individual instances of that component placed onto the page. They will inherit the default styling from the component library but can be individually styled as well.

This distinction is important to understand when working with custom styles in App Builder because you can target either the defaults or the individual instances.

## Customizing Component Defaults with CSS

![Customizing Component Defaults with CSS](./_images/ab-custom-styles-component-defaults-2.png)

You can add your custom CSS in the `Theme > Components` tab of the Editor. The following steps describe how you can do this:

In the Theme section of the left navigation bar, click on **Components**. The Components list appears.

Select the component you want to style from the Components list.
In the top right of the page, you'll see the code (`<\>`) icon. Click it to open the CSS editor.
All of the CSS selectors for different states of the component will be pre-populated for you. Feel free to add CSS properties to them, or create custom selectors.
Click the "Done" button when finished.

App Builder includes a "live reload" feature so that when you make changes to the CSS in the `Theme > Components tab`, those changes are automatically reflected in the Component Preview and Editor.

![Customizing Component Defaults with CSS](./_images/ab-custom-styles-component-defaults-3.png)
