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
// - projects/frontend/connecting-to-data-sources-component-library-introduction
// - projects/frontend/custom-components-component-library-introduction
// - projects/frontend/custom-components-component-library-setting-up-your-local-development-environment
// - projects/frontend/custom-components-component-library-spec-tbd

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

// KEY NAME IS INDEX IN LIST
const ParkingLot = {
  7: {
    type: 'category',
    label: 'Custom Components',
    items: [
      'projects/frontend/custom-components-introduction',
      'projects/frontend/custom-components-setting-up-your-local-development-environment',
      'projects/frontend/custom-components-spec-tbd',
    ],
  },
  11: {
    type: 'category',
    label: 'Adding CDNs and Libraries',
    items: [
      'projects/frontend/adding-cdns-and-libraries-calling-frontend-functions-introduction',
      'projects/frontend/adding-cdns-and-libraries-calling-frontend-functions-adding-removing-cdns',
      'projects/frontend/adding-cdns-and-libraries-calling-frontend-functions-adding-removing-libraries',
      'projects/frontend/adding-cdns-and-libraries-calling-frontend-functions-how-to-use-a-cdn-library-module-in-an-app',
    ],
  },
  12: {
    type: 'category',
    label: 'Triggering Events in the App',
    items: [
      'projects/frontend/triggering-events-in-the-app-calling-frontend-functions-introduction',
      'projects/frontend/triggering-events-in-the-app-calling-frontend-functions-specifying-events-in-editor',
      'projects/frontend/triggering-events-in-the-app-calling-frontend-functions-managing-events-on-components-and-requests',
      'projects/frontend/triggering-events-in-the-app-calling-frontend-functions-triggering-events-in-custom-frontend-logic',
    ],
  },
  13: {
    type: 'category',
    label: 'Authenticating App Users',
    items: [
      'projects/frontend/authenticating-app-users-calling-frontend-functions-introduction',
      {
        type: 'category',
        label: 'Supported Authentication Strategies',
        items: [
          'projects/frontend/authenticating-app-users-supported-authentication-strategies-how-to-setup-authentication-for-json-web-tokens',
          'projects/frontend/authenticating-app-users-supported-authentication-strategies-how-to-setup-authentication-for-0auth',
          'projects/frontend/authenticating-app-users-supported-authentication-strategies-how-to-setup-authentication-for-hosted-login-w-redirect',
          'projects/frontend/authenticating-app-users-supported-authentication-strategies-how-to-setup-authentication-for-basic-email-password',
        ],
      },
      'projects/frontend/authenticating-app-users-supported-authentication-strategies-setting-up-protected-pages-in-app-builder',
      'projects/frontend/authenticating-app-users-supported-authentication-strategies-testing-authentication-in-development-mode',
    ],
  },
  16: {
    type: 'category',
    label: 'Handling Errors and Debugging',
    items: [
      'projects/frontend/handling-errors-and-debugging-supported-authentication-strategies-introduction',
      'projects/frontend/handling-errors-and-debugging-supported-authentication-strategies-reading-and-fixing-app-errors',
      'projects/frontend/handling-errors-and-debugging-supported-authentication-strategies-adding-validations-and-custom-errors',
      {
        type: 'category',
        label: 'Handling Errors/Failures in the Editor',
        items: [
          'projects/frontend/handling-errors-and-debugging-handling-errors-failures-in-the-editor-displaying-form-errors-to-app-users',
          'projects/frontend/handling-errors-and-debugging-handling-errors-failures-in-the-editor-handling-request-errors-in-app',
        ],
      },
    ],
  },
  17: {
    type: 'category',
    label: 'Global App Settings',
    items: [
      'projects/frontend/global-app-settings-handling-errors-failures-in-the-editor-introduction',
      'projects/frontend/global-app-settings-handling-errors-failures-in-the-editor-global-app-settings-interface',
      'projects/frontend/global-app-settings-handling-errors-failures-in-the-editor-general-settings',
      'projects/frontend/global-app-settings-handling-errors-failures-in-the-editor-using-custom-domains',
      'projects/frontend/global-app-settings-handling-errors-failures-in-the-editor-seeing-app-activity-history',
      'projects/frontend/global-app-settings-handling-errors-failures-in-the-editor-managing-seo-in-app-builder',
      'projects/frontend/global-app-settings-handling-errors-failures-in-the-editor-managing-app-billing',
      {
        type: 'category',
        label: 'Inviting/Managing Collaborators',
        items: [
          'projects/frontend/global-app-settings-inviting-managing-collaborators-assigning-collaborators-roles',
          'projects/frontend/global-app-settings-inviting-managing-collaborators-revoking-access-from-collaborators',
        ],
      },
    ],
  },
  18: {
    type: 'category',
    label: 'Setting Role-Based Access Controls and Frontend Permissions',
    items: [
      'projects/frontend/setting-rolebased-access-controls-and-frontend-permissions-inviting-managing-collaborators-introduction',
      'projects/frontend/setting-rolebased-access-controls-and-frontend-permissions-inviting-managing-collaborators-developer-permissions-in-the-editor',
      'projects/frontend/setting-rolebased-access-controls-and-frontend-permissions-inviting-managing-collaborators-user-permissions-in-the-frontend-(spec-tbd)',
    ],
  },
};

