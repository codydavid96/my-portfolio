import React from "react";
import NextLink from "next/link";

const LinkComponent = React.forwardRef(
  ({ href, children, ...props }, ref) => {
    return (
      <NextLink href={href}>
        <a ref={ref} {...props}>
          {children}
        </a>
      </NextLink>
    );
  }
);

LinkComponent.displayName = "LinkComponent"; // Add this line

export default LinkComponent;
