# Shopify's design language [WIP]

_...to express ourselves in a familiar way across contexts so our audiences experience one Shopify_

Shopify’s design language helps teams to create products and experiences that look familiar and feel like Shopify, while giving them the flexibility to be creative. With the support of a solid foundation, we can empower teams to innovate more quickly.

The design language encompasses all the pieces that come together to help us express ourselves visually and verbally. These include:

- color
- voice and tone
- typography and spacing
- shape and depth
- illustration
- motion
- photography and videography
- icons

This documentation was created to support designers and developers in understanding and rolling out the design language internally.

🦄 Projects:

- [Design language rollout in Polaris components](https://vault.shopify.io/projects/7859)
- [Color system docs and tools for the design language rollout in the admin](https://vault.shopify.io/projects/11452)

## On this page

- [Component updates](#component-updates)
  - [Updating custom components in React](#updating-custom-components-in-react)
  - [Updating custom components in Rails](#updating-custom-components-in-rails)
- [UI Kit](#ui-kit)
  - [Color styles](#color-styles)
  - [Applying color to components](#applying-color-to-components)
- [Related pages](#related-pages)
  - [Color system](/design-language-documentation/color-system/index.md)
  - [Color roles and variants](/design-language-documentation/color-system/color-roles-and-variants.md)
  - [Color variant organization and naming](/design-language-documentation/color-system/organization-and-naming.md)
  - [Dark and light schemes](/design-language-documentation/color-system/schemes.md)
  - [Accessibility](/design-language-documentation/color-system/accessibility.md)
  - [Glossary](/design-language-documentation/color-system/glossary.md)

## Component updates

Shopify's new design language will be applied to all Polaris components in React and Rails during the rollout.

To update custom components (including forked components and Rails components with Sass that overrides default styling) see the following sections.

### Updating custom components in React

1. Add your custom components to the [tracking spreadsheet](https://docs.google.com/spreadsheets/d/1hUXmywBByL1124Nsn6OrORfgI1H2R7FX5DWliYQZW_I/edit?usp=sharing)

### Updating custom components in Rails

## UI kit

The UI kit provides visual representations of Polaris React components in Figma. Use the UI kit to prototype designs and to reference the way that color and other styles are applied to components.

[See the UI kit in Figma](link)

### New features

Some of the changes we've introduced to the UI kit include:

- documentation for global and component-specific decisions within the UI kit
- Figma-specific features like [auto layout](https://www.figma.com/blog/announcing-auto-layout/)
- the ability to set the background color on the frame instead of using rectangles
- selection colors - you can see all the color variants that are applied to a component when you click on it
- standardized focus rings - they're the same across elements and more visible than before

### Color styles

The color system uses a semantic naming structure, which means the names tell us about the purpose or use case of the colors rather than their hue. To see how colors are named and organized in the UI kit, see [Color variant organization and naming](/design-language-documentation/color-system/organization-and-naming.md).

Although the color variants have the same naming convention in Figma and in code, the way that colors are organized appears differently in Figma and on GitHub. In Figma, colors are grouped based on the UI element they apply to. On GitHub, colors are grouped based on color role, which means that colors generated from the same source value are grouped together. To learn more about color roles and variants and how they relate to each other, see [Color roles and variants](/design-language-documentation/color-system/color-roles-and-variants.md).

Another difference in Figma that doesn't appear on GitHub is the use of "default" in some color names. “Default” is added as a workaround to create groups in Figma, but isn't actually a part of the naming convention. For example, the color “surface” becomes “surface default” to make sure that it appears at the same level as colors like “surface critical” and “surface highlight”.

_A visual here showing colors in the Figma palette, illustrating how "Default" is used_

### Applying color to components

Shopify's new design language refers to colors by the role they play in the UI as opposed to their hue or Hex value. The UI kit can help us to adopt this new way of working with color by showing how color variants are named and how they map to different elements. By clicking on a component in Figma, you can see the color variants applied to it and observe the way they pattern. The colors for related UI elements have names that reflect their compatibility, for example, “action primary” (the color for a primary button) and “text on primary” (the color for the text on a primary button) go together. When color variants are applied intentionally, their values help to establish visual hierarchy, ensure accessible contrast, and distinguish UI elements and surfaces from one another.

Using color names that are independent from hue introduces complexity, however the benefits for scalability, flexibility, and accessibility are worth crafters’ efforts in learning a new system.

To learn more about the color system, see [Color system](/design-language-documentation/color-system/index.md).

## Related pages

- [Color system](/design-language-documentation/color-system/index.md)
- [Color roles and variants](/design-language-documentation/color-system/color-roles-and-variants.md)
- [Color variant organization and naming](/design-language-documentation/color-system/organization-and-naming.md)
- [Dark and light schemes](/design-language-documentation/color-system/schemes.md)
- [Accessibility](/design-language-documentation/color-system/accessibility.md)
- [Glossary](/design-language-documentation/color-system/glossary.md)
