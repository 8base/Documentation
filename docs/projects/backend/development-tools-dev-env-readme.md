---
id: 'development-tools-dev-env-readme'
sidebar_label: 'Development Environment'
redirect_from: '/backend/development-tools/dev-env'
slug: '/backend/custom-functions/dev-environment'
---

# Development Environment

The 8base CLI has a set of tools to assist with debugging functions locally.

To learn about logging, see [Logs](custom-functions/custom-functions-logs.md).

## Invoke Functions Locally

For testing purposes, you can execute functions locally and supply a JSON value for the `event` parameter:

`8base invoke-local [FUNCTION NAME] -j '{ "data": { "key1": "val1" }}'`.

You can specify JSON inline using the `-j` option or a path to a file with JSON using `-p` option.

:::tip 
To test this feature, implement the `hello` resolver from [Resolvers](/projects/backend/custom-functions/resolvers) and run the following command in your CLI.

`8base invoke-local hello -j '{ "data": { "name": "Bob" } }'`
:::

<!--{% hint style="info" %}-->

### Environment Variables

There are a few ways to set environment variables while running `invoke-local`. You can either include variables directly in the command:

`VAR1=test 8base invoke-local hello\n`

Or you can create a `.env` file with variables:

`env $(cat .env | xargs) 8base invoke-local hello`

<!--{% endhint %}-->

## Invoke Functions Remotely

Similarly to `invoke-local` you can execute functions remotely using:

`8base invoke [FUNCTION NAME] -j '{ "data": { "key1": "val1" }}'`
