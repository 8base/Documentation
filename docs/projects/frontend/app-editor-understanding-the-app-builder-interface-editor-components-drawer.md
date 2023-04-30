---
id: 'app-editor-understanding-the-app-builder-interface-editor-components-drawer'
sidebar_label: 'Editor Components Drawer'
redirect_from: '/frontend/app-editor/understanding-the-app-builder-interface/editor-components-drawer'
slug: '/projects/frontend/app-editor/understanding-the-app-builder-interface/editor-components-drawer'
---

# App Editor Components Drawer

Inside the App Editor, the Component Drawer is where you can access the Component Library and your Component Groups.

## Using Components

The Component Library is a collection of all the Components you can drag and drop onto the Page Canvas to build your app. App Builder provides the most common components, such as inputs, containers, cards, etc.

## Creating Component Groups

!(How to create a group in App Builder)[./_images/ab-component-library-groups-1.png]

Component Groups are a way to save a reusable grouping of Components, so they're easy to find and reuse. For example, you might create a group for a specific type of submission form that you use throughout your app.

To create a Group, select the outermost parent Component that wraps the Group. This is usually some container. Once selected, make sure that it has an ID property set. You can then click the ellipsis dropdown menu on the highlighted Component and select **Create Group**.

!(Creating a component group in App Builder)[./_images/ab-component-library-groups-2.png]

App Builder will automatically give the new Group a name and add it to your Component Groups list.

Component Groups are only available in the current app you're working on. To use a Component Group in another app, you'll need to create it again.

## Configuring Components

Once a Component or Group instance is added to the Page Canvas, you can customize its properties, styles, and event listeners in the right-screen same Component Settings area of the Editor.

## Component Properties

![App Builder's Component Properties](./_images/ab-component-settings-properties-1.png)

You can set Component properties to affect the behavior of a component and its data. For example, you can set the "isLoading" property of a Button component to true to make the button disabled and display a loading spinner instead of the button's label. You can also set properties in the Component Settings area of the Editor.

Most inputs are Handlebars enabled, meaning that you can write expressions and use functions inside the inputs to determine values. For example, you can get a greeting message on a Text component to be `{{ new Date().getHours() < 12 ? "Good Morning!" : "Good Afternoon!" }}` to dynamically render a time-sensitive (get it) message to your user.

## Component Styles

![App Builders Component Styles](./_images/ab-component-settings-styles-1.png)

You can also use the Styles pane to update the appearance of a Component. For example, you can change the background color, font size, and padding of a Button component. Styles changes will immediately be reflected on the rendered Component so that you can see exactly what your Component will look like before you save any changes.

App Builder also provides several different ways to customize the look and feel of your Components. You can use the built-in themes or create your custom themes. You can also use the CSS Editor to style your Component's styling pane directly. This gives you full control over how your Component looks and feels.

## Component Events

![App Builder's Component Events](./_images/ab-component-settings-events-1.png)

You can add event listeners to components in the Component Settings area of the Editor. Click on the "+" icon button in the "Events" tab of the Component Settings and select the event you want to trigger an Action on. You can then choose what action to take when that event is triggered. For example, you can navigate to a different page when a button is clicked, or you can run custom Javascript code.

Adding event listeners is a quick and easy way to add interactivity to your components without writing any – or not too much – code. This makes creating UIs that are interactive and responsive to user input easy.
