import { cva, cx, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { textVariants } from "./text";

const inputTextVariants = cva(
  "border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none",
  {
    variants: {
      size: {
        md: "pb-2 px-2",
      },

      disabled: {
        true: "pointer-events-none",
        false: null,
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

interface InputTextProps
  extends Omit<ComponentProps<"input">, "disabled" | "size">,
    VariantProps<typeof inputTextVariants>,
    VariantProps<typeof textVariants> {}
export default function InputText({
  size,
  variant,
  disabled,
  className,
  ...props
}: InputTextProps) {
  return (
    <input
      type="text"
      className={cx(
        inputTextVariants({ size, disabled }),
        textVariants({ variant }),
        className
      )}
      {...props}
    />
  );
}
