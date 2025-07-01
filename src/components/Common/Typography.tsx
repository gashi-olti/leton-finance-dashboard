"use client";

import React, { JSX } from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const typographyVariants = cva("text-typography", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      paragraph: "leading-5 font-normal [&:not(:first-child)]:mt-6",
      large: "text-lg font-semibold",
      small: "text-sm font-normal leading-none",
      muted: "text-sm font-normal text-muted-foreground",
    },
    gradient: {
      true: "bg-gradient-to-r from-primary to-typography bg-clip-text text-transparent",
      false: "",
    },
  },
  defaultVariants: {
    variant: "paragraph",
    gradient: false,
  },
});

const tagMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  paragraph: "p",
  large: "span",
  small: "span",
  muted: "span",
} as const;

type TypographyProps = (
  | React.HTMLAttributes<HTMLHeadingElement>
  | React.HTMLAttributes<HTMLParagraphElement>
  | React.HTMLAttributes<HTMLSpanElement>
) &
  VariantProps<typeof typographyVariants> & {
    variant?: keyof typeof tagMap;
    gradient?: boolean;
    className?: string;
    children?: React.ReactNode;
  };

export default function Typography({
  variant = "paragraph",
  gradient = false,
  className,
  children,
  ...props
}: TypographyProps) {
  const Tag = tagMap[variant ?? "paragraph"] as keyof JSX.IntrinsicElements;

  return React.createElement(
    Tag,
    {
      className: cn(typographyVariants({ variant, gradient }), className),
      ...props,
    },
    children
  );
}
