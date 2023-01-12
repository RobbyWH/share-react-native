import React from 'react';
import {
  Text,
  View,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import type {
  AccordionProps,
  ItemProps,
} from '@robbywh/cross-platform.api.accordion';
import { useOpen } from '@robbywh/cross-platform.base-ui.hooks.use-open';
import { useSelect } from '@robbywh/cross-platform.base-ui.hooks.use-select';
import { useTheme } from '@robbywh/cross-platform.theme.mobile';
import Collapsible from 'react-native-collapsible';

export function Accordion({ elementList }: AccordionProps) {
  const { isOpen, toggleOpen } = useOpen();
  const { selectedId, setSelection } = useSelect();
  const {
    primaryColor,
    secondaryColor,
    spacing,
    borderColor,
    borderStyle,
    borderWidth,
  } = useTheme(); // beware which theme you are using!

  const renderItem = ({ item }: { item: ItemProps }) => {
    // conditional rendering on the color
    const color = item.id === selectedId ? primaryColor : secondaryColor;
    return (
      <TouchableOpacity
        onPress={() => setSelection(item.id)}
        style={{
          borderColor: color,
          borderStyle,
          borderWidth,
          marginBottom: spacing,
          padding: spacing,
        }}
        testID={item.title}
      >
        <Text style={{ color }}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Pressable
        style={{
          borderWidth,
          borderColor,
          borderStyle,
          padding: spacing,
          marginBottom: spacing,
        }}
        onPress={toggleOpen}
      >
        <Text testID="toggle-menu">
          Click Here to
          {isOpen ? ' close ' : ' open '}
          the menu
        </Text>
      </Pressable>
      <Collapsible collapsed={!isOpen} duration={180}>
        <FlatList
          data={elementList}
          renderItem={renderItem}
          extraData={selectedId}
          keyExtractor={(item) => item.id}
        />
      </Collapsible>
    </View>
  );
}