---
id: 'breadcrumbs-management'
sidebar_label: 'Breadcrumbs Management'
slug: '/gettingstarted/jumpstart/navigation-accelerator/breadcrumbs-management'
---
# Breadcrumbs Management

Breadcrumb management is crucial for providing users with clear navigation paths within your application. Let's explore how the accelerator generates and manages breadcrumbs to enhance your users navigation experience.

## User-Friendly Navigation

Effective breadcrumb management with the Navigation Accelerator simplifies the user's navigation journey within your application. It ensures that users can easily trace their steps and understand their current location, creating an enhanced user experience.

## Breadcrumb Generation

A JavaScript function is responsible for generating breadcrumbs based on the user's current route. Here is an overview of how this function works:

```javascript
/**
 * Generate Breadcrumbs for Navigation
 *
 * This function dynamically generates breadcrumbs based on the user's current route and the sidebar configuration.
 *
 * @param {Array} items - The array of sidebar items to search for matches.
 * @returns {Array} An array of breadcrumb objects containing label and path.
 */

  // Initialize breadcrumbLabels to store breadcrumb items
  const breadcrumbLabels = [];

  // Return only home path if currentRoute doesn't exist.
  if (!currentRoute) {
    return [{ label: 'Home', path: '/' }];
  }

  // Get the path of the current route
  const { path } = currentRoute;

  /**
   * Recursive Function to Search for Breadcrumbs
   *
   * @param {Array} items - The array of sidebar items to search for matches.
   * @returns {boolean} Returns true if a breadcrumb match is found, false otherwise.
   */
  const findBreadcrumbRecursive = (items) => {
    // Iterate through sidebar items
    for (const item of items) {
      // Check if the item's path matches the current route's path
      if (item.path === path) {
        breadcrumbLabels.push({ label: item.label, path: item.path });
        return true;
      }
      // Check subitems for a match
      if (item.subitems && item.subitems.length > 0) {
        const found = findBreadcrumbRecursive(item.subitems);
        if (found) {
          breadcrumbLabels.push({ label: item.label, path: item.path });
          return true;
        }
      }
      // Check relatedPaths for a match
      if (item.relatedPaths && item.relatedPaths.length > 0) {
        const relatedItem = item.relatedPaths.find(related => related.path === path);
        if (relatedItem) {
          breadcrumbLabels.push({ label: item.label, path: item.path });
          breadcrumbLabels.push({ label: relatedItem.label, path: relatedItem.path });
          return true;
        }
      }
    }
    return false;
  };

  // Iterate through sidebar groups to find the breadcrumb
  for (const group of items) {
    const found = findBreadcrumbRecursive(group.items);
    if (found) break;
  }

  // If no matches found, add the "Home" label to the breadcrumb
  if (breadcrumbLabels.length === 0) {
    breadcrumbLabels.push({ label: 'Home', path: '/' });
  }

  // Ensure a consistent breadcrumb order
  if (breadcrumbLabels.length >= 3) {
    return [
      breadcrumbLabels[2],
      breadcrumbLabels[0],
      breadcrumbLabels[1]
    ];
  } else {
    return breadcrumbLabels.reverse();
  }

```

### Breadcrumb Generation Process

1. The function traverses the sidebar structure to find a match between the current route's path and the sidebar items' paths.
2. When a match is found, the corresponding labels are added to the breadcrumb.
3. If no matches are found, the "Home" label is included in the breadcrumb for a seamless user experience.

### Generating and Displaying Breadcrumbs in the UI

Here's how breadcrumsb are generated and displayed in the user interface:

Example: `Settings > Team Members`

Consider the scenario where a user navigates to the **Team Members** section within the **Settings** area of your application. Here is how breadcrumbs are generated and displayed:

1. **Breadcrumbs Generation**:
   - The `generateBreadcrumbs` function dynamically creates breadcrumbs based on the user's current route and the sidebar configuration.
   - For our example, it identifies that the user is in the **Team Members** section in the **Settings** area.
   - The generated breadcrumbs array for this scenario might look like this:
     - `{ label: 'Home', path: '/' }`
     - `{ label: 'Settings', path: '/settings' }`
     - `{ label: 'Team Members', path: '/settings/team-members' }`

2. **Breadcrumbs Display**:
   - The generated breadcrumb array is used to display the breadcrumbs in the UI.
   - The breadcrumbs are typically shown near the top of the page, just below the header or navigation bar.
   - Each breadcrumb item is a clickable link that allows users to navigate back to a specific section.
   - In our example, the UI would display: **Home > Settings > Team Members** as clickable links.

### Navigating Using Breadcrumbs

Users can easily navigate backward by clicking on any of the breadcrumb links. For example, clicking on **Settings** would take them back to the **Settings** page, and clicking on **Home** would return them to the application's home page.


