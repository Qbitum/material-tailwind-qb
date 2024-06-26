import React from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type {
  variant,
  color,
  shadow,
  blurred,
  fullWidth,
  className,
  children,
  padding,
} from "../../types/components/page";
import {
  propTypesVariant,
  propTypesColor,
  propTypesShadow,
  propTypesBlurred,
  propTypesFullWidth,
  propTypesClassName,
  propTypesChildren,
  propTypesPadding,
} from "../../types/components/page";

export interface PageProps extends React.ComponentProps<"div"> {
  variant?: variant;
  color?: color;
  shadow?: shadow;
  blurred?: blurred;
  fullWidth?: fullWidth;
  className?: className;
  padding?: padding;
  children: children;
}

const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ variant, color, shadow, blurred, fullWidth,padding, className, children, ...rest }, ref) => {
    // 1. init
    const { page } = useTheme();
    const { defaultProps, valid, styles } = page;
    const { base, variants } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    shadow = shadow ?? defaultProps.shadow;
    blurred = blurred ?? defaultProps.blurred;
    fullWidth = fullWidth ?? defaultProps.fullWidth;
    padding = padding ?? defaultProps.padding ?? 'p-2';
    className = twMerge(defaultProps.className || "", className);

    // 3. set styles
    const pageRoot = classnames(objectsToString(base.page.initial), {
      [objectsToString(base.page.shadow)]: shadow,
      [objectsToString(base.page.blurred)]: blurred && color === "white",
      [objectsToString(base.page.fullWidth)]: fullWidth,
      [padding]: !!padding,
    });
    const pageVariant = classnames(
      objectsToString(
        variants[findMatch(valid.variants, variant, "filled")][
          findMatch(valid.colors, color, "bg-gray-200")
        ],
      ),
    );
    const pageClasses = twMerge(classnames(pageRoot, pageVariant), className);

    // 4. return
    return (
      <nav {...rest} ref={ref} className={pageClasses}>
        {children}
      </nav>
    );
  },
);

Page.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  color: PropTypes.oneOf(propTypesColor),
  shadow: propTypesShadow,
  blurred: propTypesBlurred,
  fullWidth: propTypesFullWidth,
  padding: propTypesPadding,
  className: propTypesClassName,
  children: propTypesChildren,
};

Page.displayName = "MaterialTailwind.Page";


export { Page };
export default Object.assign(Page);
