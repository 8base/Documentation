// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const fs = require('fs');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const redirects = JSON.parse(fs.readFileSync('redirects.json', 'utf8'));

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '8base Docs',
  tagline: '8base Platform Documentation',
  url: 'https://docs.8base.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '8base', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars/sidebar.js'),
          routeBasePath: '/',
          sidebarCollapsible: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/8base/Documentation/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/8base/Documentation/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        style: 'dark',
        logo: {
          alt: '8base Logo',
          src: 'img/logo.svg',
          href: '/',
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Documentation',
            // activeBaseRegex: `^(?!/changelog)`, // This regex means "all paths except for /changelog"
          },
          {
            href: 'https://www.8base.com/8base-academy',
            position: 'left',
            label: 'Academy',
          },
          {
            href: 'https://community.8base.com/',
            position: 'left',
            label: 'Community',
          },
          {
            href: 'https://www.8base.com/',
            position: 'left',
            label: '8base.com',
          },
          {
            href: 'https://app.8base.com/auth/login',
            label: ' ',
            position: 'right',
            className: 'button button--secondary button--lg signin',
          },
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '4VK26RCW37',
        // Public API key: it is safe to commit it
        apiKey: '4bbfa15cdf087fe84a02bc76e921ba11',

        indexName: '8baseDocs',

        version: {
          // You can send raw values without `selectors`
          defaultValue: ['latest', 'stable'],
        },
        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        // searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)

        //... other Algolia params
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [['@docusaurus/plugin-client-redirects', { redirects }]],
  scripts: ['/scripts/fullstory.js'],
};

module.exports = config;
