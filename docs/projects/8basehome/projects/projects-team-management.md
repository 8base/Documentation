---
id: 'projects-team-management'
redirect_from: '/backend/teams'
sidebar_label: 'Project Team Management'
slug: '/8basehome/projects/projects-team-management'
---
# Project Team Management

Team Members are individuals who work together to develop applications in 8base. Their roles define permissions within the 8base Project Dashboard.

This is differnet from users, who are individuals who sign up for the application you have built. Their roles determine permissions within the application.

You can open the Team Management page from the Project Dashboard. If you are a project Administrator, you can configure team roles and invite team members to the project.

![Team](./_images/projects-project-ui-walkthrough-team.png)

## Inviting Team Members

To add a new team member:
1. Click the **Add a Team Member** button. A dialog box opens.
![Add Team Member](./_images/projects-project-ui-walkthrough-team-add-member.png)
2. Complete the form in the dialog box and click **Send Invite**. A notification displays, indicating the cost for adding a new team member.
![Team Member Notification](./_images/projects-project-ui-walkthrough-team-add-member-notification.png)
3. Click **Continue** to send the invitation. A confirmation message at the bottom of the page indicates the invitation was sent. 

The next time you login and view the **Team** page, the new team member's name will be listed. 

Team members who have not accepted an invitation have a status of **Pending**. If an invitation is pending, you can click the **...** menu to edit, re-send, or cancel the invitation. 

## Managing Team Members

Team members can be updated and removed by clicking the **...** menu next to their **Status** column. Updating a team member's roles will affect their permissions within the project. 
:::note
Deleting a team member will **only** disassociate a developer from the current project. Their 8base developer account will remain intact.
:::

## Team Member Roles and Permissions

For information about creating new roles and managing permissions, see [Roles and Permissions](../../backend/8base-console-roles-and-permissions.md).

## Differences between Team Members and App Users

There are two types of user-related records in 8base. The first one is called _Team Member Record_ and is created when a Team Member is invited to a workspace. The second one is _User Record_ which is related to the actual client app User who signs-up (registers) for the application you build.

This is an important distinction. The roles assigned to the _Team Member_ determine which permissions the developer has within the project. The roles assigned to the _User_ determine which permissions the developer has within the application being built.

If the developer wants to test the application as if their account only had the "Guest" role, they can do so by updating their _User Record_ with the desired role. However, only the project administrator is able to update and edit roles belonging to _Team Members_.


## Troubleshooting

### The invitation link you clicked is for another account!

Existing 8base developers may already be logged in when accepting an invitation to join another workspace. **If the logged in account's email address is different than that which the invitation was sent to, the invitation will fail**. 

This issue can be resolved by either:

- Have the developer logout, re-accept the invitation, and create a new account.
- Cancel the invitation and resend a new one to the developer's account email address.

