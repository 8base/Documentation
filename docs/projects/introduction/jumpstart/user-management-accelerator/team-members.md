# Team Managment Accelerator - Team Members Page

![Team Members Page](../assets/teamMembersPage.png)

The Team Members page in the User Management Accelerator provides a comprehensive interface for managing users within your application. This page allows you to perform CRUD (Create, Read, Update, Delete) operations on user profiles and includes several features for enhanced usability.

Please note that if you wish to view/edit, or create a user, you will be redirected to a dedicated user management page for these specific actions. The Team Members page primarily serves as a central hub for managing user profiles and applying filters to user data.

- [User Profile Page](./user-profile.md)
- [User Create Page](./user-create.md)

## User Management Features

**User Filtering**: The Team Members page offers user filtering options, allowing you to filter users based on their roles or status. This feature simplifies the process of finding specific users within your application.

**View Modes**: Users can choose between two view modes - Grid and Table (default). Both modes use the same underlying data but offer different visualization options to accommodate varying preferences.

# Requests

## Get Users

The `accUsersGet` GraphQL query is employed to retrieve user data, including profiles and associated information. This query provides the data displayed on the Team Members page, allowing users to view and manage user profiles.

## Get Users Filter Values

The `accUsersFilterValues` GraphQL query is utilized to obtain filter values for user roles and status. It provides the necessary data for populating filter options, enabling users to refine their search criteria and streamline user management.

## User Update

The function `accUserUpdate` is called when you click on deactivate/activate a user.

## User Delete

The function `accUserDelete` is called when you click on delete a user, and the modal opens and you confirm that want to delete the selected user.

The Team Members page in the User Management Accelerator is a powerful tool for efficiently managing user profiles, roles, and status within your application. Whether you're creating, updating, or deleting user profiles, this page offers a user-friendly interface and convenient features to enhance your user management experience.