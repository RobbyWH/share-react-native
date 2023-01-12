import { renderHook, act } from '@testing-library/react-hooks';
import { useOpen } from './use-open';

it('should increment counter', () => {
  const { result } = renderHook(() => useOpen());
  expect(result.current.isOpen).toBe(false);
  act(() => {
    result.current.toggleOpen();
  });
  expect(result.current.isOpen).toBe(true);
});