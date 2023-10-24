# Theme Management Accelerator - Theme Customization

![Theme Customization](../assets/themeCustomization.gif)

Theme Customization is a powerful and versatile feature offered by the Theme Management Accelerator in your application. It empowers users to tailor the visual style of your application to their exact preferences, creating a personalized and visually appealing interface that enhances their overall user experience.

## Key Features

### 1. Customizing Primary and Secondary Colors

With Theme Customization, users have the ability to modify both primary and secondary color palettes. These color choices extend beyond mere aesthetics, allowing users to align the application's colors with their brand identity or personal taste. This level of customization ensures that the application seamlessly integrates into their visual landscape.

### 2. Creating Custom Variables

Theme Customization enables the creation of custom variables that are accessible throughout the entire application. These variables serve as a unified design language, ensuring consistency and coherence across various UI components. Users can define custom variables that impact global custom CSS, style properties, and even custom component-specific CSS.

### 3. Powerful Theming Capabilities

The Theme Management Accelerator leverages Material-UI's theming capabilities, providing users with access to a wide array of customization options. By referencing Material-UI's theming documentation [here](https://mui.com/material-ui/customization/theming/), users can explore and fine-tune their application's visual style with precision.

### 4. Overriding Default Styles

The colors and variables modified through Theme Customization take precedence over the default styles of Material-UI Material components used throughout the application. This ensures that the selected theming choices propagate consistently, offering users a tailored and cohesive design language.

## Implementation and Accessibility

Customizing themes within your application is an accessible and intuitive process.

1. **Color Palette**: Users can select primary and secondary color palettes, allowing them to define the application's core color scheme.

2. **Custom Variables**: Theme Customization facilitates the creation and management of custom variables. These variables are easily accessible and can be applied to global custom CSS, style properties, and custom component-specific CSS.

3. **Material-UI Theming**: Leveraging Material-UI's theming capabilities, users can explore advanced theming options, including typography, spacing, and more, by referring to the Material-UI theming documentation.

4. **Consistency Across Components**: The theming choices made by users are applied consistently to Material-UI Material components used within the application. This ensures that the customized design language extends to all parts of the user interface.

## Benefits of Theme Customization

- **Personalized Branding**: Users can align the application's visual style with their brand identity, creating a personalized and unique user experience.

- **Consistency**: Custom variables and theming options provide a unified design language, ensuring visual consistency throughout the application.

- **Granular Control**: Theme Customization empowers users with granular control over primary and secondary colors, allowing them to fine-tune their application's color palette.

- **Material-UI Integration**: The Theme Management Accelerator seamlessly integrates with Material-UI, enhancing the application's theming capabilities and providing users with access to Material-UI's extensive theming options.

## How to use it

### Style Properties

You can use the classes that you create in your components styles like colors, backgrounds, borders and all properties that you found on Style pane when editing a component.

#### **Simple class**

```js
{{"var(--primaryMain)"}}
```

#### **Variable class**

```js
{{`var(--mainBg${accThemeMode.value})`}}
```

Theme Customization in the Theme Management Accelerator offers a robust and flexible theming system that caters to a wide range of preferences and design requirements. By enabling users to customize colors, create custom variables, and leverage Material-UI theming, your application achieves a highly personalized and visually cohesive design that enhances the user experience.