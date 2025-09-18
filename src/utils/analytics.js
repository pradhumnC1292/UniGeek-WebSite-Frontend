// Google Analytics 4 utility functions
import ReactGA from 'react-ga4';

/**
 * Initialize Google Analytics
 * @param {string} measurementId - Your GA4 measurement ID
 * @param {Object} options - Additional configuration options
 */
export const initGA = (measurementId, options = {}) => {
  if (!measurementId) {
    console.warn('Google Analytics measurement ID is required');
    return;
  }

  const defaultOptions = {
    debug: process.env.NODE_ENV !== 'production',
    titleCase: false,
    gaOptions: {}
  };

  ReactGA.initialize(measurementId, { ...defaultOptions, ...options });
  console.log(`Google Analytics initialized with ID: ${measurementId}`);
};

/**
 * Track a page view
 * @param {string} path - The page path (defaults to current path)
 * @param {string} title - The page title
 */
export const trackPageView = (path, title) => {
  const page = path || window.location.pathname + window.location.search;
  ReactGA.send({ hitType: 'pageview', page, title });
  console.log(`Page view tracked: ${page}`);
};

/**
 * Track a custom event
 * @param {Object} params - Event parameters
 * @param {string} params.category - Event category
 * @param {string} params.action - Event action
 * @param {string} params.label - Event label (optional)
 * @param {number} params.value - Event value (optional)
 * @param {Object} params.nonInteraction - Whether this is a non-interaction event (optional)
 * @param {Object} params.transport - Transport mechanism (optional)
 */
export const trackEvent = ({ category, action, label, value, nonInteraction, transport }) => {
  if (!category || !action) {
    console.warn('Event category and action are required');
    return;
  }

  ReactGA.event({
    category,
    action,
    label,
    value,
    nonInteraction,
    transport
  });

  console.log(`Event tracked: ${category} / ${action}${label ? ` / ${label}` : ''}`);
};

/**
 * Common event categories
 */
export const EventCategories = {
  ENGAGEMENT: 'Engagement',
  NAVIGATION: 'Navigation',
  FORM: 'Form',
  DOWNLOAD: 'Download',
  OUTBOUND_LINK: 'Outbound Link',
  COURSE: 'Course',
  MENTOR: 'Mentor',
  HIRING: 'Hiring'
};

/**
 * Common event actions
 */
export const EventActions = {
  CLICK: 'Click',
  VIEW: 'View',
  SUBMIT: 'Submit',
  DOWNLOAD: 'Download',
  SCROLL: 'Scroll',
  PLAY: 'Play',
  PAUSE: 'Pause',
  COMPLETE: 'Complete'
};

/**
 * Track outbound links
 * @param {string} url - The outbound URL
 * @param {string} label - Label for the link (optional)
 */
export const trackOutboundLink = (url, label = 'Outbound Link') => {
  trackEvent({
    category: EventCategories.OUTBOUND_LINK,
    action: EventActions.CLICK,
    label: label || url,
    transport: 'beacon'
  });
};

/**
 * Track form submissions
 * @param {string} formName - Name of the form
 * @param {boolean} success - Whether submission was successful
 */
export const trackFormSubmission = (formName, success = true) => {
  trackEvent({
    category: EventCategories.FORM,
    action: success ? 'Submit Success' : 'Submit Failure',
    label: formName
  });
};

/**
 * Track course interactions
 * @param {string} courseName - Name of the course
 * @param {string} action - The action performed
 */
export const trackCourseInteraction = (courseName, action) => {
  trackEvent({
    category: EventCategories.COURSE,
    action,
    label: courseName
  });
};