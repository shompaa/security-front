import { forwardRef } from "react";
import * as IconsIndex from "./svg-icon";

export const Icon = forwardRef(
  ({ icon, width = 4, height = 4, color }, ref) => {
    const IconToRender = IconsIndex[icon];
    const createIconColor = () => {
      switch (color) {
        case "primary":
          return "fill-slate-900";
        case "default":
          return "fill-slate-400";
        case "secondary":
          return "fill-amber-500";
        case "danger":
          return "fill-red-700";
        case "success":
          return "fill-green-500";
        case "warning":
          return "fill-yellow-500";
        default:
          return "fill-slate-900";
      }
    };

    return (
      <IconToRender
        ref={ref}
        className={`${createIconColor()} h-${height} w-${width}`}
      />
    );
  }
);
