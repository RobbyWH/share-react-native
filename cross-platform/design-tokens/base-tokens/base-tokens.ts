export interface BaseTokensProps {
  primaryColor: string;
  secondaryColor: string;
  borderColor: string;
  borderStyle: 'solid' | 'dotted' | 'dashed' | undefined;
}

export const baseTokens: BaseTokensProps = {
  primaryColor: 'red',
  secondaryColor: 'blue',
  borderColor: 'green',
  borderStyle: 'solid',
};