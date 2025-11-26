import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import Icon from "./icon";

const buttonIconVariants = cva(
  "inline-flex items-center justify-center cursor-pointer transition group",
  {
    variants: {
      variant: {
        primary: "bg-green-base hover:bg-green-dark",
        secondary: "bg-gray-200 hover:bg-pink-dark",
        tertiary: "bg-transparent hover:bg-gray-200",
      },

      size: {
        sm: "h-6 p-1 rounded",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
        false: null,
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  }
);

const buttonIconIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-white",
      secondary: "fill-pink-base group-hover:fill-white",
      tertiary: "fill-gray-300 group-hover:fill-gray-400",
    },

    size: {
      sm: "w-4 h-4",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface ButtonIconProps
  extends Omit<ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonIconVariants> {
  icon: ComponentProps<typeof Icon>["svg"];
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  icon,
  className,
  ...props
}: ButtonIconProps) {
  return (
    <button
      {...props}
      className={buttonIconVariants({ variant, size, disabled, className })}
    >
      <Icon
        className={buttonIconIconVariants({ variant, size, className })}
        svg={icon}
      />
    </button>
  );
}
