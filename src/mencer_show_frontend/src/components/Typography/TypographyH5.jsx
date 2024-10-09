import { cn } from "../../lib/utils"
import React from "react";

function TypographyH5({ children, className }) {
  return (
    <h1 className={`text-base font-bold tracking-tight lg:text-2xl ${cn(className)}`}>
      {children}
    </h1>
  );
}

export default TypographyH5;
