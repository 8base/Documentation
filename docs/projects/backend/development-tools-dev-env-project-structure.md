---
id: 'development-tools-dev-env-project-structure'
sidebar_label: 'Project Structure'
redirect_from: '/backend/development-tools/dev-env/project-structure'
slug: '/backend/custom-functions/dev-environment/project-structure'
---
# Project Structure

When you use the [8base CLI](/projects/backend/development-tools/cli) to create a new project with all of the default options, it will create a directory structure similar to this:

```text
Building a new project called ExampleProject 🚀

ExampleProject
├── .workspace.json
├── 8base.yml
├── package.json
└── src
    ├── resolvers
    │   └── resolver
    │       ├── handler.ts
    │       ├── mocks
    │       │   └── request.json
    │       └── schema.graphql
    ├── tasks
    │   └── task
    │       ├── handler.ts
    │       └── mocks
    │           └── request.json
    ├── triggers
    │   └── trigger
    │       ├── handler.ts
    │       └── mocks
    │           └── request.json
    └── webhooks
        └── webhook
            ├── handler.ts
            └── mocks
                └── request.json

🎉 Project ExampleProject was successfully created 🎉
```

All of the dependencies can be installed using `npm` or `yarn`. The 8base CLI comes with Webpack and TypeScript pre-configured. This allows you to write code in JavaScript or TypeScript in your custom functions, as well as use `async/await`.

Following this project structure is a best practice. Your work will stay organized and get the most out of 8base's CLI. For example, the CLI's [generator commands](/projects/backend/development-tools/cli/generators) are convenient for scaffolding new resources and will add generated files using the pattern seen above (`src/<functionType>/<functionName>/**/*`).

## Server vs Client

It is very common for developers to commit their server-side and client-side code to the same git repository. In such situations, we suggest cleanly seperating the two directories at the project's root level. This will prevent a number of errors that would otherwise occure when installing dependencies and deploying code.

Try using the following directory structure when committing server-side and client-side code to the same git repository:

```text
ExampleProject
├── README.md
├── client/
└── server/
```
