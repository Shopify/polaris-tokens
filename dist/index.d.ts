declare interface Tokens {
  colorDark: "rgb(80, 36, 143)";
  colorDarker: "rgb(35, 0, 81)";
  colorLight: "rgb(227, 208, 255)";
  colorLighter: "rgb(246, 240, 253)";
  colorPurple: "rgb(156, 106, 222)";
  colorText: "rgb(80, 73, 90)";
  fontStackBase: "-apple-system, 'BlinkMacSystemFont', 'San Francisco', 'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif";
  fontStackMonospace: "Monaco, Consolas, 'Lucida Console', monospace";
  spacingBase: "16px";
  spacingExtraLoose: "32px";
  spacingExtraTight: "4px";
  spacingLoose: "20px";
  spacingNone: 0;
  spacingTight: "8px";
}
declare let tokens: Tokens;
export = tokens;