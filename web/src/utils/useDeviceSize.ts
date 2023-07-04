import { useMediaQuery } from "react-responsive";

export function useDeviceSize() {
  const isDesktopOrLarger = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTabletOrLarger = useMediaQuery({ query: "(min-width: 768px)" });
  const isTinyScreen = useMediaQuery({ query: "(max-width: 380px)" });

  return {
    isDesktopOrLarger,
    isTabletOrLarger,
    isTinyScreen,
  };
}
