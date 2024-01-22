---
id: 'development-tools-cli-readme'
sidebar_label: 'Command Line Interface (CLI)'
redirect_from: '/backend/development-tools/cli'
slug: '/advanced/development-tools/cli'
---

# Command Line Interface (CLI)

The 8base Command Line Interface (CLI) makes it easy to generate custom functions and manage workspaces straight from the terminal. You can develop and deploy custom backend logic in JavaScript or TypeScript.

## Supported Versions

### Typescript
Typescript v4.3.4 is supported.

### Node.js
:::caution
AWS has announced the end of support for Node.js 14.x in the AWS SDK for JavaScript v3, effective **May 1, 2024**. If your custom functions run on Node.js v14, they may stop working after this date.
:::

As of Friday, January 26, 2024, our serverless functions infrastructure and the 8base Command Line Interface (CLI) support Node v18 and v20. If you are running an older version of CLI, you will need to update it to be able to run Node v18 and v20. We recommend updating and testing your 8base CLI and your Node versions before April 30, 2024.

For more information about Node.js versions, see [Announcing the end of support for Node.js 14.x in the AWS SDK for JavaScript (v3)](https://aws.amazon.com/blogs/developer/announcing-the-end-of-support-for-node-js-14-x-in-the-aws-sdk-for-javascript-v3/).

## Installing the CLI

```shell
# Install the CLI Globally
$ npm install -g 8base-cli

# Ensure proper install
$ 8base -v

# See what's possible!
$ 8base -h
=>
DESCRIPTION
  The 8base Command Line Interface is a unified tool to manage your 8base workspaces services.

USAGE
  8base <command> [OPTIONS]

  Use 8base command `--help` for information on a specific command. Use 8base help topics to view a list of available help topics. The synopsis for each command shows it’s parameters and their usage. Optional options are shown in square brackets.

COMMANDS
  8base config               Allows you to select a default workspace and retrieve the API endpoint URL.
  8base deploy               Deploys project in current directory to 8base using 8base.yml config file. To use this command,
                             you must be in the root directory of your 8base project.
  8base describe [name]      Describes your 8base project’s functions and their types through 8base.yml file.
  8base export               Export current workspace data schema
  8base generate <command>   Generator for server and client side resources                                        [aliases: g]
  8base import               Import 8base schema file and data to the current - or specified - workspace.
  8base init                 Initializes a new project with example directory structure and custom functions.
  8base invoke <name>        Invokes a custom function in the production workspace.
  8base invoke-local <name>  Invokes the custom function in the local development workspace.
  8base login                Authenticates the command line user by letting them log into an 8base account.
  8base logout               Clears local login credentials and invalidates API session.
  8base logs                 Authenticates the command line user by letting them log into an 8base account.
  8base package              Package 8base application without deploying it.

OPTIONS
  --version, -v  Show version number
  --debug, -d    Turn on debug logs
  --help, -h     Show help
```

## Upgrading the CLI

When you update your CLI version, the 8base.yaml file will provide the option to specify the runtime version for your functions. This added flexibility allows you to choose whether your function run in Node or Typescript, and the version.

To update your CLI, run:

`yarn global add 8base-cli@latest`  or

`npm i -g 8base-cli@latest`

If you upgrade your CLI and change the Node version, we recommend that you thoroughly test your functions locally with the new Node version. You may have libraries within your functions that are not supported by newer Node versions. 

If you have older projects, you can manually update your Node version in the 8base.yml file and add a new parameter. For example:

```yml
settings:
nodeVersion:20
```
