---
id: 'login'
sidebar_label: 'Login Page'
slug: '/introduction/jumpstart/authentication-accelerator/login'
---
# Login Page

The Login page in the Authentication Accelerator allows users to securely log into your application. We will walk you through implementing and using the Login function, along with essential requests and dependencies.

![Login Page](../_images/loginPage.png)

## Functions

### Login Function

The `accAuthLogin` function is responsible for user login and authentication. When a user logs in, this function is called to initiate the login process. <!-- Here's an annotated code snippet explaining how it works.-->

## Requests

### LoginRequest

The `accAuthLoginRequest` GraphQL mutation is used for user login. It takes the user's email, password, and authentication profile ID as input parameters and returns authentication tokens. 

This request is crucial for the login process as it authenticates the user and provides the necessary tokens for subsequent API requests.

### UserGetByEmail

The `accUserGetByEmail` GraphQL query is used to retrieve user information based on their email address. It verifies whether a user with the provided email address exists in your application.
