import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import React from "react";

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export function useMDXComponents(components?: React.ReactElement) {
  return {
    ...themeComponents,
    ...components,
  };
}
