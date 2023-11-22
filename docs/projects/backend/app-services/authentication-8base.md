---
id: 'authentication-8base'
sidebar_label: '8base Authentication'
slug: '/backend/app-services/8base-authentication'
---
# 8base Authentication

8base authentication is the default option to manage your user's identities and ensure the best security standards. All user accounts are stored in an AWS account that is managed by 8base.

To create an authentication profile, navigate to `App Services > Authentication` and press the `+` button. The form that appears can be completed using the following fields.

- **Name**: A name that describes what this profile does. In this sample case, you can replace My Auth in the screen shot above with a name like Guest User Auth.

- **Type**: Select `8base Authentication`

- **Self Signup**: `Open to all` allows users to self-register. Otherwise, you can restrict access to only invited users (`Off`) or users within a specific domain (`Specific Email Domain Only` i.e., '@company.com').

- **Roles**: Roles can be either Guest, Administrator, or any custom role. Multiple-roles can be selected.

## Client information

An authentication profile's corresponding client-side information is generated once created. Client-side information allows for connecting client applications to the 8base back-end and any corresponding authentication settings.

`Client ID` and `Domain` are **not** sensitive strings and are added to one or more client apps.

`Login URL` is the auto-generated URL template leading to the Hosted Login Page. You should fill this with one of the `Allowed Callbacks URLs`.

## Configure Callback URLs

A callback URL is an endpoint that is invoked after a user authenticates. Users are not able to log into an application and will receive an error if this field is left empty. By default, the callback URL `http://localhost:3000/auth/callback` is set. Keep it, or replace it with an existing URL from your application.

## Configure Logout URLs

The logout URL is where a user is sent after logging out. Specify it in the Allowed Logout URLs field. The default logout URL is `http://localhost:3000/logout` and attempting to log out when no logout URL was provided displays an error.


