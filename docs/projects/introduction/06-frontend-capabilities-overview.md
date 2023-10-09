# Frontend capabilities overview


As a JavaScript developer, your journey towards creating dynamic applications is about to get a whole lot smoother. Welcome to Appbuilder, your one-stop solution for visual development and configuration. With Appbuilder, you're in full command, deciding how and where to implement your applications. Not only does it let you interact with a pseudo-live version of your application, but it also integrates the development, testing, and visualization into a single editor.

## App Architecture

When built with Appbuilder, your app's backbone is a single-page application based onReact.js, Material UI, Apollo Client, and 8base optimizations. Each of these foundational frameworks lends crucial elements to the functionality and aesthetics of your applications. Not to worry if you're not well-versed with these frameworks, working with Appbuilder doesn't require mastery of them. For more details, refer to the section "Who uses 8base."

## Application Data (State Management)

State management in Appbuilder applications is all about sharing information in the form of objects between components and other application elements. State entries could either be declared globally, making them available throughout the application, or locally, confining their existence to the page on which they're declared.

## App Navigation

Navigating within the app revolves around pages and layouts. A layout houses common elements for use across multiple pages. Pages correspond to specific routing rules, making them the targets for navigation. Developers have access to a router object, which lays bare the configuration of each page and provides code methods for navigation.

Appbuilder takes it a step further by introducing additional events during the lifecycle of a navigation event. This allows developers to insert logic wherever it makes the most sense. Navigation events occur before entering and after rendering each page and apply to all pages. Individual pages have events for adding custom code, functions, or requests before loading, exiting, or updating a page.

## Access to Data Sources (Resources and Requests)

Appbuilder paves the way to backend services using resources. These could be GraphQL backends, hosted at 8base or elsewhere, or external RESTful services. Interactions with these resources are made possible through requests, which denote the actual operation against a resource. Depending on the type of resource, requests can take the form of queries or mutations for GraphQL, or any valid HTTP verb for REST resources.

Requests come with configurations to dictate the information sent and/or retrieved from the resource, along with methods to implement transformation, success, and error logic. Each request can be executed automatically, in response to an application or component event, or manually through code.

Requests are accessible in the application, either at a global or local scope. During execution, the request configuration and added code can access other requests, state entries, and functions based on their declared scope.

## Application Logic (Functions)

Appbuilder empowers developers to declare JavaScript functions in either the global or local scope. These functions house application logic, offering an organized method for code reuse. Developers can decide if these functions should provide asynchronous behavior or not.

Functions are exposed in the application state as well, either at the global or local scope. From their code, they can access other functions, requests, or state entries based on their declared scope.

## Components

Components form the core of content within pages and layout. They can represent standard HTML elements, Material UI components, or additional React components. Each component comes with a set of properties, a styling configuration, and event handlers. Properties can take on literal values, references to states, or JavaScript expressions. Events can be implemented using code blocks, references to requests, or references to functions.

While components aren't part of the state, they can reference and use any element in the state from the global scope or the local scope of their page. This access combines all concepts, enabling developers to implement the dynamic logic of their app.

## Assets
Appbuilder lets developers add different types of assets, like images, videos, icons, fonts, etc., to their projects. Once the application is deployed, these assets are available under the asset folder, and can be referenced just as it is done in regular coded projects.

## Application Styling

Appbuilder offers an extensive toolkit for managing application style. It follows a predictable hierarchy for style rules that begins with a main theme defining core style variables, a global CSS file for custom styles, and the ability to override styles for different component types. Moreover, each component instance has its own style configuration.

Appbuilder also provides breakpoints and media queries to ease the development of responsive web applications. On the canvas, the viewport size can be adjusted or dragged. As the application is pseudo-live, media query rules come into effect, allowing developers to see how the styling configuration behaves.

## Collaboration

Appbuilder supports real-time collaboration, enabling several developers to work on the same frontend simultaneously. Any changes made by a developer are instantly reflected across all other connected sections. At the top of Appbuilder, developers can see who else is sharing the work session with them. Only project team members have access to edit the frontend.

## Preview and Deployment

Appbuilder allows developers to preview applications at any juncture during development, offering a live insight into the application's current status. Preview always starts in the page currently being edited. Unlike the pseudo-live version inside Appbuilder’s design canvas,  Preview version has no restrictions or design-time constraints.

The deployment process involves compiling and publishing the application to a production environment. The deployed version is completely isolated from the version in Appbuilder, as it is the live compiled version of the application. Developers can configure additional settings such as SSL certificates and custom domains in the global settings of the frontend.

