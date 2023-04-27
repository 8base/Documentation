---
id: 'custom-frontend-logic-using-installed-js-libraries-in-scripts'
sidebar_label: 'Using Installed JS LIbraries in scripts'
redirect_from: '/frontend/custom-frontend-logic/using-installed-js-libraries-in-scripts'
slug: '/projects/frontend/custom-frontend-logic/using-installed-js-libraries-in-scripts'
---

# Using Installed JS LIbraries in Functions and Scripts

This article describes how developers can use installed JS LIbraries in scripts and functions

---

App Builder ships with several Javascript libraries that can perform various tasks in scripts and functions. These libraries are:

- [Lodash](https://lodash.com/): A utility library that provides various functions for manipulating objects and arrays.

- [Moment](https://momentjs.com/): A library for parsing, validating, and formatting dates.

- [Luxon](https://moment.github.io/luxon/#/): A library for working with dates and times.

- [Mathjs](https://mathjs.org/): A library for performing various mathematical operations.

Any of these libraries can be added to a project in the Settings > Libraries section. Once a library has been added, it can be used in scripts and functions by referencing the global variable created for it.

Developers have the ability to set the global variable in the "Alias" input of the installed Library. Additionally, they can select the version number that they wish to use.

![Configuring a Library](./_images/ab-triggering-events-in-the-app-calling-frontend-functions-introduction-1.png)

## Using Libraries in Code

Once a library has been installed, it can be used in code by referencing the global variable set for it.

For example, to use the Lodash library in code, the `_` global variable can be used:

```javascript
return function (userSettings) {
  globalUserConfig.setValue(
    // Using lodash "assign" method
    _.assign(
      {
        themeMode: 'dark',
        timeZone: 'GMT+5',
        local: 'en',
      },
      userSettings
    )
  );
};
```

These libraries can be thought of as being accessed and used no differently than any other Javascript code included in the project.
