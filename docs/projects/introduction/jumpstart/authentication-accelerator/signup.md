---
id: 'signup'
sidebar_label: 'Signup Page'
slug: '/introduction/jumpstart/authentication-accelerator/signup'
---
# Signup Page

![Signup Page](../_images/signupPage.png)

The Signup page in the Authentication Accelerator allows new users to register and create an account. This documentation will guide you through implementing and using the Signup function, along with the necessary requests and dependencies.

# Functions

## Signup Function

The `accAuthSignup` function enables users to sign up with their email and password and then logs them in. Here's an annotated code snippet explaining how it works.

# Requests

## Signup Request

The `accAuthSignupRequest` is a GraphQL mutation used for user signup. It takes the user's email, first name, last name, and password as input parameters and creates a new user account. Here's the request:

## Login Request

The `accAuthLoginRequest` is a GraphQL mutation used for user login. It takes the user's email, password, and authentication profile ID as input parameters and returns authentication tokens. Here's the request.

This request is used to log in the user after a successful signup.

By following this documentation, you can implement a secure and user-friendly signup process in your application using the Authentication Accelerator's Signup Page.
