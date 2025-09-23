import base64SVG from '@lucide/build-icons/utils/base64SVG.mjs';
import defineExportTemplate from './defineExportTemplate.mts';

export default defineExportTemplate(
  async ({ iconName, children, componentName, getSvg, deprecated, deprecationReason }) => {
    const svgContents = await getSvg();
    const svgBase64 = base64SVG(svgContents);

    return `\
import { Icon } from '../Icon.ripple';
import type { IconNode, LucideProps } from '../types';

const iconNode: IconNode = ${JSON.stringify(children)};

/**
 * @component @name ${componentName}
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,${svgBase64}) - https://lucide.dev/icons/${iconName}
 * @see https://lucide.dev/guide/packages/lucide-ripple - Documentation
 *
 * @param {LucideProps} props - Lucide icons props and any valid SVG attribute
 * @returns {void} RippleJS component
 * ${deprecated ? `@deprecated ${deprecationReason}` : ''}
 */
export component ${componentName}(props: LucideProps) {
  <Icon name="${iconName}" iconNode={iconNode} {...props}>
    if (props.children) {
      <props.children />
    }
  </Icon>
}
`;
  },
);
