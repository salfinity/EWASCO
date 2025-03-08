/**
 * Validate a string based on its type and maximum length.
 * @param {unknown} value - The value to be validated.
 * @param {number} maxLength - The maximum length allowed.
 * @returns {boolean} - Indicates whether the value is a valid string.
 */
export const validateString = (value, maxLength) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

/**
 * Get an error message from an error object or a string.
 * @param {unknown} error - The error object or string.
 * @returns {string} - The error message.
 */
export const getErrorMessage = (error) => {
  let message = "Something went wrong";

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  }

  return message;
};
