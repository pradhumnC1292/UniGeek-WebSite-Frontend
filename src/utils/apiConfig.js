/**
 * API Configuration
 *
 * Centralized API base URL configuration.
 * Uses VITE_API_BASE_URL environment variable if set,
 * otherwise defaults to localhost for development.
 *
 * For mobile/LAN access, set VITE_API_BASE_URL in .env file:
 * VITE_API_BASE_URL=http://192.168.1.6:5000
 */
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

// Export the base URL
export const API_URL = API_BASE_URL;

// Helper function to build full API endpoint URLs
export const getApiUrl = (endpoint) => {
  // Remove leading slash if present to avoid double slashes
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
  // Ensure API base URL doesn't end with /api to avoid duplication
  const base = API_BASE_URL.endsWith("/api")
    ? API_BASE_URL
    : `${API_BASE_URL}/api`;
  return `${base}/${cleanEndpoint}`;
};

export default API_URL;
