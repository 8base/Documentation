---
id: 'custom-functions-deployment'
sidebar_label: 'Deployment'
redirect_from: '/backend/custom-functions/custom-functions-deployment'
slug: '/backend/custom-functions/custom-functions-deployment'
---
# Deployment

Custom functions become executable once they are deployed to your 8base backend. As a best practice, deployment should be done after [testing](/backend/custom-functions/debugging).

This is the deployment command:

```sh
$ 8base deploy [OPTIONS]
```

Here are some optional parameters:

- `--debug, -d` Turn on debug logs [boolean]
- `--help, -h` Show help [boolean]
- `--functions, -f` The list of functions to deploy [array]

If your 8base backend is using[CI/CD](../8base-console-platform-tools-ci-cd.md), the functions will be deployed to the environment currently set. You can always which environment you are using with: 

```sh
$ 8base environment show
```
The deployment process uploads your project, compiles it, and provisions the appropiate infrastructure for serverless execution of your functions.