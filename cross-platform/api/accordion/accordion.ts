
export type ItemProps = {
  /**
   * Title
  */
  title: string;
  /**
   * ID
  */
  id: string;
};

export type AccordionProps = {
  /**
   * Element List
  */
  elementList: ItemProps[];
};

export class Item implements ItemProps {
  constructor(
    readonly title: ItemProps['title'],
    readonly id: ItemProps['id']
  ) {}

  static fromObject(plainItem: ItemProps) {
    return new Item(plainItem.title, plainItem.id);
  }

  toObject(): ItemProps {
    return {
      title: this.title,
      id: this.id,
    };
  }
}