import { cn } from "../../lib/utils"
import React from "react";

function TypographyH3({ children, className }) {
  return (
    <h1 className={`text-[20px] font-bold md:text-left md:text-[40px] ${cn(className)}`}>
      {children}
    </h1>
  );
}

export default TypographyH3;
