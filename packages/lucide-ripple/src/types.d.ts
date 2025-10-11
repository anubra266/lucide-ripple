/**
 * A reduced version of `SVGElementType` from web standards. This type defines
 * the SVG elements that can be used within icon nodes.
 */
type SVGElementType =
  | "circle"
  | "ellipse"
  | "g"
  | "line"
  | "path"
  | "polygon"
  | "polyline"
  | "rect";

export type IconNode = [
  elementName: SVGElementType,
  attrs: Record<string, string>
][];

/**
 * Properties for SVG elements in RippleJS
 * These mirror the standard SVG attributes but are camelCased for JSX compatibility
 */
export interface SVGAttributes {
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  "stroke-width"?: string | number;
  "stroke-linecap"?: "butt" | "round" | "square";
  "stroke-linejoin"?: "arcs" | "bevel" | "miter" | "miter-clip" | "round";
  "stroke-dasharray"?: string;
  "stroke-dashoffset"?: string | number;
  "stroke-opacity"?: string | number;
  "fill-opacity"?: string | number;
  opacity?: string | number;
  class?: string;
  id?: string;
  style?: string | Record<string, any>;
  transform?: string;
  "clip-path"?: string;
  mask?: string;
  filter?: string;
  "aria-hidden"?: boolean | string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  role?: string;
  "tab-index"?: number;
  [key: string]: any;
}

/**
 * Props for Lucide icons in RippleJS
 */
export interface LucideProps extends SVGAttributes {
  /**
   * The size of the icon (width and height)
   * @default 24
   */
  size?: string | number;

  /**
   * The color of the icon stroke
   * @default "currentColor"
   */
  color?: string;

  /**
   * The stroke width of the icon
   * @default 2
   */
  strokeWidth?: string | number;

  /**
   * Whether to use absolute stroke width
   * When true, stroke width is calculated as (strokeWidth * 24) / size
   * @default false
   */
  absoluteStrokeWidth?: boolean;
}

/**
 * Props for the base Icon component
 */
export interface IconProps extends LucideProps {
  /**
   * The icon name (used for CSS classes)
   */
  name?: string;

  /**
   * The icon node data
   */
  iconNode: IconNode;
}

export type Component<T> = (anchor: HTMLElement, props: T, block: any) => void;

/**
 * Type for Lucide icon components
 */
export type LucideIcon = Component<LucideProps>;
