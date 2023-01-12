import { useState } from 'react';

export function useSelect(initialValue?: string) {
  const [selectedId, setSelectedId] = useState<string | null>(
    initialValue ?? null,
  );
  const setSelection = (id: string) => setSelectedId(id);

  return {
    selectedId,
    setSelection,
  };
}