---
id: 'forgot-password'
sidebar_label: 'Forgot Password Page'
slug: '/gettingstarted/jumpstart/authentication-accelerator/forgot-password'
---
# Forgot Password Page

The Forgot Password page in the Authentication Accelerator allows users to reset their password. We will guide you through implementing and using the Forgot Password function, along with the necessary requests and steps for resetting a password.

![Forgot Password Page](../_images/forgotPassword.png)

## Reset Password Workflow

The "Forgot Password" functionality follows this process:

1. **Request Password Reset Code**: The user initiates the password reset process by providing their email address. The `requestPasswordResetCode` function sends a request to generate a validation code. The code is sent to the user's email address.

2. **Receive Validation Code**: The user receives the validation code in their email.

3. **Confirm Password Reset**: The user enters the received validation code and their new password. The `confirmPasswordReset` function sends a request to confirm the password reset.

4. **Password Reset Complete**: If the password reset is successful, the user can now log in with their new password.

# Requests

### Request Password Reset Code

The `accAuthForgotPassword` request starts the process. The user provides their email address, a request is made to generate a validation code, and the code is sent to the user's email address.

### Confirm Password Reset

The user receives the validation code and they input it. The `accAuthForgotPasswordConfirm` request finishes the process, with the password that was entered in the initial step.
