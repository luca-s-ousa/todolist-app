import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";
import type { ComponentProps } from "react";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-green-light",
        secondary: "bg-pink-light ",
      },
      size: {
        sm: "py-0.5 px-2",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

const badgeTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

interface BadgeProps
  extends ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {}

export default function Badge({
  variant,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, className })} {...props}>
      <Text className={badgeTextVariants({ variant })}>{children}</Text>
    </div>
  );
}
