---
id: '05-backend-capabilities-overview'
sidebar_label: 'Backend Capabilities Overview'
slug: '/introduction/backend-capabilities-overview'
---
# Backend Capabilities Overview

Navigating your application's backend and data capabilities requires a solid understanding of the functionalities available to you. This document aims to provide you with a detailed look into these offerings.

## Data Schema

With 8base, you can construct a relational model to bolster your application. This involves defining tables and views that depict the necessary information. Tables can be associated in one-to-one, one-to-many, and many-to-many patterns, effectively addressing all potential scenarios for data representation.

When it comes to available data types for your columns, you can choose from:

-   **Text**  - Ideal for storing plain or formatted text (HTML and Markdown supported)
-   **Number**  - Available in both float and integer variations
-   **Date**  - Includes datetime
-   **Switch**  - Offers different variations of boolean or the choice from an enumeration
-   **File**  - Used for content storage
-   **Smart**  - Handles specifically formatted text like addresses or phones
-   **JSON**  - Manages hierarchical documents
-   **GEO**  - Stores geographical references

Each field has additional capabilities, such as storing multiple values, mandating specific fields, setting default values, or performing calculations.

## GraphQL API

Upon defining your data schema, 8base generates a comprehensive GraphQL API that includes:

### Queries

-   **Read one**  - Retrieves single records and their related data
-   **Read many**  - Retrieves multiple records, their related data, and, if needed, organizes those in groups

### Mutations

-   **Create**  - Adds records
-   **CreateMany**  - Adds multiple records
-   **Update**  - Modifies a record
-   **UpdateByFilter**  - Modifies multiple records that match a given criteria
-   **Delete**  - Soft-deletes a single record
-   **DeleteByFilter**  - Soft-deletes multiple records that match a given criteria
-   **Restore**  - Reverses soft-delete operations
-   **Destroy**  - Removes a single record
-   **DestroyByFilter**  - Removes multiple records that match a given criteria

### Subscriptions

This allows for real-time updates and notifies the application when a record changes. A subscription can update the app when:

-   A mutation such as create, update, or delete occurs
-   A filter match is detected
-   Specific fields are updated

## Custom Functions

Custom functions, or user-defined functions, empower developers by allowing them to create JavaScript functions tailored to their specific needs, thereby extending the generated API. These include:

### Resolvers

Resolvers offer an additional Query or Mutation to be included in the API. They can be used to integrate with third-party APIs, assist in data querying or coercion, and run custom algorithms.

### Tasks

Tasks are long-running operations that can be run on demand or on a schedule. They are ideal for batch operations or providing additional processing without risking a timeout from the caller.

### Triggers

Triggers are functions that run in response to a data mutation event, such as creating, updating, or deleting an object. They help to run important actions as callbacks to data commits without burdening client apps with web requests.

### Webhooks

Webhooks allow for the calling of custom functions as regular RESTful endpoints. They facilitate integration with a third-party service to post data back to an application using a specified URL.

## Roles and Permissions

Roles and permissions in 8base determine the specific actions a user is authorized to undertake within a project. Users can be assigned to one or multiple roles to manage their entitlement within the applications.

Permissions specify what data can be read, created, updated, or deleted and can also indicate what permissions the role has for each field. A powerful feature is the ability to define entitlements using data rules, which allows developers to set if a user can interact with a given record if that record matches certain criteria. It also outlines what custom functions can be invoked by a given role.

## Authentication

8base provides authentication services for each backend. Developers can choose which engine will handle the storage of passwords and validation of user input:

-   **8base authentication**  - Running on AWS Cognito, it provides an integrated experience within 8base without additional services.
-   **Auth0**  - For customers with existing authentication schemes with Auth0, they can integrate it into their 8base backends.
-   **OpenID**  - For developers leveraging a compliant service to manage their users' authentication needs.

The User table in 8base stores all the users, except for the passwords, which are stored in the underlying service. Developers can use a set of mutations to interact with the authentication services or, when using 8base authentication, a "hosted login", which is an external page to handle user registration and password operations.

## Continuous Integration/Continuous Deployment (CI/CD)

8base implements CI/CD through the use of the environment branching feature. This allows developers to create multiple environments within a backend to manage different stages of development, such as production, staging, and development. Each environment has its own unique URL/API endpoint.

The CI/CD workflow in 8base typically involves the following steps:

1.  **Branching**: Developers clone an existing environment to create new ones. This allows for isolated development environments for each developer or team.
2.  **Development**: Developers make changes in their respective environments, such as creating custom backend logic in JavaScript or TypeScript using the 8base CLI.
3.  **Migration**: Developers generate and review migration files for system data updates. They can switch between their environment and the parent environment to check the differences and ensure only the necessary migrations are committed.
4.  **Commit**: Developers commit their local migrations and/or custom logic to the parent environment using the 8base CLI migration commit command.
5.  **Deployment**: Controlled using the 8base CLI, the deployment can be done in different modes, such as full or migrations-only.
6.  **Validation**: The CI/CD system in 8base includes validation steps to ensure the integrity and correctness of the deployment.
7.  **Rollback**: In case of any issues or errors, developers can rollback the deployment to a previous state.

To enable CI/CD in a workspace, you need to subscribe to an 8base plan where the feature is enabled. You should also have the latest version of the 8base CLI installed.

In summary, 8base has built-in CI/CD capabilities to help developers and teams easily manage professional software quality controls when developing their applications.

