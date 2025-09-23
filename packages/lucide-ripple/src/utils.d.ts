/**
 * Convert a type string from camelCase to PascalCase
 *
 * @example
 * type Test = CamelToPascal<'fooBar'> // 'FooBar'
 */
export type CamelToPascal<T extends string> =
  T extends `${infer FirstChar}${infer Rest}`
    ? `${Capitalize<FirstChar>}${Rest}`
    : never;

/**
 * Creates a list of components from a list of component names and a component type
 */
export type ComponentList<ComponentNames, ComponentType> = {
  [Prop in keyof ComponentNames as CamelToPascal<Prop & string>]: ComponentType;
};

/**
 * Converts string to kebab case
 *
 * @param string - The string to convert
 * @returns A kebabized string
 */
export declare const toKebabCase: (string: string) => string;

/**
 * Converts string to camel case
 *
 * @param string - The string to convert
 * @returns A camelized string
 */
export declare const toCamelCase: <T extends string>(string: T) => string;

/**
 * Converts string to pascal case
 *
 * @param string - The string to convert
 * @returns A pascalized string
 */
export declare const toPascalCase: <T extends string>(
  string: T
) => CamelToPascal<T>;

/**
 * Merges classes into a single string
 *
 * @param classes - Array of class names
 * @returns A string of classes
 */
export declare const mergeClasses: <ClassType = string | undefined | null>(
  ...classes: ClassType[]
) => string;

/**
 * Is empty string
 *
 * @param value - The value to check
 * @returns Whether the value is an empty string
 */
export declare const isEmptyString: (value: unknown) => boolean;

/**
 * Check if a component has an accessibility prop
 *
 * @param props - The props object to check
 * @returns Whether the component has an accessibility prop
 */
export declare const hasA11yProp: (props: Record<string, any>) => boolean;
