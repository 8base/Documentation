---
id: 'getting-started-building-fullstack-gotomarket-apps-on-8base'
sidebar_label: 'Building full-stack go-to-market apps on 8base'
slug: '/frontend/getting-started//building-full-stack-go-to-market-apps-on-8base'
---

# Building Full-stack Go-to-Market Apps on 8base

Learn How to Build your First App Builder App

_______

## How App Builder Works

App Builder lets you quickly build, deploy, and continue to evolve both customer facing and internal tools using an intuitive UI and JavaScript when needed. Also, App Builder is a full-stack application development tool, proving developers with a (Master Backend)[./README.md] that provides database, API, roles & permissions, and serverless capabilities. This doesn't preclude you from connecting to other data sources, as making requests to REST and GraphQL APIs are supported as well.

### 1. Creating your first App Builder Workspace

Creating an App Builder project is as simple as giving your project a name and clicking create! 8base will handling the provisioning of all the resources required for your full-stack web application. Once generated, developers are able to dive into either the frontend or backend tools to start developing the application. 

*For more information on 8base's backend tools, visit the (backend docs)[.PLACEHOLDER_REF.md]*

### 2. Using Drag-and-Drop Components to Build Pages in Apps

App Pages in App Builder are developed inside the (App Builder Editor), which makes accessible App Builder's many (Components)[./PLACEHOLDER_REF.md] and other features, like (State Managemet)[./PLACEHOLDER_REF.md], (Assets)[./PLACEHOLDER_REF.md], and (Navigation)[./PLACEHOLDER_REF.md]. Developers get to drag-and-drop Components onto the Canvas for any Page in their App before working on the 3 available configuration areas of any component; (Component Properties)[./PLACEHOLDER_REF.md], (Component Styles)[./PLACEHOLDER_REF.md], and (Component Events)[./PLACEHOLDER_REF.md].

### 3. Connecting to Data Sources and APIs

Your App Builder project is provisioned with a Master Backend that allows you to upload images, handle authentication, and store data from your frontend. However, you can also create API Clients (a.k.a, Resources) that connect to 3rd Party REST and GraphQL APIs. The Requests that you make to these data sources become reusable elements it your App Builder project, allowing you to effectively organize your and optimize your projects when collaborating with teams or working by yourself. Meanwhile, the response data recieved from Requests gets stored in App Builder's State Management system, making it accessible to Components, Functions, and other App Builder elements.

### 4. Customizing the Look and Feel of Applications

Applications can be styled at the Global, Component Default, and Component level. This allows for fine grained customization fo the look and feel of applications, using both form based styling options and pure CSS code. At the Global level, App Builder allows for developers to import a CSS Design Framework, like Material Design or Bootstrap, to set the baseline for their application's unique look and feel. Meanwhile, a developer can also add Custom CSS code instead of an existing CSS Design Framework.

### 5. Setting up User Authentication

Thanks to the Master Backend, authentication is a breeze! In just a few clicks, developers are able to add user authentication to their apps.

### 6. Deploying Applications and Custom Domains

When developers are ready to deploy an application they quickly access the deploy button to start the process. 8base automatically assigns an version number to every deployment – which can later be restored – before building the application. An App Builder application is defined by a collection of DSL files. When the application gets deployed, these DSL files are compiled into a React.js application that's then built and deployed to an S3 bucket with a public URL. Your free to create a mapping with your DNS provdider to point a custom domain to this endpoint. 



...coming soon.
