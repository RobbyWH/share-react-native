import React from 'react';
import { Accordion } from './accordion';
import { accordionItems } from '@robbywh/cross-platform.api.accordion-items';

export const BasicAccordion = () => (
  <Accordion elementList={accordionItems} />
);
