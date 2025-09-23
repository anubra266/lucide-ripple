/**
 * Converts string to kebab case
 *
 * @param {string} string
 * @returns {string} A kebabized string
 */
export const toKebabCase = (string) =>
  string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

/**
 * Converts string to camel case
 *
 * @param {string} string
 * @returns {string} A camelized string
 */
export const toCamelCase = (string) =>
  string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase()
  );

/**
 * Converts string to pascal case
 *
 * @param {string} string
 * @returns {string} A pascalized string
 */
export const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);

  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

/**
 * Merges classes into a single string
 *
 * @param {array} classes
 * @returns {string} A string of classes
 */
export const mergeClasses = (...classes) =>
  classes
    .filter((className, index, array) => {
      return (
        Boolean(className) &&
        className.trim() !== "" &&
        array.indexOf(className) === index
      );
    })
    .join(" ")
    .trim();

/**
 * Is empty string
 *
 * @param {unknown} value
 * @returns {boolean} Whether the value is an empty string
 */
export const isEmptyString = (value) => value === "";

/**
 * Check if a component has an accessibility prop
 *
 * @param {object} props
 * @returns {boolean} Whether the component has an accessibility prop
 */
export const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
