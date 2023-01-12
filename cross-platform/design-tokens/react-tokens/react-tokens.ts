import { baseTokens } from '@robbywh/cross-platform.design-tokens.base-tokens';
import type { BaseTokensProps } from '@robbywh/cross-platform.design-tokens.base-tokens';

export interface ReactTokensProps extends BaseTokensProps {
  spacing: string;
  fontSize: string;
  borderWidth: string;
}

export const reactTokens: ReactTokensProps = {
  ...baseTokens,
  spacing: '15px',
  fontSize: '18px',
  borderWidth: '3px',
};