/**
 * Detects if the current device is a tablet (iOS or Android)
 * @returns {boolean} True if device is a tablet, false otherwise
 */
export const isTablet = () => {
  if (typeof window === "undefined") return false;

  const userAgent = navigator.userAgent.toLowerCase();
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Detect iPad (iOS tablets)
  // Check for iPad in user agent or check for touch device with specific characteristics
  const isIPad =
    /ipad/.test(userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  // Detect Android tablets based on user agent
  // Android tablets have "Android" in user agent but not "Mobile"
  const isAndroidTablet =
    /android/.test(userAgent) &&
    !/mobile/.test(userAgent) &&
    screenWidth >= 600;

  // Primary detection: screen dimensions typical of tablets
  // Tablets typically have width between 600px and 1024px
  // This works for both real tablets and dev tools testing (when viewport is resized)
  const hasTabletDimensions =
    screenWidth >= 600 &&
    screenWidth <= 1024;

  // Exclude mobile phones (user agent contains mobile/iphone and screen is small)
  const isMobilePhone = 
    (/mobile/.test(userAgent) || /iphone/.test(userAgent)) &&
    screenWidth < 600;

  // Consider it a tablet if:
  // 1. It's an iPad (via user agent or platform detection)
  // 2. It's an Android tablet (has Android but not Mobile in user agent)
  // 3. Has tablet-like dimensions (600-1024px width) AND is not a mobile phone
  //    This works for both real tablets and when testing in dev tools
  const isTabletDevice =
    isIPad ||
    isAndroidTablet ||
    (hasTabletDimensions && !isMobilePhone);

  // Debug log (can be removed in production)
  if (process.env.NODE_ENV === 'development') {
    console.log('Tablet detection:', {
      screenWidth,
      screenHeight,
      userAgent: userAgent.substring(0, 50),
      isIPad,
      isAndroidTablet,
      hasTabletDimensions,
      isMobilePhone,
      isTabletDevice
    });
  }

  return isTabletDevice;
};
