/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

// These sidebar document ids do not exist:
// - frontend/connecting-to-data-sources-component-library-introduction
// - frontend/custom-components-component-library-introduction
// - frontend/custom-components-component-library-setting-up-your-local-development-environment
// - frontend/custom-components-component-library-spec-tbd

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

// KEY NAME IS INDEX IN LIST
const ParkingLot = {
  7: {
    type: "category",
    label: "Custom Components",
    items: [
      "frontend/custom-components-introduction",
      "frontend/custom-components-setting-up-your-local-development-environment",
      "frontend/custom-components-spec-tbd"
    ]
  },
  8: {
    type: "category",
    label: "Connecting to Data Sources",
    items: [
      "frontend/connecting-to-data-sources-introduction",
      {
        type: "category",
        label: "Creating API Connections",
        items: [
          "frontend/connecting-to-data-sources-creating-api-connections-connecting-to-an-8base-be-workspace",
          "frontend/connecting-to-data-sources-creating-api-connections-connecting-to-a-graphql-api",
          "frontend/connecting-to-data-sources-creating-api-connections-connecting-to-a-rest-api"
        ]
      },
      {
        type: "category",
        label: "How to make API Calls (Requests)",
        items: [
          "frontend/connecting-to-data-sources-how-to-make-api-calls-(requests)-how-to-execute-a-graphql-query-mutation",
          "frontend/connecting-to-data-sources-how-to-make-api-calls-(requests)-how-to-execute-a-rest-api-call"
        ]
      },
      "frontend/connecting-to-data-sources-how-to-make-api-calls-(requests)-send-form-data-with-an-api-request"
    ]
  },
  9: {
    type: "category",
    label: "Data in the Frontend (State)",
    items: [
      "frontend/data-in-the-frontend-(state)-how-to-make-api-calls-(requests)-introduction",
      "frontend/data-in-the-frontend-(state)-how-to-make-api-calls-(requests)-understanding-local-vs.-global-state-objects",
      {
        type: "category",
        label: "Data scopes for App Builder Elements",
        items: [
          "frontend/data-in-the-frontend-(state)-data-scopes-for-app-builder-elements-layouts",
          "frontend/data-in-the-frontend-(state)-data-scopes-for-app-builder-elements-views",
          "frontend/data-in-the-frontend-(state)-data-scopes-for-app-builder-elements-requests",
          "frontend/data-in-the-frontend-(state)-data-scopes-for-app-builder-elements-resource",
          "frontend/data-in-the-frontend-(state)-data-scopes-for-app-builder-elements-functions",
          "frontend/data-in-the-frontend-(state)-data-scopes-for-app-builder-elements-components",
          "frontend/data-in-the-frontend-(state)-data-scopes-for-app-builder-elements-theme"
        ]
      },
      "frontend/data-in-the-frontend-(state)-data-scopes-for-app-builder-elements-getting-and-setting-state-data",
      "frontend/data-in-the-frontend-(state)-data-scopes-for-app-builder-elements-adding-custom-state-data-entries"
    ]
  },
  10: {
    type: "category",
    label: "Custom Frontend Logic",
    items: [
      "frontend/custom-frontend-logic-data-scopes-for-app-builder-elements-introduction",
      {
        type: "category",
        label: "Creating custom frontend functions",
        items: [
          "frontend/custom-frontend-logic-creating-custom-frontend-functions-typed-arguments-in-frontend-functions"
        ]
      },
      {
        type: "category",
        label: "Calling frontend functions",
        items: [
          "frontend/custom-frontend-logic-calling-frontend-functions-calling-a-function-from-an-event",
          "frontend/custom-frontend-logic-calling-frontend-functions-calling-a-function-from-a-callback",
          "frontend/custom-frontend-logic-calling-frontend-functions-calling-a-function-from-a-function"
        ]
      },
      "frontend/custom-frontend-logic-calling-frontend-functions-using-installed-js-libraries-in-scripts"
    ]
  },
  11: {
    type: "category",
    label: "Adding CDNs and Libraries",
    items: [
      "frontend/adding-cdns-and-libraries-calling-frontend-functions-introduction",
      "frontend/adding-cdns-and-libraries-calling-frontend-functions-adding-removing-cdns",
      "frontend/adding-cdns-and-libraries-calling-frontend-functions-adding-removing-libraries",
      "frontend/adding-cdns-and-libraries-calling-frontend-functions-how-to-use-a-cdn-library-module-in-an-app"
    ]
  },
  12: {
    type: "category",
    label: "Triggering Events in the App",
    items: [
      "frontend/triggering-events-in-the-app-calling-frontend-functions-introduction",
      "frontend/triggering-events-in-the-app-calling-frontend-functions-specifying-events-in-editor",
      "frontend/triggering-events-in-the-app-calling-frontend-functions-managing-events-on-components-and-requests",
      "frontend/triggering-events-in-the-app-calling-frontend-functions-triggering-events-in-custom-frontend-logic"
    ]
  },
  13: {
    type: "category",
    label: "Authenticating App Users",
    items: [
      "frontend/authenticating-app-users-calling-frontend-functions-introduction",
      {
        type: "category",
        label: "Supported Authentication Strategies",
        items: [
          "frontend/authenticating-app-users-supported-authentication-strategies-how-to-setup-authentication-for-json-web-tokens",
          "frontend/authenticating-app-users-supported-authentication-strategies-how-to-setup-authentication-for-0auth",
          "frontend/authenticating-app-users-supported-authentication-strategies-how-to-setup-authentication-for-hosted-login-w-redirect",
          "frontend/authenticating-app-users-supported-authentication-strategies-how-to-setup-authentication-for-basic-email-password"
        ]
      },
      "frontend/authenticating-app-users-supported-authentication-strategies-setting-up-protected-pages-in-app-builder",
      "frontend/authenticating-app-users-supported-authentication-strategies-testing-authentication-in-development-mode"
    ]
  },
  14: {
    type: "category",
    label: "Images and Files in App Builder",
    items: [
      "frontend/images-and-files-in-app-builder-supported-authentication-strategies-introduction",
      "frontend/images-and-files-in-app-builder-supported-authentication-strategies-uploading-an-image-or-file",
      "frontend/images-and-files-in-app-builder-supported-authentication-strategies-displaying-an-image-or-file-on-a-page",
      "frontend/images-and-files-in-app-builder-supported-authentication-strategies-available-attributes-on-uploaded-files",
      "frontend/images-and-files-in-app-builder-supported-authentication-strategies-available-attributes-on-uploaded-images"
    ]
  },
  15: {
    type: "category",
    label: "Publishing Apps",
    items: [
      "frontend/publishing-apps-supported-authentication-strategies-introduction",
      "frontend/publishing-apps-supported-authentication-strategies-making-an-app-public",
      "frontend/publishing-apps-supported-authentication-strategies-seeing-deployment-history",
      "frontend/publishing-apps-supported-authentication-strategies-deployment-settings",
      "frontend/publishing-apps-supported-authentication-strategies-cname-records-for-custom-domain",
      "frontend/publishing-apps-supported-authentication-strategies-adding-ssl-to-custom-domains",
      "frontend/publishing-apps-supported-authentication-strategies-publishing-apps-to-a-cdn"
    ]
  },
  16: {
    type: "category",
    label: "Handling Errors and Debugging",
    items: [
      "frontend/handling-errors-and-debugging-supported-authentication-strategies-introduction",
      "frontend/handling-errors-and-debugging-supported-authentication-strategies-reading-and-fixing-app-errors",
      "frontend/handling-errors-and-debugging-supported-authentication-strategies-adding-validations-and-custom-errors",
      {
        type: "category",
        label: "Handling Errors/Failures in the Editor",
        items: [
          "frontend/handling-errors-and-debugging-handling-errors-failures-in-the-editor-displaying-form-errors-to-app-users",
          "frontend/handling-errors-and-debugging-handling-errors-failures-in-the-editor-handling-request-errors-in-app"
        ]
      }
    ]
  },
  17: {
    type: "category",
    label: "Global App Settings",
    items: [
      "frontend/global-app-settings-handling-errors-failures-in-the-editor-introduction",
      "frontend/global-app-settings-handling-errors-failures-in-the-editor-global-app-settings-interface",
      "frontend/global-app-settings-handling-errors-failures-in-the-editor-general-settings",
      "frontend/global-app-settings-handling-errors-failures-in-the-editor-using-custom-domains",
      "frontend/global-app-settings-handling-errors-failures-in-the-editor-seeing-app-activity-history",
      "frontend/global-app-settings-handling-errors-failures-in-the-editor-managing-seo-in-app-builder",
      "frontend/global-app-settings-handling-errors-failures-in-the-editor-managing-app-billing",
      {
        type: "category",
        label: "Inviting/Managing Collaborators",
        items: [
          "frontend/global-app-settings-inviting-managing-collaborators-assigning-collaborators-roles",
          "frontend/global-app-settings-inviting-managing-collaborators-revoking-access-from-collaborators"
        ]
      }
    ]
  },
  18: {
    type: "category",
    label: "Setting Role-Based Access Controls and Frontend Permissions",
    items: [
      "frontend/setting-rolebased-access-controls-and-frontend-permissions-inviting-managing-collaborators-introduction",
      "frontend/setting-rolebased-access-controls-and-frontend-permissions-inviting-managing-collaborators-developer-permissions-in-the-editor",
      "frontend/setting-rolebased-access-controls-and-frontend-permissions-inviting-managing-collaborators-user-permissions-in-the-frontend-(spec-tbd)"
    ]
  }
}

