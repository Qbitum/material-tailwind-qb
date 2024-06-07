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
} from "../../types/components/pageWrapper";
import {
  propTypesVariant,
  propTypesColor,
  propTypesShadow,
  propTypesBlurred,
  propTypesFullWidth,
  propTypesClassName,
  propTypesChildren,
  propTypesPadding,
} from "../../types/components/pageWrapper";

export interface PageWrapperProps extends React.ComponentProps<"div"> {
  variant?: variant;
  color?: color;
  shadow?: shadow;
  blurred?: blurred;
  fullWidth?: fullWidth;
  className?: className;
  padding?: padding;
  children: children;
}

const PageWrapper = React.forwardRef<HTMLDivElement, PageWrapperProps>(
  ({ variant, color, shadow, blurred, fullWidth,padding, className, children, ...rest }, ref) => {
    // 1. init
    const { pageWrapper } = useTheme();
    const { defaultProps, valid, styles } = pageWrapper;
    const { base, variants } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    shadow = shadow ?? defaultProps.shadow;
    blurred = blurred ?? defaultProps.blurred;
    fullWidth = fullWidth ?? defaultProps.fullWidth;
    padding = padding ?? defaultProps.padding ?? 'p-1';
    className = twMerge(defaultProps.className || "", className);

    // 3. set styles
    const pageWrapperRoot = classnames(objectsToString(base.pageWrapper.initial), {
      [objectsToString(base.pageWrapper.shadow)]: shadow,
      [objectsToString(base.pageWrapper.blurred)]: blurred && color === "white",
      [objectsToString(base.pageWrapper.fullWidth)]: fullWidth,
      [padding]: !!padding,
    });
    const pageWrapperVariant = classnames(
      objectsToString(
        variants[findMatch(valid.variants, variant, "filled")][
          findMatch(valid.colors, color, "bg-gray-100")
        ],
      ),
    );
    const pageWrapperClasses = twMerge(classnames(pageWrapperRoot, pageWrapperVariant), className);

    // 4. return
    return (
      <nav {...rest} ref={ref} className={pageWrapperClasses}>
        {children}
      </nav>
    );
  },
);

PageWrapper.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  color: PropTypes.oneOf(propTypesColor),
  shadow: propTypesShadow,
  blurred: propTypesBlurred,
  fullWidth: propTypesFullWidth,
  padding: propTypesPadding,
  className: propTypesClassName,
  children: propTypesChildren,
};

PageWrapper.displayName = "MaterialTailwind.PageWrapper";


export { PageWrapper };
export default Object.assign(PageWrapper);
