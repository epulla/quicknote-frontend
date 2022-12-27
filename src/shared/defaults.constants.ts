// API constants
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
console.log(BACKEND_URL)

// Note constants
export const ADVANCED_OPTION_SWITCH_DEFAULT_VALUE = false;
export const EXPIRES_IN_DEFAULT_VALUE = 300; // in seconds (5 minutes)
export const MAX_VIEWS_DEFAULT_VALUE = 1;
export const MAX_LENGTH_NOTE_CONTENT =
  import.meta.env.VITE_MAX_LENGTH_NOTE_CONTENT !== undefined
    ? import.meta.env.VITE_MAX_LENGTH_NOTE_CONTENT
    : 3000;
