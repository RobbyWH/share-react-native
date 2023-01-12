import React from 'react';
import type {
  //AccordionProps,
  ItemProps,
} from '@robbywh/cross-platform.api.accordion';

import { useOpen } from '@robbywh/cross-platform.base-ui.hooks.use-open';
import { useSelect } from '@robbywh/cross-platform.base-ui.hooks.use-select';
import { useTheme } from '@robbywh/cross-platform.theme.web';
import Collapsible from 'react-collapsible';
import styles from './accordion.module.scss';

export type AccordionProps = {
  /**
   * Element List
  */
  elementList?: any[]
};

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

  const Trigger = () => (
    <div
      data-testid="toggle-menu"
      role="menu"
      tabIndex={0}
      className={styles.cursor}
      style={{
        borderWidth,
        borderColor,
        borderStyle,
        padding: spacing,
        marginBottom: spacing,
      }}
      onClick={toggleOpen}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>): void => {
        const { key } = e;
        if (key === 'm') toggleOpen();
      }}
    >
      Click Here to
      {isOpen ? ' close ' : ' open '}
      the menu
    </div>
  );

  const RenderItem = ({ item }: { item: ItemProps }) => {
    // conditional rendering on the color
    const color = item.id === selectedId ? primaryColor : secondaryColor;
    return (
      <div
        key={item.id}
        role="option"
        tabIndex={0}
        aria-selected={item.id === selectedId}
        onClick={() => setSelection(item.id)}
        onKeyDown={(): void => {}}
        className={styles.cursor}
        style={{
          borderColor: color,
          borderStyle,
          borderWidth,
          marginBottom: spacing,
          padding: spacing,
          color,
        }}
        data-testid={item.title}
      >
        {item.title}
      </div>
    );
  };

  return (
    <div>
      <Collapsible trigger={<Trigger />} transitionTime={180} open={isOpen}>
        {elementList.length > 0 && (
          <>
            {elementList.map((item) => (
              <RenderItem key={item.id} item={item} />
            ))}
          </>
        )}
      </Collapsible>
    </div>
  );
}