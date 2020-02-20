# Color variant organization and naming

Each part of a color variant name refers to a category. When strung together, the combination of categories defines the element that the color is intended to be applied to.

The format of a color variant name is the UI element accompanied by any modifiers that give us information about the element and affect the way it looks. The modifiers belong to categories and are strung in a specific order.

**[Element]** + **[Status]** + **[Emphasis]** + **[State]**

Examples:

- **[border]** + **[critical]** + [n/a] + **[disabled]** = border critical disabled
- **[action]** + [n/a] + **[primary]** + **[pressed]** = action primary pressed

## Categories

![Table of categories](/design-language-documentation/assets/namingcategories.png)

The same color in the palette can have multiple names because of the different roles it plays in the color system. The naming conventions teach people the purpose of the color and where they should be applied. This strategy should reduce the inconsistent application of colors to shared behaviors throughout the system, and ultimately, make Shopify feel more crafted and familiar.

To determine the name of a color that should be applied to a part of the UI, start with element and add on any modifiers from the status, emphasis, and state categories.

### Element

The specific part of the UI that a color is applied to

- background
- surface
- border
- icon
- text
- interactive
- action

### Status

An indication that calls a user’s attention for a specific purpose

- critical
- warning
- highlight
- success
- positive
- negative

### Emphasis

An element’s level of relative importance

- primary
- secondary
- subdued

### State

The interactive state of an element

- hovered
- disabled
- pressed
- error
- selected
- focused

## Visual examples

To see examples of how color roles relate to variants how the colors are applied in the UI, see [Color roles and variants](/design-language-documentation/color-roles-and-variants.md#visual-examples).

## Related pages

- [Shopify's design language](/design-language-documentation/index.md)
- [Color system](/design-language-documentation/color-system/index.md)
- [Color roles and variants](/design-language-documentation/color-system/color-roles-and-variants.md)
- [Dark and light schemes](/design-language-documentation/color-system/schemes.md)
- [Accessibility](/design-language-documentation/color-system/accessibility.md)
- [Glossary](/design-language-documentation/glossary.md)
