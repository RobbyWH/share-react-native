import { createTheme } from '@teambit/base-react.theme.theme-provider';

import { reactTokens } from '@robbywh/cross-platform.design-tokens.react-tokens';
import type { ReactTokensProps } from '@robbywh/cross-platform.design-tokens.react-tokens';

const theme = createTheme<ReactTokensProps>({
  theme: reactTokens,
});

const { useTheme, ThemeProvider } = theme;

export { useTheme, ThemeProvider };