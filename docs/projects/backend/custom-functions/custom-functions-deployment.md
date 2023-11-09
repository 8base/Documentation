---
id: 'custom-functions-deployment'
sidebar_label: 'Deployment'
redirect_from: '/backend/custom-functions/custom-functions-deployment'
slug: '/backend/custom-functions/custom-functions-deployment'
---

# Deployment

Once you had completed the development and [testing](/projects/backend/custom-functions/debugging) of your custom functions, you need to deploy them to your 8base backend so they can be available for execution.

Deployment is done using the following command

```sh
$ 8base deploy [OPTIONS]
```

OPTIONS:

- `--debug, -d` Turn on debug logs [boolean]
- `--help, -h` Show help [boolean]
- `--functions, -f` The list of functions to deploy [array]

If your 8base backend is using CI/CD, the functions will be deployed to the environment currently set. You can always review which is your current environment with 

```sh
$ 8base environment show
```

The deployment process uploads your project, compiles it and provision the appropiate infrastructure for the serverless execution of the functions