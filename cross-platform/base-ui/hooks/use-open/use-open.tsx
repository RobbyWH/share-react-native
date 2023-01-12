import { useState } from 'react';

export function useOpen() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);
  return { isOpen, toggleOpen };
}