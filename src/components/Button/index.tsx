import React from "react";

import { cn } from "../../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn("flex rounded-md bg-blue-500 p-2 text-white", className)}>
      {children}
    </button>
  );
}
