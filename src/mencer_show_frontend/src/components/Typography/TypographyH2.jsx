import { cn } from "../../lib/utils"
import React from "react";

function TypographyH2({ children, className }) {
  return (
    <h1 className={`text-2xl font-bold lg:text-left lg:text-5xl ${cn(className)}`}>
      {children}
    </h1>
  );
}

export default TypographyH2;
