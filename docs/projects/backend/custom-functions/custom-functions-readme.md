---
id: 'custom-functions-readme'
sidebar_label: 'Custom Functions'
redirect_from: '/project/backend/custom-functions'
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

## Viewing Custom Functions

All custom functions that have been deployed to a workspace can be reviewed in the **Functions Dashboard**. This is your catalog for any custom server-side logic. 

![Function Dashboard screen](_images/ui_customfunctions_dashboard.png)

### Custom Function Cards

Once custom functions have been deployed to a workspace, they will appear in a list on the left side of the **Functions Dashboard**. Selecting a function will display the function's details on a card to the right of the functions list.

Function details include: `type`, `description`, and relevant metadata (configurations). Most importantly, clicking on the `Logs` tab will display the function's production logs.

### Descriptions and Metadata

All descriptions and metadata attributed to a function must be added/updated inside the `8base.yml` file. There is currently no support for editing functions in the 8base console.

Check out the [8base.yml docs](development-tools-dev-env-8base-yml.md) to learn more about deploying functions to a workspace.

### Logs
You can access your custom function logs by clicking the **Logs** tab. For more information, see [Logs](custom-functions-logs.md).