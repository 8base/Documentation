---
id: '8base-console-teams'
sidebar_label: 'Teams'
redirect_from: '/backend/teams'
slug: '/projects/backend/teams'
---

# Teams

Inviting other developers as team members on an 8base workspace is easy. As the workspace owner, you can quickly configure user roles and invite users to the workspace from within the console.

## Inviting team members

To invite a team member, navigate to [`Settings > Teams`](https://app.8base.com/users/team-members). Click the invite user button to open the invitation form. Once completed, send the invitation and 8base will email the invitee.

![Invite a team member to 8base](./images/invite-new-team-member.png)

## Managing team members

Team members can be updated and removed from a workspace in the [`Settings > Teams`](https://app.8base.com/users/team-members) page. Updating a team member's roles will effect their permissions within the current workspace. Deleting a team member will **only** disassociate a developer from the current workspace; their 8base developer account will remain intact.

To view pending invitations, switch the top left drop-down option to _Invitations_. In this view, team invitations can both be revoked or resent. If a mistake was made in the original invitation, please delete and create a new and correct invitation – pending invitations cannot be edited.

## Roles and permission for team members

The same [roles and permissions](/docs/8base-console/roles-and-permissions) system that is used in authorizing 8base applications is used for team member access management. These roles can be configured so that they are specific to an individual or general to a group. Roles are configured the same way in both of these scenarios. However, lets look at both examples.

### Developer User Role

In some scenarios, the workspace owner might want to limit the access of an individual developer (Steve) so that they:

1. Are not allowed to edit the data model.
2. Are only allowed to view their own records.

To accomplish this, they'd add a new role in [`App Services > Roles`](https://app.8base.com/app-services/roles) called "Steve - Developer Role". Then in the role's data configuration window, they'd update all tables to only allow "Steve" to read and update _User's Records_. Next, in the role's app configuration window, they'd ensure that _Data: Enable for role: Schema Access_ is unchecked.

When inviting the developer as a team member, this new role can be attached to the invitation. Otherwise, it can be attributed to their team member profile once they've accepted the invitation.

### Developer Group Role

In some scenarios, the workspace owner might want to limit the access of a type of developer (front-end) so that they:

1. Are not allowed to deploy back-end logic to the workspace.
2. Are not allowed to administer the workspace.

To accomplish this, they'd add a new role in [`App Services > Roles`](https://app.8base.com/app-services/roles) called "Frontend Developer Role". In the role's app configuration window, they'd ensure that _Settings: Enable for role: Workspace Administration_ and _Logic: Enable for role: Deploy_ are unchecked.

When inviting a front-end developer team member, this new role can be attached to their invitation. Otherwise, it can be attributed to any team members profile once they've accepted the invitation.

![Configuring a team member role in 8base](./images/team-developer-role.png)

## Team Members vs. App Users

There are two types of user-related records in 8base. The first one is called _Team Member Record_ and is created when a Team Member is invited to a workspace. The second one is _User Record_ which is related to the actual client app User who signs-up (registers) for the application you build.

This is an important distinction to be understood. The roles assigned to the _Team Member_ determine which permissions the developer has within the Management Console. The roles assigned to the _User_ determine which permissions the developer has within the **application being built**.

If the developer wants to test the application as if their account only had the "Guest" role, they can do so by updating their _User Record_ with the desired role. However, only the workspace administrator is able to update and edit roles belonging to _Team Members_.

![Team members vs. app users](./images/team-users-members.png)

## Troubleshooting

Common issues when inviting team members.

### 1: The invitation link you clicked is for another account!

Existing 8base developers may already be logged in when accepting an invitation to join another workspace. **If the logged in account's email address is different to that which the invitation was sent to, the invitation will fail**. This issue can be resolved by either:

- Have the developer logout, re-accept the invitation, and create a new account.
- Cancel the invitation and resend a new one to the developer's account email address.

![Team member invite sent to another account error](./images/invitation-sent-to-other-accout.png)
