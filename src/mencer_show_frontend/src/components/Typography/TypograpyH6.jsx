import { cn } from "../../lib/utils"
import React from "react";

function TypographyH6({ children, className }) {
  return (
    <h1 className={`text-sm font-bold tracking-tight lg:text-xl ${cn(className)}`}>
      {children}
    </h1>
  );
}

export default TypographyH6;
