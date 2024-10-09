import React from "react";
import { cn } from "../../lib/utils"

function TypographyH1({ children, className }) {
  return (
    <h1 className={`text-3xl font-bold tracking-tight lg:text-[56px] ${cn(className)}`}>
      {children}
    </h1>
  );
}

export default TypographyH1;
