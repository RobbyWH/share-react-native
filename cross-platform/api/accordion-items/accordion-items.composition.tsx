import React from 'react';
import { accordionItems } from './accordion-items';

export function ReturnsCorrectValue() {
  return <div>{JSON.stringify(accordionItems)}</div>;
}