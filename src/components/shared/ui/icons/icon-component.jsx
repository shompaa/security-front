import { forwardRef } from "react";
import * as IconsIndex from "./svg-icon";

export const Icon = forwardRef(
  ({ icon, width = 4, height = 4, variant, iconActive }, ref) => {
    const IconToRender = IconsIndex[icon];

    console.log({ variant });

    const createIconColor = () => {
      const colors = {
        "primary-outlined": iconActive
          ? "fill-white stroke-white"
          : "fill-slate-900 stroke-slate-900",
        "secondary-outlined": iconActive
          ? "fill-white stroke-white"
          : "fill-amber-500 stroke-amber-500",
        "danger-outlined": iconActive
          ? "fill-white stroke-white"
          : "fill-red-600 stroke-red-600",
        "warning-outlined": iconActive
          ? "fill-white stroke-white"
          : "fill-yellow-500 stroke-yellow-500",
        "success-outlined": iconActive
          ? "fill-white stroke-white"
          : "fill-green-600 stroke-green-600",
        "info-outlined": iconActive
          ? "fill-white stroke-white"
          : "fill-blue-600 stroke-blue-600",
      };

      return colors[variant] || "fill-white stroke-white";
    };

    return (
      <IconToRender
        ref={ref}
        className={`h-${height} w-${width} ${createIconColor()}`}
      />
    );
  }
);
