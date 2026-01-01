import React from "react";
import clsx from "clsx";

/**
 * Extended Typography component
 *
 * Props:
 * - variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "blockquote" | "ul" | "ol" | "li" | "code" | "pre" | "small" | "hr" | "a"
 * - weight: "regular" | "semibold" | "bold"
 * - color: "primary" | "secondary" | "danger" | "success" | "warning" | "muted"
 * - size: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl"
 * - disabled: boolean
 * - hidden: boolean
 * - cursor: "default" | "pointer" | "not-allowed"
 * - selectable: boolean (true = text selectable, false = text not selectable)
 */
export default function Typography({
  variant = "p",
  weight = "regular",
  color = "muted",
  size = "base",
  disabled = false,
  hidden = false,
  cursor = "default",
  selectable = true,
  children,
  className,
  ...props
}) {
  const base = "leading-relaxed";

  const variants = {
    h1: "text-4xl tracking-tight mt-6 mb-4",
    h2: "text-3xl tracking-tight mt-6 mb-3",
    h3: "text-2xl mt-5 mb-3",
    h4: "text-xl mt-4 mb-2",
    h5: "text-lg mt-3 mb-2",
    h6: "text-base uppercase mt-3 mb-2",
    p: "text-base mt-3 mb-4",
    blockquote: "border-l-4 border-slate-300 pl-4 italic my-5",
    ul: "list-disc pl-6 my-4 space-y-2",
    ol: "list-decimal pl-6 my-4 space-y-2",
    li: "text-base",
    code: "font-mono text-sm bg-slate-100 px-1 py-0.5 rounded",
    pre: "bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto my-5",
    hr: "border-slate-200 my-6",
    small: "text-sm",
    a: "underline underline-offset-2 transition-colors",
  };

  const weights = {
    regular: "font-normal",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const colors = {
    primary: "text-[#ffb30e] hover:text-orange-400",
    secondary: "text-[#2780ed] hover:text-slate-800",
    danger: "text-red-600 hover:text-red-700",
    success: "text-green-600 hover:text-green-700",
    warning: "text-[#f17228] hover:text-yellow-700",
    muted: "text-slate-800",
  };

  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  };

  const cursors = {
    default: "cursor-default",
    pointer: "cursor-pointer",
    "not-allowed": "cursor-not-allowed",
  };

  const Tag = variant;

  return (
    <Tag
      className={clsx(
        base,
        variants[variant],
        weights[weight],
        colors[color],
        sizes[size],
        cursors[cursor],
        selectable ? "select-text" : "select-none",
        disabled && "opacity-50 cursor-not-allowed",
        hidden && "hidden",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
