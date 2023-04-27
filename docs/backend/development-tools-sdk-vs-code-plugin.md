---
id: 'development-tools-sdk-vs-code-plugin'
sidebar_label: 'Vs Code Plugin'
redirect_from: '/backend/development-tools/sdk/vs-code-plugin'
slug: '/projects/backend/development-tools/sdk/vs-code-plugin'
---

# VS Code Plugin

For VS Code users we recommend installing the [Apollo GraphQL extension](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo). It significantly improve the development experience by providing schema-based GraphQL autocompletion, query validation, syntax highlighting and more.

Once you installed the plugin create file `apollo.config.js` in the root of the project:

```javascript
module.exports = {
  client: {
    service: {
      name: '8base',
      url: 'https://8BASE_API_URL',
    },
    includes: ['src/**/*.{ts,tsx,js,jsx}'],
  },
};
```
