export const SWITCH_THEME = "SWITCH_THEME";

export const switchTheme = BaseTheme => {
  return dispatchEvent => {
    dispatchEvent({
      type: SWITCH_THEME,
      BaseTheme: BaseTheme
    });
  };
};
