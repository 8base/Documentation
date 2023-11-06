---
id: 'getting-started-readme'
sidebar_label: 'Backend Overview'
redirect_from: '/projects/backend/getting-started'
slug: '/backend/getting-started'
---

# Backend Overview

Every 8base Workspace contains the following components:

1. **Schema**: A Schema represents the shape of your application data and specifies what data a client application can query from your API, as well as how to manipulate it.
2. **System Data**: Data resources that are pre-defined by default for every 8base application, such as: [Project Team Management](../8basehome/projects/projects-team-management.md), Users, [Roles & Permissions](/projects/backend/roles-and-permissions), and [Files](data/8base-console-handling-files.md).
3. **User Data**: All the unique data resources (tables, records, etc) that are specific to your application.
4. **Authentication and Authorization System**: Sign-up/Sign-in, manage, and authorization flows of your application. [Authentication](/projects/backend/authentication) is implemented through [Authentication Profiles](/projects/backend/authentication#authentication-types), while [Authorization](/projects/backend/roles-and-permissions) uses the roles and permissions system.
5. **Workspace Users**: 8base users with access to your Workspace through the console.
6. [Custom Logic (Custom Functions)](/projects/backend/custom-functions): For building and extending your application's server-side functionality.
7. **Integrations**: Data and functionalities from 3rd party sources.
8. [CI/CD](/projects/backend/development-tools/cli/ci-cd): The ability to create branched Workspace environments and a development pipeline.

## Workspaces

The structure of a Workspace can generally be divide into two parts:

### System Parts

- Schema
- System Data
- Custom Logic (Functions)
- Authentication Data
- Authorization (Roles and Permission)
- Workspace Settings

### User Parts

Application users and all the data created by them, contained in user data tables.

An awesome way to get more familiar with the true power of 8base is to complete [the quick start app](/projects/backend/getting-started/quick-start) and watch some of the [8base Academy Videos](https://www.youtube.com/channel/UCQgTczr5z_O4SJ-3nkANOaw). That said, below is a list of great guides to help get you familiar with many key concepts.

## Useful Guides

> [Quick Start](getting-started-quick-start.md)
> Learn 8base by building a React or Vue application.
>
> [8base Console](/projects/backend/8base-console-readme.md)
> Read the high-level overview of 8base's console.
>
> [Connect to your API](/projects/backend/getting-started-connecting-to-api.md)
> Explore ways to connect to the 8base GraphQL API.
>
> [GraphQL API](/projects/backend/8base-console-graphql-api-readme.md)
> Dive deeper into API concepts like authentication, queries, mutations, subscriptions and files.
>
> [Custom Functions](/projects/backend/8base-console-custom-functions-readme.md)
> Learn how to deploy back-end functions in JavaScript/TypeScript using 8base CLI.
>
> [Client Tools](/projects/backend/development-tools-sdk-api-readme.md)
> Accelerate front-end development with the 8base SDK and Boost UI Kit.
