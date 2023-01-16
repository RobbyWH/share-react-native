import React from 'react';
import { ThemeProvider, useTheme } from './web';
export const BasicThemeComposed = () => {
  const myStyle = {
    color: 'var(--primary-color)',
    fontSize: 'var(--font-size)',
    backgroundColor: 'var(--secondary-color)',
    borderColor: 'var(--border-color)',
    borderStyle: 'var(--border-style)',
    padding: 'var(--spacing)',
    borderWidth: 'var(--border-width)',
  };

  const theme = useTheme();
  const {
    primaryColor,
    fontSize,
    secondaryColor,
    borderColor,
    borderStyle,
    spacing,
    borderWidth,
  } = theme;
  return (
    // @ts-ignore
    <ThemeProvider>
      <div style={myStyle}>Div styled with CSS Variables</div>
      <div style={{ marginBottom: 'var(--spacing)' }} />
      <div
        style={{
          color: primaryColor,
          fontSize,
          backgroundColor: secondaryColor,
          borderColor,
          borderStyle,
          padding: spacing,
          borderWidth,
        }}
      >
        Div styled with Hooks
      </div>
    </ThemeProvider>
  );
};

export const DemoHookComponent = () => {
  const { primaryColor } = useTheme();
  return <div style={{ color: primaryColor }}>Hello World</div>;
};