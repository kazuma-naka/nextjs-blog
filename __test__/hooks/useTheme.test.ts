import { renderHook, act } from "@testing-library/react";
import useTheme from "../../src/hooks/useTheme";

describe("useTheme hook", () => {
  test("should initialize with light mode", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.isDarkMode).toBe(false);
  });

  test("should toggle to dark mode", () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.isDarkMode).toBe(true);
  });

  test("should toggle back to light mode", () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleTheme(); // Switch to dark mode
    });

    act(() => {
      result.current.toggleTheme(); // Switch back to light mode
    });

    expect(result.current.isDarkMode).toBe(false);
  });
});
