---
id: 'administer-users'
sidebar_label: 'Team and User Administration'
slug: '/backend/app-services/administer-users'
---
# Team and User Administration

You can view and manage both app users and team members. You can also find insights into how app users are engaging with your application.

![Team administration screen](./_images/team-admin-1.png)

## Users

**Users** is defined as a _System Table_ in 8base, meaning that the table is added by default and required in every workspace. That said, it's fully customizable using the Data Builder and can be configured to your application's requirements.

By default, the Users table has the following fields defined.

```javascript
{
  id: ID;
  _description: String;
  createdAt: DateTime;
  updatedAt: DateTime;
  createdBy: User;
  email: String;
  is8base: Boolean;
  firstName: String;
  lastName: String;
  cellPhone: String;
  workPhone: String;
  workPhoneExt: String;
  gender: String;
  birthday: String;
  language: String;
  timezone: String;
  avatar: File;
  sentInvitations: Array;
  permissions: Array;
  roles: Array;
}
```

### Team Members

When a Team Member gets invited to a workspace, two separate user records are created for them. The first record is their _Team Member Record_ and the second is their _App User Record_.

This is an important distinction. The roles that get added to the _Team Member User_ record determine which permissions the developer has within the Management Console. The permissions that get added to the _App User Record_ determine which permissions the developer has within the **application being built**.

If the developer wants to test the application as if their account only had the "Guest" role, they can do so by updating their _App User Record_ with the desired role. However, only the workspace administrator is able to update and edit roles belonging to _Team Member Users_.

### App Users

When a user signs up for your application (or is added manually), a role can be added to their user record. This role will determine the privileges that they have when using the app.

Currently, it is required that users sign up with a valid email address. When using 8base Authentication, a confirmation email will be sent to the user.

### Updating Users

When inside the [User Administration](https://app.8base.com/users/app-users) user's `firstName`, `lastName`, `email`, and `roles` can be updated. This can be accomplished by clicking `Edit` in the row drop-down and using the popover form as needed.

![User administration screen](_images/ua-edit-user.png)

Many other data points are stored about a user. If you need to update other information about the user, you can do so using the [Data Viewer](https://app.8base.com/data/) where you will have access to all user fields.

### Deleting Users

Deleting a user can be done by clicking `delete` in the row drop-down. This action will delete the user record, along with any of its dependent records.

When using [8base Authentication](/backend//app-services/authentication#8base-authentication) the user's record will be deleted in both 8base and the authentication provider. When using another authentication provider the user record will **only** be deleted in 8base.

Please refer to the [Authentication docs](/backend//app-services/authentication) to learn more about this.

## Passwords

8base does **NOT** store user passwords. Instead, we rely on an authentication provider, like Auth0, to authenticate a user and return a valid `idToken`. That `idToken` contains the users email address, which maps them to a user record in 8base when querying the API.

This is how developers are able to use **any** OpenID provider with their workspace. However, it also means is that things like password resets must be handled by the authentication provider - not 8base.

In the future, we will include some tooling to help manage these concerns from the console.
