---
id: 'custom-functions-readme'
sidebar_label: 'Custom Functions'
redirect_from: '/backend/custom-functions'
slug: '/backend/custom-functions'
---
# Custom Functions

Custom functions extend and enhance your projects. For example, you can use custom functions to extend your GraphQL API, add custom endpoints, or build new server-side functionality. 

Custom functions in 8base are essentially AWS lambdas that get enriched with access to your workspace resources. For example, 8base makes sure you are able to access the workspace's environment variables and database from within a custom function by default. Custom functions can be written in either JavaScript or TypeScript and be deployed in a matter of minutes.

## Highlights

- **Serverless Execution:** Scale custom functions from 1 to 1,000,000+ calls, thanks to serverless design.
- **JavaScript and TypeScript:** Write in JavaScript or TypeScript, and 8base will compile it as needed.
- **Predefined Triggers:** Choose from four types of custom function triggers.
- **Easily Permissioned:** Configure custom functions easily in the **Role Manager**.