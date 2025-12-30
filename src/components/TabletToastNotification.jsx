import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { isTablet } from "../utils/deviceDetection";

const TabletToastNotification = () => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    const checkAndShowToast = () => {
      // Check if device is a tablet
      if (isTablet()) {
        // Show toast notification with red/warning style
        // Use toastId to prevent duplicate toasts
        toast.warn(
          "Please visit our best on laptop/desktop or mobile phones for best user experiance",
          {
            toastId: "tablet-warning", // Prevents duplicate toasts
            position: "top-right",
            autoClose: 8000, // Show for 8 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
              backgroundColor: "#dc2626", // Red color
              color: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            },
            progressStyle: {
              backgroundColor: "#ffffff",
            },
          }
        );
      }
    };

    // Check immediately after a small delay to ensure window is ready
    timeoutRef.current = setTimeout(() => {
      checkAndShowToast();
    }, 100);

    // Also check on window resize (for testing in dev tools)
    // Use debounce to avoid too many checks
    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        checkAndShowToast();
      }, 300);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TabletToastNotification;
