import { accordionItems } from './accordion-items';

it('Should have length 4', () => {
  expect(accordionItems).toHaveLength(4);
});
it('Should have title and id on each element', () => {
  accordionItems.forEach((e) => {
    expect(e).toHaveProperty('title');
    expect(e).toHaveProperty('id');
  });
});