import { HomeIcon, MenuIcon } from "@/icons";
import React from "react";

export const AppFooter = () => {
  return (
    <div>
      <div className="h-24 w-24">
        <HomeIcon />
      </div>
      <div className="h-24 w-24">{MenuIcon}</div>
    </div>
  );
};
