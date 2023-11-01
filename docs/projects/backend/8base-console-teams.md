---
id: '8base-console-teams'
sidebar_label: 'Teams'
redirect_from: '/backend/teams'
slug: '/projects/backend/teams'
---

# Teams

Team Members are individuals invited to work on developing an application in 8base. Their roles define permissions within the 8base Project Dashboard.

This is differnet from users, who are individuals who sign-up for the application you have built. Their roles determine permissions within the application.

## Team Management

For more information about managing team members, see [Team Management](../8basehome/projects/projects-team-management.md).

## Roles and Permissions for Team Members

The same [roles and permissions](/projects/backend/roles-and-permissions) system that is used in authorizing 8base applications is used for team member access management. These roles can be configured so that they are specific to an individual or general to a group. Roles are configured the same way in both of these scenarios. 

### Developer User Role

In some scenarios, the administrator might want to limit the access of an individual developer (Steve) so that they:

1. Are not allowed to edit the data model.
2. Are only allowed to view their own records.

To accomplish this, they would add a new role in the Project Dashboard called "Steve - Developer Role". Then in the role's data configuration window, they'd update all tables to only allow "Steve" to read and update _User's Records_. Next, in the role's app configuration window, they'd ensure that _Data: Enable for role: Schema Access_ is unchecked.

When inviting the developer as a team member, this new role can be attached to the invitation. Otherwise, it can be attributed to their team member profile once they've accepted the invitation.

### Developer Group Role

In some scenarios, the workspace owner might want to limit the access of a type of developer (front-end) so that they:

1. Are not allowed to deploy back-end logic to the workspace.
2. Are not allowed to administer the workspace.

To accomplish this, they'd add a new role in Project Dashboard called "Frontend Developer Role". In the role's app configuration window, they'd ensure that _Settings: Enable for role: Workspace Administration_ and _Logic: Enable for role: Deploy_ are unchecked.

When inviting a front-end developer team member, this new role can be attached to their invitation. Otherwise, it can be attributed to any team members profile once they've accepted the invitation.

![Configuring a team member role in 8base](./images/team-developer-role.png)

## Team Members vs. App Users

There are two types of user-related records in 8base. The first one is called _Team Member Record_ and is created when a Team Member is invited to a workspace. The second one is _User Record_ which is related to the actual client app User who signs-up (registers) for the application you build.

This is an important distinction to be understood. The roles assigned to the _Team Member_ determine which permissions the developer has within the Project. The roles assigned to the _User_ determine which permissions the developer has within the **application being built**.

If the developer wants to test the application as if their account only had the "Guest" role, they can do so by updating their _User Record_ with the desired role. However, only the project administrator is able to update and edit roles belonging to _Team Members_.

![Team members vs. app users](./images/team-users-members.png)

## Troubleshooting

Common issues when inviting team members.

### 1: The invitation link you clicked is for another account!

Existing 8base developers may already be logged in when accepting an invitation to join another workspace. **If the logged in account's email address is different to that which the invitation was sent to, the invitation will fail**. This issue can be resolved by either:

- Have the developer logout, re-accept the invitation, and create a new account.
- Cancel the invitation and resend a new one to the developer's account email address.

![Team member invite sent to another account error](./images/invitation-sent-to-other-accout.png)