const sidebars = {
  frontendDocsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'projects/frontend/getting-started-introduction',
        'projects/frontend/getting-started-what-is-app-builder',
        'projects/frontend/getting-started-building-fullstack-gotomarket-apps-on-8base',
      ],
    },
    {
      type: 'category',
      label: 'Building Front-ends App Builder Walkthrough',
      items: [
        'projects/frontend/building-frontends-app-builder-walkthrough-introduction',
        'projects/frontend/building-frontends-app-builder-walkthrough-selecting-a-design-theme',
        'projects/frontend/building-frontends-app-builder-walkthrough-managing-app-pages',
        'projects/frontend/building-frontends-app-builder-walkthrough-dragging-and-dropping-components',
        'projects/frontend/building-frontends-app-builder-walkthrough-connecting-to-a-data-source-8base-be-workspace',
        'projects/frontend/building-frontends-app-builder-walkthrough-accessing-frontend-data',
        'projects/frontend/building-frontends-app-builder-walkthrough-deploying-publishing-an-app',
      ],
    },
    {
      type: 'category',
      label: 'App Editor',
      items: [
        'projects/frontend/app-editor-introduction',
        {
          type: 'category',
          label: 'Understanding the App Builder Interface',
          items: [
            'projects/frontend/app-editor-understanding-the-app-builder-interface-editor-header-menu-tools',
            'projects/frontend/app-editor-understanding-the-app-builder-interface-editor-page-canvas',
            'projects/frontend/app-editor-understanding-the-app-builder-interface-editor-hidden-canvas',
            'projects/frontend/app-editor-understanding-the-app-builder-interface-editor-components-drawer',
            'projects/frontend/app-editor-understanding-the-app-builder-interface-editor-page-context-menu',
            'projects/frontend/app-editor-understanding-the-app-builder-interface-editor-settings-and-global-shortcuts',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Custom App Styling',
      items: [
        'projects/frontend/custom-app-styling-introduction',
        'projects/frontend/custom-app-styling-understanding-the-app-builder-interface-using-a-css-design-framework',
        'projects/frontend/custom-app-styling-understanding-the-app-builder-interface-configurations-in-the-theme-editor',
        'projects/frontend/custom-app-styling-understanding-the-app-builder-interface-adding-custom-fonts-and-icons-to-your-app',
        {
          type: 'category',
          label: 'Creating a Global App Theme',
          items: [
            'projects/frontend/custom-app-styling-creating-a-global-app-theme-introduction',
            'projects/frontend/custom-app-styling-creating-a-global-app-theme-exporting-importing-app-themes',
          ],
        },
        'projects/frontend/custom-app-styling-creating-a-global-app-theme-setting-default-styles-on-components',
        'projects/frontend/custom-app-styling-creating-a-global-app-theme-component-styling-settings',
      ],
    },
    {
      type: 'category',
      label: 'Responsive Design in App Builder',
      items: [
        'projects/frontend/responsive-design-in-app-builder-introduction',
        'projects/frontend/responsive-design-in-app-builder-managing-media-query-definitions',
        'projects/frontend/responsive-design-in-app-builder-writing-custom-media-query-rules',
        {
          type: 'category',
          label: 'The Viewport',
          items: [
            'projects/frontend/responsive-design-in-app-builder-changing-the-viewport',
            'projects/frontend/responsive-design-in-app-builder-changing-the-viewport-setting-a-mobile-viewport',
            'projects/frontend/responsive-design-in-app-builder-changing-the-viewport-setting-a-tablet-viewport',
            'projects/frontend/responsive-design-in-app-builder-changing-the-viewport-setting-a-desktop-viewport',
            'projects/frontend/responsive-design-in-app-builder-changing-the-viewport-setting-a-custom-viewport',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Application Layouts',
      items: [
        'projects/frontend/application-layouts-introduction',
        'projects/frontend/application-layouts-creating-and-editing-layouts',
        // "projects/frontend/application-layouts-adding-nested-layouts"
      ],
    },
    {
      type: 'category',
      label: 'App Navigation',
      items: [
        'projects/frontend/app-navigation-introduction',
        {
          type: 'category',
          label: 'App Pages States and Settings',
          items: [
            'projects/frontend/app-navigation-create-and-editing-app-pages',
            'projects/frontend/app-navigation-create-and-editing-app-pages-page-url-settings',
            'projects/frontend/app-navigation-create-and-editing-app-pages-access-states-for-routes',
            'projects/frontend/app-navigation-create-and-editing-app-pages-using-url-parameters',
            // "projects/frontend/app-navigation-create-and-editing-app-pages-handling-redirects",
            // "projects/frontend/app-navigation-create-and-editing-app-pages-using-url-query-parameters",
            'projects/frontend/app-navigation-create-and-editing-app-pages-using-url-fragment-parameters',
            'projects/frontend/app-navigation-create-and-editing-app-pages-how-to-create-layouts',
            'projects/frontend/app-navigation-create-and-editing-app-pages-adding-logic-to-navigation-events',
            'projects/frontend/app-navigation-create-and-editing-app-pages-using-metadata-stored-on-pages',
          ],
        },
        'projects/frontend/app-navigation-404-and-error-pages',
      ],
    },
    {
      type: 'category',
      label: 'App Components',
      items: [
        'projects/frontend/app-components-introduction',
        'projects/frontend/app-components-customizing-app-builder-components',
        'projects/frontend/app-components-using-component-property-inputs',
        'projects/frontend/app-components-customizing-styling-on-components',
        'projects/frontend/app-components-setting-event-listeners-on-components',
        'projects/frontend/app-components-component-categories',
        'projects/frontend/app-components-component-groups',
        {
          type: 'category',
          label: 'Components',
          items: [
            'projects/frontend/app-components-common-component-properties',
            'projects/frontend/app-components-common-component-style-attributes',
            {
              type: 'category',
              label: 'Layout Components',
              items: [
                'projects/frontend/app-components-layout-components-async-content',
                'projects/frontend/app-components-layout-components-card',
                'projects/frontend/app-components-layout-components-container',
                'projects/frontend/app-components-layout-components-footer',
                'projects/frontend/app-components-layout-components-header',
                'projects/frontend/app-components-layout-components-menu',
                'projects/frontend/app-components-layout-components-paper',
                'projects/frontend/app-components-layout-components-popper',
              ],
            },
            {
              type: 'category',
              label: 'Input Components',
              items: [
                'projects/frontend/app-components-input-components-form-block',
                'projects/frontend/app-components-input-components-autocomplete',
                'projects/frontend/app-components-input-components-button',
                'projects/frontend/app-components-input-components-checkbox',
                'projects/frontend/app-components-input-components-date-picker',
                'projects/frontend/app-components-input-components-field-array',
                'projects/frontend/app-components-input-components-file-picker-8base',
                'projects/frontend/app-components-input-components-file-upload',
                'projects/frontend/app-components-input-components-multiselect',
                'projects/frontend/app-components-input-components-radio',
                'projects/frontend/app-components-input-components-radio-group',
                'projects/frontend/app-components-input-components-select',
                'projects/frontend/app-components-input-components-slider',
                'projects/frontend/app-components-input-components-switch',
                'projects/frontend/app-components-input-components-text-field',
                'projects/frontend/app-components-input-components-time-picker',
                'projects/frontend/app-components-input-components-toggle-button',
                'projects/frontend/app-components-input-components-toggle-button-group',
              ],
            },
            {
              type: 'category',
              label: 'Data Components',
              items: [
                'projects/frontend/app-components-data-components-looper',
              ],
            },
            {
              type: 'category',
              label: 'Other Components',
              items: [
                'projects/frontend/app-components-other-components-accordion',
                'projects/frontend/app-components-other-components-alert',
                'projects/frontend/app-components-other-components-avatar',
                'projects/frontend/app-components-other-components-badge',
                'projects/frontend/app-components-other-components-breadcrumbs',
                'projects/frontend/app-components-other-components-chip',
                'projects/frontend/app-components-other-components-divider',
                'projects/frontend/app-components-other-components-heading',
                'projects/frontend/app-components-other-components-icon',
                'projects/frontend/app-components-other-components-icon-button',
                'projects/frontend/app-components-other-components-image',
                'projects/frontend/app-components-other-components-link',
                'projects/frontend/app-components-other-components-list',
                'projects/frontend/app-components-other-components-list-item',
                'projects/frontend/app-components-other-components-nav-list-item',
                'projects/frontend/app-components-other-components-table',
                'projects/frontend/app-components-other-components-text',
                'projects/frontend/app-components-other-components-tooltip',
                'projects/frontend/app-components-other-components-typography',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Connecting to Data Sources',
      items: [
        'projects/frontend/connecting-to-data-sources-introduction',
        {
          type: 'category',
          label: 'Creating API Connections',
          items: [
            'projects/frontend/connecting-to-data-sources-creating-api-connections',
            'projects/frontend/connecting-to-data-sources-creating-api-connections-connecting-to-an-8base-be-workspace',
            'projects/frontend/connecting-to-data-sources-creating-api-connections-connecting-to-a-graphql-api',
            'projects/frontend/connecting-to-data-sources-creating-api-connections-connecting-to-a-rest-api',
          ],
        },
        {
          type: 'category',
          label: 'How to make API Calls (Requests)',
          items: [
            'projects/frontend/connecting-to-data-sources-how-to-make-api-calls',
            'projects/frontend/connecting-to-data-sources-how-to-make-api-calls-how-to-execute-a-graphql-query-mutation',
            'projects/frontend/connecting-to-data-sources-how-to-make-api-calls-how-to-execute-a-rest-api-call',
          ],
        },
        'projects/frontend/connecting-to-data-sources-send-form-data-with-an-api-request',
      ],
    },
    {
      type: 'category',
      label: 'Data in the Frontend (State)',
      items: [
        'projects/frontend/data-in-the-frontend-introduction',
        'projects/frontend/data-in-the-frontend-understanding-local-vs-global-state-objects',
        {
          type: 'category',
          label: 'Data scopes for App Builder Elements',
          items: [
            'projects/frontend/data-in-the-frontend-data-scopes-for-app-builder-elements-layouts',
            'projects/frontend/data-in-the-frontend-data-scopes-for-app-builder-elements-views',
            'projects/frontend/data-in-the-frontend-data-scopes-for-app-builder-elements-requests',
            'projects/frontend/data-in-the-frontend-data-scopes-for-app-builder-elements-resource',
            'projects/frontend/data-in-the-frontend-data-scopes-for-app-builder-elements-functions',
            'projects/frontend/data-in-the-frontend-data-scopes-for-app-builder-elements-components',
            // "projects/frontend/data-in-the-frontend-(state)-data-scopes-for-app-builder-elements-theme"
          ],
        },
        'projects/frontend/data-in-the-frontend-getting-and-setting-state-data',
        'projects/frontend/data-in-the-frontend-adding-custom-state-data-entries',
      ],
    },
    {
      type: 'category',
      label: 'Custom Frontend Logic',
      items: [
        'projects/frontend/custom-frontend-logic-introduction',
        {
          type: 'category',
          label: 'Creating custom frontend functions',
          items: [
            'projects/frontend/custom-frontend-logic-creating-custom-frontend-functions',
          ],
        },
        {
          type: 'category',
          label: 'Calling frontend functions',
          items: [
            'projects/frontend/custom-frontend-logic-calling-frontend-functions',
            'projects/frontend/custom-frontend-logic-calling-a-function-from-an-event',
            'projects/frontend/custom-frontend-logic-calling-a-function-from-a-callback',
            'projects/frontend/custom-frontend-logic-calling-a-function-from-a-function',
          ],
        },
        'projects/frontend/custom-frontend-logic-using-installed-js-libraries-in-scripts',
      ],
    },
    {
      type: 'category',
      label: 'Triggering Events in the App',
      items: [
        'projects/frontend/triggering-events-in-the-app-introduction',
        'projects/frontend/triggering-events-in-the-app-specifying-events-in-editor',
        'projects/frontend/triggering-events-in-the-app-managing-events-on-components-and-requests',
        'projects/frontend/triggering-events-in-the-app-triggering-events-in-custom-frontend-logic',
      ],
    },
    {
      type: 'category',
      label: 'Images and Files in App Builder',
      items: [
        'projects/frontend/images-and-files-in-app-builder-introduction',
        'projects/frontend/images-and-files-in-app-builder-uploading-an-image-or-file',
        'projects/frontend/images-and-files-in-app-builder-displaying-an-image-or-file-on-a-page',
        // "projects/frontend/images-and-files-in-app-builder-available-attributes-on-uploaded-files",
        // "projects/frontend/images-and-files-in-app-builder-available-attributes-on-uploaded-images"
      ],
    },
    {
      type: 'category',
      label: 'Publishing Apps',
      items: [
        'projects/frontend/publishing-apps-introduction',
        'projects/frontend/publishing-apps-making-an-app-public',
        'projects/frontend/publishing-apps-seeing-deployment-history',
        // "projects/frontend/publishing-apps-deployment-settings",
        // "projects/frontend/publishing-apps-cname-records-for-custom-domain",
        // "projects/frontend/publishing-apps-adding-ssl-to-custom-domains",
        // "projects/frontend/publishing-apps-publishing-apps-to-a-cdn"
      ],
    },
  ],
};

module.exports = sidebars;