const sidebars = {
    frontendDocsSidebar: [
      {
        type: "category",
        label: "Getting Started",
        items: [
          "frontend/getting-started-introduction",
          "frontend/getting-started-what-is-app-builder",
          "frontend/getting-started-building-fullstack-gotomarket-apps-on-8base"
        ]
      },
      {
        type: "category",
        label: "Building Front-ends App Builder Walkthrough",
        items: [
          "frontend/building-frontends-app-builder-walkthrough-introduction",
          "frontend/building-frontends-app-builder-walkthrough-selecting-a-design-theme",
          "frontend/building-frontends-app-builder-walkthrough-managing-app-pages",
          "frontend/building-frontends-app-builder-walkthrough-dragging-and-dropping-components",
          "frontend/building-frontends-app-builder-walkthrough-connecting-to-a-data-source-8base-be-workspace",
          "frontend/building-frontends-app-builder-walkthrough-accessing-frontend-data",
          "frontend/building-frontends-app-builder-walkthrough-deploying-publishing-an-app"
        ]
      },
      {
        type: "category",
        label: "App Editor",
        items: [
          "frontend/app-editor-introduction",
          {
            type: "category",
            label: "Understanding the App Builder Interface",
            items: [
              "frontend/app-editor-understanding-the-app-builder-interface-editor-header-menu-tools",
              "frontend/app-editor-understanding-the-app-builder-interface-editor-page-canvas",
              "frontend/app-editor-understanding-the-app-builder-interface-editor-hidden-canvas",
              "frontend/app-editor-understanding-the-app-builder-interface-editor-components-drawer",
              "frontend/app-editor-understanding-the-app-builder-interface-editor-page-context-menu",
              "frontend/app-editor-understanding-the-app-builder-interface-editor-settings-and-global-shortcuts"
            ]
          }
        ]
      },
      {
        type: "category",
        label: "Custom App Styling",
        items: [
          "frontend/custom-app-styling-introduction",
          "frontend/custom-app-styling-understanding-the-app-builder-interface-using-a-css-design-framework",
          "frontend/custom-app-styling-understanding-the-app-builder-interface-configurations-in-the-theme-editor",
          "frontend/custom-app-styling-understanding-the-app-builder-interface-adding-custom-fonts-and-icons-to-your-app",
          {
            type: "category",
            label: "Creating a Global App Theme",
            items: [
              "frontend/custom-app-styling-creating-a-global-app-theme-introduction",
              "frontend/custom-app-styling-creating-a-global-app-theme-exporting-importing-app-themes"
            ]
          },
          "frontend/custom-app-styling-creating-a-global-app-theme-setting-default-styles-on-components",
          "frontend/custom-app-styling-creating-a-global-app-theme-component-styling-settings"
        ]
      },
      {
        type: "category",
        label: "Responsive Design in App Builder",
        items: [
          "frontend/responsive-design-in-app-builder-introduction",
          "frontend/responsive-design-in-app-builder-managing-media-query-definitions",
          "frontend/responsive-design-in-app-builder-writing-custom-media-query-rules",
          // {
          //   type: "category",
          //   label: "Changing the Viewport",
          //   items: [
          //     "frontend/responsive-design-in-app-builder-changing-the-viewport-setting-a-mobile-viewport",
          //     "frontend/responsive-design-in-app-builder-changing-the-viewport-setting-a-tablet-viewport",
          //     "frontend/responsive-design-in-app-builder-changing-the-viewport-setting-a-desktop-viewport",
          //     "frontend/responsive-design-in-app-builder-changing-the-viewport-setting-a-custom-viewport"
          //   ]
          // }
        ]
      },
      {
        type: "category",
        label: "Application Layouts",
        items: [
          "frontend/application-layouts-introduction",
          "frontend/application-layouts-creating-and-editing-layouts",
          // "frontend/application-layouts-adding-nested-layouts"
        ]
      },
      {
        type: "category",
        label: "App Navigation",
        items: [
          "frontend/app-navigation-introduction",
          {
            type: "category",
            label: "Create and Editing App Pages",
            items: [
              "frontend/app-navigation-create-and-editing-app-pages-page-url-settings",
              // "frontend/app-navigation-create-and-editing-app-pages-access-states-for-routes",
              "frontend/app-navigation-create-and-editing-app-pages-using-url-parameters",
              // "frontend/app-navigation-create-and-editing-app-pages-handling-redirects",
              // "frontend/app-navigation-create-and-editing-app-pages-using-url-query-parameters",
              // "frontend/app-navigation-create-and-editing-app-pages-using-url-fragment-parameters",
              // "frontend/app-navigation-create-and-editing-app-pages-how-to-create-layouts",
              // "frontend/app-navigation-create-and-editing-app-pages-adding-logic-to-navigation-events",
              // "frontend/app-navigation-create-and-editing-app-pages-using-metadata-stored-on-pages"
            ]
          },
          // "frontend/app-navigation-404-and-error-pages"
        ]
      },
      {
        type: "category",
        label: "App Components",
        items: [
          "frontend/app-components-introduction",
          "frontend/app-components-customizing-app-builder-components",
          "frontend/app-components-using-component-property-inputs",
          "frontend/app-components-customizing-styling-on-components",
          "frontend/app-components-setting-event-listeners-on-components",
          // {
          //   type: "category",
          //   label: "Component Library",
          //   items: [
          //     "frontend/app-components-component-library-header",
          //     "frontend/app-components-component-library-async-content",
          //     "frontend/app-components-component-library-menu",
          //     "frontend/app-components-component-library-popper",
          //     "frontend/app-components-component-library-card",
          //     "frontend/app-components-component-library-container",
          //     "frontend/app-components-component-library-drawer",
          //     "frontend/app-components-component-library-paper",
          //     "frontend/app-components-component-library-form-block",
          //     "frontend/app-components-component-library-form-autocomplete",
          //     "frontend/app-components-component-library-form-field-array",
          //     "frontend/app-components-component-library-form-checkbox",
          //     "frontend/app-components-component-library-form-switch",
          //     "frontend/app-components-component-library-form-radio-group",
          //     "frontend/app-components-component-library-form-select",
          //     "frontend/app-components-component-library-form-multiselect",
          //     "frontend/app-components-component-library-form-text-field",
          //     "frontend/app-components-component-library-form-data-picker",
          //     "frontend/app-components-component-library-autocomplete",
          //     "frontend/app-components-component-library-button",
          //     "frontend/app-components-component-library-checkbox",
          //     "frontend/app-components-component-library-radio-group",
          //     "frontend/app-components-component-library-radio",
          //     "frontend/app-components-component-library-select",
          //     "frontend/app-components-component-library-multiselect",
          //     "frontend/app-components-component-library-data-picker",
          //     "frontend/app-components-component-library-switcher",
          //     "frontend/app-components-component-library-textfield",
          //     "frontend/app-components-component-library-looper",
          //     "frontend/app-components-component-library-accordion",
          //     "frontend/app-components-component-library-alert",
          //     "frontend/app-components-component-library-table",
          //     "frontend/app-components-component-library-icon",
          //     "frontend/app-components-component-library-link",
          //     "frontend/app-components-component-library-headking",
          //     "frontend/app-components-component-library-list-item",
          //     "frontend/app-components-component-library-nav-list-item",
          //     "frontend/app-components-component-library-avatar",
          //     "frontend/app-components-component-library-divider",
          //     "frontend/app-components-component-library-breadcrums",
          //     "frontend/app-components-component-library-badge",
          //     "frontend/app-components-component-library-chip",
          //     "frontend/app-components-component-library-list",
          //     "frontend/app-components-component-library-icon-button",
          //     "frontend/app-components-component-library-tooltip",
          //     "frontend/app-components-component-library-typgraphy",
          //     "frontend/app-components-component-library-text",
          //     "frontend/app-components-component-library-image"
          //   ]
          // },
          // "frontend/app-components-component-categories",
          // "frontend/app-components-component-groups",
          // "frontend/app-components-component-consistency"
        ]
      }
    ]
  };
  
  module.exports = sidebars;
  