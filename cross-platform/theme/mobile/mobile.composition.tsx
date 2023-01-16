import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from './mobile';


export const BasicThemeComposed = () => {
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
    <View
      testID="view"
      style={{
        backgroundColor: secondaryColor,
        borderColor,
        borderStyle,
        padding: spacing,
        borderWidth,
      }}
    >
      <Text style={{ color: primaryColor, fontSize }}>
        View styled with Hooks
      </Text>
    </View>
  );
};

export const DemoHookComponent = () => {
  const { primaryColor } = useTheme();
  return (
    <View>
      <Text style={{ color: primaryColor }}>Hello World</Text>
    </View>
  );
};