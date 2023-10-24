---
id: 'sidebar-control'
sidebar_label: 'Sidebar Control'
slug: '/introduction/jumpstart/navigation-accelerator/sidebar-control'
---
# Sidebar Control

The Navigation Accelerator plays a pivotal role in controlling and organizing the sidebar navigation of your application. Let's delve into how the Navigation Accelerator manages and configures the sidebar structure, ensuring a user-friendly and intuitive navigation experience.

## Benefits of Sidebar Control

- **Structural Organization**: The Navigation Accelerator provides a structured approach to organize sidebar elements, improving the overall user experience.

- **Customization**: It allows for easy customization of sidebar items, enabling developers to tailor navigation to the application's specific requirements.

- **Intuitive Navigation**: A well-structured sidebar ensures that users can quickly and intuitively navigate through different sections of the application.

<!-- Now, let's create a separate Markdown document for "Navigation Accelerator - Breadcrumbs Management." -->

## Sidebar Configuration

The sidebar structure is defined using a structured JSON object. Here is an excerpt of this configuration:

```json
[
  {
    "items": [
      {
        "icon": "Home",
        "path": "/",
        "label": "Home",
        "expanded": false,
        "subitems": []
      }
    ],
    "identifier": "top"
  },
  {
    "items": [
      {
        "icon": "Widgets",
        "path": "/module-a",
        "label": "Module A",
        "expanded": false,
        "subitems": []
      },
      {
        "icon": "Widgets",
        "path": "/module-b",
        "label": "Module B",
        "expanded": false,
        "subitems": []
      },
      {
        "icon": "Widgets",
        "path": "/module-c",
        "label": "Module C",
        "expanded": false,
        "subitems": []
      }
    ],
    "identifier": "middle"
  },
  {
    "items": [
      {
        "icon": "Settings",
        "path": "/settings/team-members",
        "label": "Settings",
        "expanded": false,
        "subitems": [
          {
            "icon": "Group",
            "path": "/settings/team-members",
            "label": "Team Members",
            "relatedPaths": [
              {
                "path": "/user/:id",
                "label": "User Profile"
              }
            ]
          }
        ]
      }
    ],
    "identifier": "bottom"
  }
  // ...
]
```

### Key Elements

- Each sidebar section is represented as an object within the array.
- The `items` property contains an array of sidebar items, each with properties like `icon`, `path`, `label`, `expanded`, and `subitems`.
- The `identifier` is a unique identifier for each section.

### Understanding the `relatedPaths` Key

Within the sidebar configuration, the `relatedPaths` key serves a vital role in defining the relationship between different navigation sections. 

The `relatedPaths` feature enhances the navigation experience by allowing users to seamlessly switch between related sections without needing to return to a higher-level menu.

By using the `relatedPaths` key judiciously in your sidebar configuration, you can create a more intuitive and user-friendly navigation structure within your application.

The sidebar configuration defines the hierarchy of navigation elements, their labels, and links.

#### Purpose 
The `relatedPaths` key allows you to establish connections between related sections or pages within your application's navigation.

When a user navigates to a specific page represented by a `path`, the `relatedPaths` key defines other sections or pages that are closely related and accessible from that page.

#### Usage Example

Consider the scenario in which you have a **Team Members** section within your **Settings** area, as shown in the example configuration. In this case, you might want to provide quick access to individual user profiles from the **Team Members** section.

In the given example, when a user is viewing the **Team Members** section (path: `/settings/team-members`) and clicks on another user's profile (path: `/user/:id`), the `relatedPaths` key specifies that the **User Profile** should be included in the breadcrumb trail. This makes it easy for users to navigate back and forth between related sections.


## Sidebar and Breadcrumbs

The sidebar and breadcrumbs work together to create a seamless and user-friendly navigation experience. Here's how they depend on each other:

### Sidebar Structure Guides Navigation

- The sidebar configuration defines the hierarchy and structure of navigation elements.
- Sidebar items determine the available routes and sections in your application.
- A well-organized sidebar ensures users can easily locate and access different sections.

### Breadcrumbs Clarify the User's Path

- Breadcrumbs provide users with a clear trail of their navigation path.
- They help users understand their current location within the application.
- Breadcrumbs are generated based on the sidebar structure, ensuring consistency.

For more information, see [Breadcrumbs Management](./breadcrumbs-management.md).

