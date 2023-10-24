---
id: 'forgot-password'
sidebar_label: 'Forgot Password Page'
slug: '/introduction/jumpstart/authentication-accelerator/forgot-password'
---
# Forgot Password Page

![Forgot Password Page](../_images/forgotPassword.png)

The Forgot Password page in the Authentication Accelerator allows users to reset their password in case they've forgotten it. This documentation will guide you through implementing and using the Forgot Password function, along with the necessary requests and steps for resetting a password.

## Reset Password Workflow

The "Forgot Password" functionality have some step process:

- **Request Password Reset Code**: Users initiate the password reset process by providing their email address. The requestPasswordResetCode function sends a request to generate a validation code and sends it to the user's email address.

- **Receive Validation Code**: Users receive the validation code in their email.

- **Confirm Password Reset**: Users enter the received validation code and their new password. The confirmPasswordReset function sends a request to confirm the password reset.

- **Password Reset Complete**: If the password reset is successful, users can now log in with their new password.

# Requests


### Request Password Reset Code

The `accAuthForgotPassword` is responsible of start the process, user provides their email address, and a request is made to generate a validation code and send it to the user's email address.

## Confirm Password Reset

Once the user receives the validation code, they provide it and the `accAuthForgotPasswordConfirm` is responsible of finish the process, with the password that was entered in the initial step.
