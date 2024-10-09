import { cn } from "../../lib/utils"
import React from "react";

function TypographyH4({ children, className }) {
  return (
    <h1 className={`text-lg font-bold tracking-tight lg:text-[32px] ${cn(className)}`}>
      {children}
    </h1>
  );
}

export default TypographyH4;
