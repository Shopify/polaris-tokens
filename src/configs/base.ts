import {saturationAdjustmentFn, hueRotationFn} from '../utils';
import {Config} from '../types';

export const config: Config = {
  surface: [
    {
      name: 'background',
      description:
        'For use as a background color, in components such as Page and Frame backgrounds.',
      light: {lightness: 98.3},
      dark: {lightness: 3.3},
      meta: {
        figmaName: 'Background/Default',
      },
    },
    {
      name: 'surface',
      description:
        'For use as a background color, in components such as Card, Modal, and Popover.',
      light: {lightness: 100},
      dark: {lightness: 12.7},
      meta: {
        figmaName: 'Surface/Default',
      },
    },
    {
      name: 'surfaceNeutral',
      description: 'For use as a background color in neutral badges.',
      light: {lightness: 91},
      dark: {lightness: 21},
      meta: {
        figmaName: 'Surface Neutral/Default',
      },
    },
    {
      name: 'surfaceNeutralSubdued',
      description: 'For use as a background color in neutral banners.',
      light: {lightness: 97},
      dark: {lightness: 30},
      meta: {
        figmaName: 'Surface Neutral/Subdued',
      },
    },
    {
      name: 'surfaceSubdued',
      description:
        'For use as a subdued background color, in components such as Card, Modal, and Popover.',
      light: {lightness: 98.3},
      dark: {lightness: 10},
      meta: {
        figmaName: 'Surface/Subdued',
      },
    },
    {
      name: 'surfaceDisabled',
      description:
        'For use as a surface color on disabled interactive elements such as option list items and action list items when in a disabled state.',
      light: {lightness: 98.3},
      dark: {lightness: 10},
      meta: {
        figmaName: 'Surface/Disabled',
      },
    },
    {
      name: 'surfaceHovered',
      description:
        'For use as a surface color on interactive elements such as resource list items and action list items when in a hovered state.',
      light: {lightness: 97},
      dark: {lightness: 20},
      meta: {
        figmaName: 'Surface/Hovered',
      },
    },
    {
      name: 'surfacePressed',
      description:
        'For use as a surface color on interactive elements such as resource list items and action list items when in a pressed state.',
      light: {lightness: 92},
      dark: {lightness: 27},
      meta: {
        figmaName: 'Surface/Pressed',
      },
    },
    {
      name: 'surfaceDepressed',
      description:
        'For use as a surface color on interactive elements such as resource list items and action list items when in a depressed state.',
      light: {lightness: 62},
      dark: {lightness: 35},
      meta: {
        figmaName: 'Surface/Depressed',
      },
    },
    {
      name: 'backdrop',
      description:
        'For use as the background color of the backdrop component for navigation and modal. This color has an alpha of `0.5`.',
      light: {
        hue: 0,
        saturation: 0,
        lightness: 0,
        alpha: 0.5,
      },
      dark: {
        hue: 0,
        saturation: 0,
        lightness: 0,
        alpha: 0.5,
      },
      meta: {
        figmaName: 'Backdrop',
      },
    },
    {
      name: 'overlay',
      description:
        'For use as the background color of elements which lay on top of surfaces to obscure their contents. This color has an alpha of `0.5`.',
      light: {
        hue: 0,
        saturation: 0,
        lightness: 100,
        alpha: 0.5,
      },
      dark: {
        hue: 0,
        saturation: 0,
        lightness: 12.7,
        alpha: 0.5,
      },
      meta: {
        figmaName: 'Overlay',
      },
    },
    {
      name: 'shadowFromDimLight',
      description:
        'For use in building shadows for modals. This color has an alpha of `0.02`.',
      light: {
        lightness: 0,
        alpha: 0.2,
      },
      dark: {
        lightness: 100,
        alpha: 0.2,
      },
      meta: {
        figmaName: 'Shadow/From dim light',
      },
    },
    {
      name: 'shadowFromAmbientLight',
      description:
        'For use in building shadows for popovers, and cards. This color has an alpha of `0.05`.',
      light: {
        hue: 180,
        saturation: 5,
        lightness: 8,
        alpha: 0.05,
      },
      dark: {
        hue: 180,
        saturation: 5,
        lightness: 8,
        alpha: 0.05,
      },
      meta: {
        figmaName: 'Shadow/From ambient light',
      },
    },
    {
      name: 'shadowFromDirectLight',
      description:
        'For use in building shadows for popovers and cards. This color has an alpha of `0.15`.',
      light: {
        hue: 0,
        saturation: 0,
        lightness: 0,
        alpha: 0.15,
      },
      dark: {
        hue: 0,
        saturation: 0,
        lightness: 100,
        alpha: 0.15,
      },
      meta: {
        figmaName: 'Shadow/From direct light',
      },
    },
    {
      name: 'hintFromDirectLight',
      description: 'For use in building shadows scrollables.',
      light: {
        hue: 0,
        saturation: 0,
        lightness: 0,
        alpha: 0.15,
      },
      dark: {
        hue: 0,
        saturation: 0,
        lightness: 75,
        alpha: 0.2,
      },
      meta: {
        figmaName: 'Hint/From direct light',
      },
    },
  ],
  onSurface: [
    {
      name: 'border',
      description: 'For use as the default border on elements.',
      light: {lightness: 60},
      dark: {lightness: 35},
      meta: {
        figmaName: 'Border/Default',
      },
    },
    {
      name: 'borderNeutralSubdued',
      description: 'For use as the border on banners.',
      light: {lightness: 77},
      dark: {lightness: 35},
      meta: {
        figmaName: 'Border Neutral/Subdued',
      },
    },
    {
      name: 'borderHovered',
      description: 'Used for borders on hovered interactive elements',
      light: {lightness: 65},
      dark: {lightness: 35},
      meta: {
        figmaName: 'Border/Hovered',
      },
    },
    {
      name: 'borderDisabled',
      description: 'Used for disabled borders on interactive elements',
      light: {lightness: 85},
      dark: {lightness: 45},
      meta: {
        figmaName: 'Border/Disabled',
      },
    },
    {
      name: 'borderSubdued',
      description: 'For use as a subdued border on elements.',
      light: {lightness: 90},
      dark: {lightness: 32},
      meta: {
        figmaName: 'Border/Subdued',
      },
    },
    {
      name: 'icon',
      description: 'For use as the fill color of icons.',
      light: {lightness: 40.1},
      dark: {lightness: 70.1},
      meta: {
        figmaName: 'Icon/Default',
      },
    },
    {
      name: 'iconHovered',
      description: 'For use as the fill color of hovered icons.',
      light: {lightness: 10},
      dark: {lightness: 90},
      meta: {
        figmaName: 'Icon/Hovered',
      },
    },
    {
      name: 'iconPressed',
      description: 'For use as the fill color of pressed icons.',
      light: {lightness: 30},
      dark: {lightness: 70},
      meta: {
        figmaName: 'Icon/Pressed',
      },
    },
    {
      name: 'iconDisabled',
      description: 'For use as the fill color of disabled icons.',
      light: {lightness: 76.9},
      dark: {lightness: 36.8},
      meta: {
        figmaName: 'Icon/Disabled',
      },
    },
    {
      name: 'iconSubdued',
      description: 'For use as the fill color of subdued icons.',
      light: {lightness: 59.8},
      dark: {lightness: 52.1},
      meta: {
        figmaName: 'Icon/Subdued',
      },
    },
    {
      name: 'text',
      description: 'For use as a text color.',
      light: {lightness: 13.1},
      dark: {lightness: 90.8},
      meta: {
        figmaName: 'Text/Default',
      },
    },
    {
      name: 'textDisabled',
      description:
        'For use as a disabled text color and as a placeholder text color.',
      light: {lightness: 60},
      dark: {lightness: 48.2},
      meta: {
        figmaName: 'Text/Disabled',
      },
    },
    {
      name: 'textSubdued',
      description: 'For use as a subdued text color.',
      light: {lightness: 47.4},
      dark: {lightness: 65.1},
      meta: {
        figmaName: 'Text/Subdued',
      },
    },
  ],
  interactive: [
    {
      name: 'interactive',
      description:
        'Used for links, plain buttons, and as the fill color for selected checkboxes and radio buttons.',
      light: {lightness: 47},
      dark: {
        lightness: 65,
        saturation: saturationAdjustmentFn(11.2),
        hue: hueRotationFn(-7.1),
      },
      meta: {
        figmaName: 'Interactive/Default',
      },
    },
    {
      name: 'interactiveDisabled',
      description: 'Used for disabled links and plain buttons.',
      light: {lightness: 78, saturation: 17},
      dark: {
        lightness: 42,
      },
      meta: {
        figmaName: 'Interactive/Disabled',
      },
    },
    {
      name: 'interactiveHovered',
      description: 'Used for hovered links and plain buttons.',
      light: {lightness: 35},
      dark: {
        lightness: 70,
        saturation: saturationAdjustmentFn(11.2),
        hue: hueRotationFn(-7.1),
      },
      meta: {
        figmaName: 'Interactive/Hovered',
      },
    },
    {
      name: 'interactivePressed',
      description: 'Used for pressed links and plain buttons.',
      light: {lightness: 21},
      dark: {
        lightness: 75,
        saturation: saturationAdjustmentFn(11.2),
        hue: hueRotationFn(-7.1),
      },
      meta: {
        figmaName: 'Interactive/Pressed',
      },
    },
    {
      name: 'focused',
      description: 'For use in the focus ring on interactive elements.',
      light: {lightness: 60, saturation: saturationAdjustmentFn(11.2)},
      dark: {lightness: 42},
      meta: {
        figmaName: 'Focused/Default',
      },
    },
    {
      name: 'surfaceSelected',
      description:
        'For use as a surface color in selected interactive elements, in components such as action list and resource list.',
      light: {lightness: 97, hue: hueRotationFn(-12)},
      dark: {lightness: 4},
      meta: {
        figmaName: 'Surface Selected/Default',
      },
    },
    {
      name: 'surfaceSelectedHovered',
      description:
        'For use as a surface color in selected interactive elements that are hovered, in components such as action list and resource list.',
      light: {lightness: 96, hue: hueRotationFn(-12)},
      dark: {lightness: 11},
      meta: {
        figmaName: 'Surface Selected/Hovered',
      },
    },
    {
      name: 'surfaceSelectedPressed',
      description:
        'For use as a surface color in selected interactive elements that are pressed, in components such as action list and resource list.',
      light: {lightness: 94, hue: hueRotationFn(-10)},
      dark: {lightness: 18},
      meta: {
        figmaName: 'Surface Selected/Pressed',
      },
    },
    {
      name: 'iconOnInteractive',
      description: 'For use as a fill color for icons on interactive elements.',
      light: {lightness: 100},
      dark: {lightness: 100},
      meta: {
        figmaName: 'Icon On/Interactive',
      },
    },
    {
      name: 'textOnInteractive',
      description: 'For use as a text color on interactive elements.',
      light: {lightness: 100},
      dark: {lightness: 100},
      meta: {
        figmaName: 'Text On/Interactive',
      },
    },
  ],
  secondary: [
    {
      name: 'actionSecondary',
      description:
        'Used for secondary buttons and tertiary buttons, as well as in form elements as a background color and pontentially other secondary surfaces.',
      light: {lightness: 93},
      dark: {lightness: 34},
      meta: {
        figmaName: 'Action Secondary/Default',
      },
    },
    {
      name: 'actionSecondaryDisabled',
      description: 'Used as a disabled state for secondary buttons',
      light: {lightness: 95},
      dark: {lightness: 13},
      meta: {
        figmaName: 'Action Secondary/Disabled',
      },
    },
    {
      name: 'actionSecondaryHovered',
      description: 'Used as a hovered state for secondary buttons',
      light: {lightness: 90},
      dark: {lightness: 37},
      meta: {
        figmaName: 'Action Secondary/Hovered',
      },
    },
    {
      name: 'actionSecondaryPressed',
      description: 'Used as a pressed state for secondary buttons',
      light: {lightness: 87},
      dark: {lightness: 42},
      meta: {
        figmaName: 'Action Secondary/Pressed',
      },
    },
    {
      name: 'actionSecondaryDepressed',
      description: 'Used as a depressed state for secondary buttons',
      light: {lightness: 48},
      dark: {lightness: 47},
      meta: {
        figmaName: 'Action Secondary/Depressed',
      },
    },
  ],
  primary: [
    {
      name: 'actionPrimary',
      description:
        'Used as the background color for primary actions, and as the fill color for icons and the text color in navigation and tabs to communicate interaction states.',
      light: {lightness: 47.3},
      dark: {lightness: 47.3},
      meta: {
        figmaName: 'Action Primary/Default',
      },
    },
    {
      name: 'actionPrimaryDisabled',
      description:
        'Used as the background color for disabled primary actions, and as the fill color for icons and the text color in navigation and tabs to communicate interaction states.',
      light: {lightness: 95, saturation: 0},
      dark: {lightness: 32, saturation: 0},
      meta: {
        figmaName: 'Action Primary/Disabled',
      },
    },
    {
      name: 'actionPrimaryHovered',
      description:
        'Used as the background color for hovered primary actions, and as the fill color for icons and the text color in navigation and tabs to communicate interaction states.',
      light: {lightness: 41},
      dark: {lightness: 55},
      meta: {
        figmaName: 'Action Primary/Hovered',
      },
    },
    {
      name: 'actionPrimaryPressed',
      description:
        'Used as the background color for pressed primary actions, and as the fill color for icons and the text color in navigation and tabs to communicate interaction states.',
      light: {lightness: 35},
      dark: {lightness: 60},
      meta: {
        figmaName: 'Action Primary/Pressed',
      },
    },
    {
      name: 'actionPrimaryDepressed',
      description:
        'Used as the background color for pressed primary actions, and as the fill color for icons and the text color in navigation and tabs to communicate interaction states.',
      light: {lightness: 22},
      dark: {lightness: 65},
      meta: {
        figmaName: 'Action Primary/Depressed',
      },
    },
    {
      name: 'iconOnPrimary',
      description:
        'For use as a fill color for icons on primary actions. Not for use in icons on navigation and tabs.',
      light: {lightness: 100},
      dark: {lightness: 98},
      meta: {
        figmaName: 'Icon On/Primary',
      },
    },
    {
      name: 'textOnPrimary',
      description:
        'For use as a text color on primary actions. Not for use in text on navigation and tabs.',
      light: {lightness: 100},
      dark: {lightness: 100},
      meta: {
        figmaName: 'Text On/Primary',
      },
    },
    {
      name: 'surfacePrimarySelected',
      description:
        'Used as a surface color to indicate selected interactive states in navigation and tabs.',
      light: {lightness: 97, saturation: 20},
      dark: {lightness: 5, saturation: 30},
      meta: {
        figmaName: 'Surface Primary/Selected',
      },
    },
    {
      name: 'surfacePrimarySelectedHovered',
      description:
        'Used as a surface color to indicate selected interactive states that are hovered in navigation and tabs.',
      light: {lightness: 81, saturation: 22},
      dark: {lightness: 19, saturation: 22},
      meta: {
        figmaName: 'Surface Primary/Selected Hovered',
      },
    },
    {
      name: 'surfacePrimarySelectedPressed',
      description:
        'Used as a surface color to indicate selected interactive states that are pressed in navigation and tabs.',
      light: {lightness: 74, saturation: 22},
      dark: {lightness: 26, saturation: 22},
      meta: {
        figmaName: 'Surface Primary/Selected Pressed',
      },
    },
  ],
  critical: [
    {
      name: 'borderCritical',
      description:
        'For use as a border on critical components such as an outline on interactive elements in an error state.',
      light: {lightness: 60},
      dark: {lightness: 50},
      meta: {
        figmaName: 'Border Critical/Default',
      },
    },
    {
      name: 'borderCriticalSubdued',
      description:
        'For use as a border on critical components such as banners.',
      light: {lightness: 77, saturation: saturationAdjustmentFn(-50)},
      dark: {lightness: 50},
      meta: {
        figmaName: 'Border Critical/Subdued',
      },
    },
    {
      name: 'borderCriticalDisabled',
      description:
        'For use as a disabled border on critical components such as banners, and as an outline on interactive elements in an error state.',
      light: {lightness: 77, saturation: saturationAdjustmentFn(2.7)},
      dark: {lightness: 28},
      meta: {
        figmaName: 'Border Critical/Disabled',
      },
    },
    {
      name: 'iconCritical',
      description: 'For use as an icon fill color on top of critical elements.',
      light: {lightness: 47.3},
      dark: {lightness: 48},
      meta: {
        figmaName: 'Icon/Critical',
      },
    },
    {
      name: 'surfaceCritical',
      description:
        'For use as a surface color on critical elements including badges.',
      light: {lightness: 88},
      dark: {lightness: 12},
      meta: {
        figmaName: 'Surface Critical/Default',
      },
    },
    {
      name: 'surfaceCriticalSubdued',
      description:
        'For use as a subdued surface color on critical elements including banners.',
      light: {lightness: 97},
      dark: {lightness: 12},
      meta: {
        figmaName: 'Surface Critical/Subdued',
      },
    },
    {
      name: 'surfaceCriticalSubduedHovered',
      description:
        'For use as a surface color on critical interactive elements including action list items in a hovered state.',
      light: {lightness: 96},
      dark: {lightness: 15, saturation: 60},
      meta: {
        figmaName: 'Surface Critical/Subdued Hovered',
        figmaDescription: 'Used on action lists',
      },
    },
    {
      name: 'surfaceCriticalSubduedPressed',
      description:
        'For use as a surface color on critical interactive elements including action list items in a pressed state.',
      light: {lightness: 94},
      dark: {lightness: 22},
      meta: {
        figmaName: 'Surface Critical/Subdued Pressed',
      },
    },
    {
      name: 'surfaceCriticalSubduedDepressed',
      description:
        'For use as a surface color on critical interactive elements including action list items in a depressed state.',
      light: {lightness: 82},
      dark: {lightness: 29},
      meta: {
        figmaName: 'Surface Critical/Subdued Depressed',
      },
    },
    {
      name: 'textCritical',
      description:
        'For use as a text color in inert critical elements such as exception list. Not for use as a text color on banners and badges.',
      light: {lightness: 47.3},
      dark: {lightness: 65, saturation: 70},
      meta: {
        figmaName: 'Text/Critical',
      },
    },
    {
      name: 'actionCritical',
      description:
        'For use as the background color for destructive buttons, and as the background color for error toast messages.',
      light: {lightness: 47.5},
      dark: {lightness: 45},
      meta: {
        figmaName: 'Action Critical/Default',
      },
    },
    {
      name: 'actionCriticalDisabled',
      description:
        'For use as the background color for disabled destructive buttons, and as the background color for error toast messages.',
      light: {lightness: 95, saturation: 0},
      dark: {lightness: 41, saturation: 0},
      meta: {
        figmaName: 'Action Critical/Disabled',
      },
    },
    {
      name: 'actionCriticalHovered',
      description:
        'For use as the background color for hovered destructive buttons, and as the background color for error toast messages.',
      light: {lightness: 41, saturation: saturationAdjustmentFn(2.7)},
      dark: {lightness: 50},
      meta: {
        figmaName: 'Action Critical/Hovered',
      },
    },
    {
      name: 'actionCriticalPressed',
      description:
        'For use as the background color for pressed destructive buttons, and as the background color for error toast messages.',
      light: {lightness: 35, saturation: saturationAdjustmentFn(2.7)},
      dark: {lightness: 55},
      meta: {
        figmaName: 'Action Critical/Pressed',
      },
    },
    {
      name: 'actionCriticalDepressed',
      description:
        'For use as the background color for depressed destructive buttons, and as the background color for error toast messages.',
      light: {lightness: 22, saturation: saturationAdjustmentFn(2.7)},
      dark: {lightness: 60},
      meta: {
        figmaName: 'Action Critical/Depressed',
      },
    },
    {
      name: 'iconOnCritical',
      description: 'For use as a fill color for icons on critical actions.',
      light: {lightness: 100},
      dark: {lightness: 98},
      meta: {
        figmaName: 'Icon On/Critical',
      },
    },
    {
      name: 'textOnCritical',
      description: 'For use as a text color on critical actions.',
      light: {lightness: 100},
      dark: {lightness: 100},
      meta: {
        figmaName: 'Text On/Critical',
      },
    },
    {
      name: 'interactiveCritical',
      description:
        'For use as the text color for destructive interactive elements: links, plain buttons, error state of selected checkboxes and radio buttons, as well as a text color on destructive action list items. Not for use on critical banners and badges.',
      light: {lightness: 47.5},
      dark: {lightness: 65},
      meta: {
        figmaName: 'Interactive/Critical',
      },
    },
    {
      name: 'interactiveCriticalDisabled',
      description:
        'For use as a text color in disabled destructive plain buttons, as well as a text color on destructive action list items. Not for use on critical banners and badges.',
      light: {lightness: 72},
      dark: {lightness: 78},
      meta: {
        figmaName: 'Interactive/Critical Disabled',
      },
    },
    {
      name: 'interactiveCriticalHovered',
      description:
        'For use as a text color in hovered destructive plain buttons, as well as a text color on destructive action list items. Not for use on critical banners and badges.',
      light: {lightness: 45},
      dark: {lightness: 70},
      meta: {
        figmaName: 'Interactive/Critical Hovered',
      },
    },
    {
      name: 'interactiveCriticalPressed',
      description:
        'For use as a text color in pressed destructive plain buttons, as well as a text color on destructive action list items. Not for use on critical banners and badges.',
      light: {lightness: 21},
      dark: {lightness: 75},
      meta: {
        figmaName: 'Interactive/Critical Pressed',
      },
    },
  ],
  warning: [
    {
      name: 'borderWarning',
      description: 'For use as a border on warning components such as...',
      light: {lightness: 60},
      dark: {lightness: 50},
      meta: {
        figmaName: 'Border Warning/Default',
      },
    },
    {
      name: 'borderWarningSubdued',
      description: 'For use as a border on warning components such as banners.',
      light: {lightness: 77, saturation: saturationAdjustmentFn(-40)},
      dark: {lightness: 50},
      meta: {
        figmaName: 'Border Warning/Subdued',
      },
    },
    {
      name: 'iconWarning',
      description: 'For use as an icon fill color on top of warning elements.',
      light: {lightness: 60},
      dark: {lightness: 34},
      meta: {
        figmaName: 'Icon/Warning',
      },
    },
    {
      name: 'surfaceWarning',
      description:
        'For use as a surface color on warning elements including badges.',
      light: {lightness: 88},
      dark: {lightness: 50},
      meta: {
        figmaName: 'Surface Warning/Default',
        figmaDescription: 'Use for badges',
      },
    },
    {
      name: 'surfaceWarningSubdued',
      description:
        'For use as a subdued surface color on warning elements including banners.',
      light: {lightness: 97},
      dark: {lightness: 26, saturation: 71},
      meta: {
        figmaName: 'Surface Warning/Subdued',
        figmaDescription: 'Used for banners',
      },
    },
    {
      name: 'textWarning',
      description:
        'For use as a text color in inert critical elements such as exception list. Not for use as a text color on banners and badges.',
      light: {lightness: 47.4},
      dark: {lightness: 64.9},
      meta: {
        figmaName: 'Text/Warning',
      },
    },
  ],
  highlight: [
    {
      name: 'borderHighlight',
      description: 'For use as a border on informational components such as...',
      light: {lightness: 60},
      dark: {lightness: 60},
      meta: {
        figmaName: 'Border Highlight/Default',
      },
    },
    {
      name: 'borderHighlightSubdued',
      description:
        'For use as a border on informational components such as banners.',
      light: {lightness: 77, saturation: saturationAdjustmentFn(-40)},
      dark: {lightness: 60},
      meta: {
        figmaName: 'Border Highlight/Subdued',
      },
    },
    {
      name: 'iconHighlight',
      description:
        'For use as an icon fill color on top of informational elements.',
      light: {lightness: 60, saturation: saturationAdjustmentFn(19.6)},
      dark: {lightness: 42},
      meta: {
        figmaName: 'Icon/Highlight',
      },
    },
    {
      name: 'surfaceHighlight',
      description:
        'For use as a surface color on information elements including badges.',
      light: {lightness: 88, saturation: saturationAdjustmentFn(-20.4)},
      dark: {lightness: 40, saturation: 100},
      meta: {
        figmaName: 'Surface Highlight/Default',
      },
    },
    {
      name: 'surfaceHighlightSubdued',
      description:
        'For use as a surface color on information elements including banners.',
      light: {lightness: 97, saturation: saturationAdjustmentFn(-20.4)},
      dark: {lightness: 20},
      meta: {
        figmaName: 'Surface Highlight/Subdued',
      },
    },
    {
      name: 'textHighlight',
      description:
        'For use as a text color in inert informational elements. Not for use as a text color on banners and badges.',
      light: {lightness: 48},
      dark: {lightness: 90},
      meta: {
        figmaName: 'Text/Highlight',
      },
    },
  ],
  success: [
    {
      name: 'borderSuccess',
      description:
        'For use as a border on success components such as text inputs.',
      light: {lightness: 60},
      dark: {lightness: 50},
      meta: {
        figmaName: 'Border Success/Default',
      },
    },
    {
      name: 'borderSuccessSubdued',
      description: 'For use as a border on success components such as banners.',
      light: {lightness: 77, saturation: saturationAdjustmentFn(-60)},
      dark: {lightness: 50},
      meta: {
        figmaName: 'Border Success/Subdued',
      },
    },
    {
      name: 'iconSuccess',
      description: 'For use as an icon fill color on top of success elements.',
      light: {lightness: 47},
      dark: {lightness: 35},
      meta: {
        figmaName: 'Icon/Success',
      },
    },
    {
      name: 'surfaceSuccess',
      description:
        'For use as a surface color on success elements including badges.',
      light: {lightness: 88, saturation: saturationAdjustmentFn(-60)},
      dark: {lightness: 35},
      meta: {
        figmaName: 'Surface Success/Default',
      },
    },
    {
      name: 'surfaceSuccessSubdued',
      description:
        'For use as a surface color on information elements including banners.',
      light: {lightness: 97, saturation: saturationAdjustmentFn(-80)},
      dark: {lightness: 20, saturation: saturationAdjustmentFn(-40)},
      meta: {
        figmaName: 'Surface Success/Subdued',
      },
    },
    {
      name: 'textSuccess',
      description:
        'For use as a text color in inert success elements. Not for use as a text color on banners and badges.',
      light: {lightness: 47.3},
      dark: {lightness: 65, saturation: saturationAdjustmentFn(-30)},
      meta: {
        figmaName: 'Text/Success',
      },
    },
  ],
  decorative: [
    {
      name: 'decorativeOneIcon',
      description:
        'For use as a decorative icon color that is applied on a decorative surface.',
      light: {
        hue: hueRotationFn(-4.5),
        lightness: 40,
      },
      dark: {
        hue: hueRotationFn(-4.5),
        lightness: 80,
      },
      meta: {
        figmaName: 'Decorative/Icon/One',
      },
    },
    {
      name: 'decorativeOneSurface',
      description: 'For use as a decorative surface color.',
      light: {
        lightness: 84,
      },
      dark: {
        hue: hueRotationFn(-2.5),
        saturation: saturationAdjustmentFn(-2),
        lightness: 46,
      },
      meta: {
        figmaName: 'Decorative/Surface/One',
      },
    },
    {
      name: 'decorativeOneText',
      description:
        'For use as a decorative text color that is applied on a decorative surface.',
      light: {
        hue: hueRotationFn(-4.5),
        lightness: 18,
      },
      dark: {lightness: 100},
      meta: {
        figmaName: 'Decorative/Text/One',
      },
    },
    {
      name: 'decorativeTwoIcon',
      description:
        'For use as a decorative icon color that is applied on a decorative surface.',
      light: {
        hue: hueRotationFn(305.5),
        saturation: saturationAdjustmentFn(-20),
        lightness: 40,
      },
      dark: {
        hue: hueRotationFn(305.5),
        saturation: saturationAdjustmentFn(-20),
        lightness: 80,
      },
      meta: {
        figmaName: 'Decorative/Icon/Two',
      },
    },
    {
      name: 'decorativeTwoSurface',
      description: 'For use as a decorative surface color.',
      light: {
        hue: hueRotationFn(-26.5),
        lightness: 84,
      },
      dark: {
        hue: hueRotationFn(-32.5),
        saturation: saturationAdjustmentFn(-4),
        lightness: 52,
      },
      meta: {
        figmaName: 'Decorative/Surface/Two',
      },
    },
    {
      name: 'decorativeTwoText',
      description:
        'For use as a decorative text color that is applied on a decorative surface.',
      light: {
        hue: hueRotationFn(305.5),
        saturation: saturationAdjustmentFn(-20),
        lightness: 14,
      },
      dark: {lightness: 100},
      meta: {
        figmaName: 'Decorative/Text/Two',
      },
    },
    {
      name: 'decorativeThreeIcon',
      description:
        'For use as a decorative icon color that is applied on a decorative surface.',
      light: {
        hue: hueRotationFn(87.5),
        lightness: 40,
      },
      dark: {
        hue: hueRotationFn(87.5),
        lightness: 80,
      },
      meta: {
        figmaName: 'Decorative/Icon/Three',
      },
    },
    {
      name: 'decorativeThreeSurface',
      description: 'For use as a decorative surface color.',
      light: {
        hue: hueRotationFn(87.5),
        saturation: saturationAdjustmentFn(-46),
        lightness: 85,
      },
      dark: {
        hue: hueRotationFn(97.5),
        lightness: 46,
      },
      meta: {
        figmaName: 'Decorative/Surface/Three',
      },
    },
    {
      name: 'decorativeThreeText',
      description:
        'For use as a decorative text color that is applied on a decorative surface.',
      light: {
        hue: hueRotationFn(87.5),
        lightness: 16,
      },
      dark: {lightness: 100},
      meta: {
        figmaName: 'Decorative/Text/Three',
      },
    },
    {
      name: 'decorativeFourIcon',
      description:
        'For use as a decorative icon color that is applied on a decorative surface.',
      light: {
        hue: hueRotationFn(133.5),
        lightness: 40,
      },
      dark: {
        hue: hueRotationFn(133.5),
        lightness: 80,
      },
      meta: {
        figmaName: 'Decorative/Icon/Four',
      },
    },
    {
      name: 'decorativeFourSurface',
      description: 'For use as a decorative surface color.',
      light: {
        hue: hueRotationFn(123.5),
        saturation: saturationAdjustmentFn(-44),
        lightness: 84,
      },
      dark: {
        hue: hueRotationFn(131.5),
        saturation: saturationAdjustmentFn(-5),
        lightness: 47,
      },
      meta: {
        figmaName: 'Decorative/Surface/Four',
      },
    },
    {
      name: 'decorativeFourText',
      description:
        'For use as a decorative text color that is applied on a decorative surface.',
      light: {
        hue: hueRotationFn(133.5),
        lightness: 16,
      },
      dark: {lightness: 100},
      meta: {
        figmaName: 'Decorative/Text/Four',
      },
    },
    {
      name: 'decorativeFiveIcon',
      description:
        'For use as a decorative icon color that is applied on a decorative surface.',
      light: {
        hue: hueRotationFn(306.5),
        saturation: saturationAdjustmentFn(-22),
        lightness: 40,
      },
      dark: {
        hue: hueRotationFn(306.5),
        saturation: saturationAdjustmentFn(-22),
        lightness: 80,
      },
      meta: {
        figmaName: 'Decorative/Icon/Five',
      },
    },
    {
      name: 'decorativeFiveSurface',
      description: 'For use as a decorative surface color.',
      light: {
        hue: hueRotationFn(-53.4),
        saturation: saturationAdjustmentFn(-5.4),
        lightness: 85.6,
      },
      dark: {
        hue: hueRotationFn(306.5),
        saturation: saturationAdjustmentFn(-23),
        lightness: 45,
      },
      meta: {
        figmaName: 'Decorative/Surface/Five',
      },
    },
    {
      name: 'decorativeFiveText',
      description:
        'For use as a decorative text color that is applied on a decorative surface.',
      light: {
        hue: hueRotationFn(306.5),
        saturation: saturationAdjustmentFn(-22),
        lightness: 16,
      },
      dark: {lightness: 100},
      meta: {
        figmaName: 'Decorative/Text/Five',
      },
    },
  ],
};
