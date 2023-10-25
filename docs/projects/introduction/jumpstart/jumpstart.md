---
id: 'jumpstart'
sidebar_label: 'Jumpstart your project with accelerators'
slug: '/introduction/jumpstart/jumpstart'
---
# Jumpstart your project with accelerators

Accelerators are pre-packaged functionalities that work inside of 8base’s low-code tools to help you jumpstart your application development. Accelerators work to facilitate common software application elements such as authentication, navigation, and user management.

## Naming Convention for Accelerators

At 8base, we follow a consistent naming convention for all states, requests, functions, and pages to make your development process smoother and more organized:

- **Authentication (Auth)**: Identifier for Authentication related components.
- **Navigation (Nav)**: Identifier for Navigation components.
- **User Management (User)**: Identifier for User Management components.
- **Theme Management (Theme)**: Identifier for Theme Management components.

Each accelerator's identifier is prefixed with "acc," followed by the accelerator's identifier, and then the name of the specific function, request, state, or page. Here is an example:

- `accAuthLogin`: A function related to the Authentication accelerator's login functionality.
- `accNavSidebarGroups`: A state related to the Navigation accelerator's sidebar groups.

This naming convention helps you easily identify and manage various components within your project.

## Authentication Accelerator

The Authentication Accelerator simplifies the implementation of user authentication and related pages. Use the links below to explore:

### Components

- [Login](./authentication-accelerator/login.md)
- [Signup](./authentication-accelerator/signup.md)
- [Forgot Password](./authentication-accelerator/forgot-password.md)


### States

- `accAuthUserInfo`: State related to the user's authentication information.
- `accAuthLogoutModal`: State related to the user logout confirmation modal.

## User Management Accelerator

The User Management Accelerator simplifies the implementation of user management functionality, including CRUD (Create, Read, Update, Delete) operations. Use the links below to explore:

### Components

- [User Profile](./user-management-accelerator/user-profile.md)
- [User Create](./user-management-accelerator/user-create.md)
- [Team Members](./user-management-accelerator/team-members.md)
- [My Account](./user-management-accelerator/my-account.md)

### States

- `accUserAccountSettingsAvatar`: State related to the user's account settings avatar.
- `accUserDeleteModal`: State related to the user delete confirmation modal.
- `accUserGeneralTab`: State related to the general user profile tab.
- `accUserHeaderAvatar`: State related to the user's header avatar.
- `accUserManagementTab`: State related to the user management tab.
- `accUserToDelete`: State related to the user to be deleted.

The User Management Accelerator empowers you to perform CRUD operations, making it effortless to manage members of your platform. Whether you need to create, read, update, or delete user profiles, this accelerator streamlines the process for a seamless user management experience.

## Navigation Accelerator

The Navigation Accelerator forms the backbone of your application's navigation structure, providing essential elements for easy navigation between pages. Explore the components and states below:

### Components

- [Sidebar Control](./navigation-accelerator/sidebar-control.md)
- [Breadcrumbs Managment](./navigation-accelerator/breadcrumbs-management.md)

### States

- `accNavBreadcrumbs`: State related to the breadcrumb navigation.
- `accNavSidebarGroups`: State related to the sidebar menu groups.
- `accIsSidebarOpen`: State to manage the visibility of the sidebar.

The Navigation Accelerator plays a crucial role in providing a seamless user experience by enabling efficient navigation throughout your application. Whether it's tracking your location with breadcrumbs or accessing different sections through the sidebar, this accelerator enhances the user journey.

## Theme Management Accelerator

The Theme Management Accelerator offers a consistent and visually appealing design for your application. It enables you to easily customize and manage your app's themes and styles. Explore key features below:

### Components

- [Dark Mode Support](./theme-management-accelerator/theme-management.md#dark-mode-support)
- [Adaptable Components](./theme-management-accelerator/theme-management.md#adaptable-components) 
- [Theme Customization](./theme-management-accelerator/theme-management.md#theme-customization)

### States

- `accThemeMode`: State for managing the theme mode of the entire application.

The Theme Management Accelerator empowers you to create a visually appealing and user-friendly application. Customize the look and feel of your app to match your brand or design preferences.

With these explanations, users will understand the significance of the Navigation and Theme Management Accelerators and how they contribute to the overall user experience and design of their applications.
