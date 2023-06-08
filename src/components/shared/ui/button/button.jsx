import React from "react";
import { Icon } from "../icons/icon-component";

export const Button = React.forwardRef(
  (
    {
      variant = "primary",
      disabled = false,
      fullWidth = false,
      loading = false,
      type = "button",
      direction = "row",
      icon,
      children,
      size = "sm",
      rounded = "lg",
      ariaLabel,
      iconActive = false,
      ...props
    },
    ref
  ) => {
    const buttonClass = {
      primary:
        "bg-slate-900 text-white hover:bg-slate-800 focus:bg-slate-800 border-transparent",
      "primary-outlined":
        "bg-transparent text-slate-900 hover:bg-slate-900 hover:text-white focus:bg-slate-100 border-slate-900 border-[1px]",
      secondary:
        "bg-amber-500 text-white hover:bg-amber-600 focus:bg-amber-600 border-transparent",
      "secondary-outlined":
        "bg-transparent text-amber-500 hover:bg-amber-100 focus:bg-amber-100 border-amber-500 border-[1px]",
      danger:
        "bg-red-600 text-white hover:bg-red-700 focus:bg-red-700 border-transparent",
      "danger-outlined":
        "bg-transparent text-red-600 hover:bg-red-100 focus:bg-red-100 border-red-700 border-[1px]",
      warning:
        "bg-yellow-500 text-white hover:bg-yellow-600 focus:bg-yellow-600 border-transparent",
      "warning-outlined":
        "bg-transparent text-yellow-500 hover:bg-yellow-100 focus:bg-yellow-100 border-yellow-500 border-[1px]",
      success:
        "bg-green-600 text-white hover:bg-green-700 focus:bg-green-700 border-transparent",
      "success-outlined":
        "bg-transparent text-green-600 hover:bg-green-100 focus:bg-green-100 border-green-600 border-[1px]",
      info: "bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 border-transparent",
      "info-outlined":
        "bg-transparent text-blue-600 hover:bg-blue-100 focus:bg-blue-100 border-blue-600 border-[1px]",
      link: "text-slate-900 hover:text-slate-800 focus:text-slate-800 hover:underline",
      "link-secondary":
        "text-amber-500 hover:text-amber-400 focus:text-amber-400 hover:underline",
      "link-danger":
        "text-red-600 hover:text-red-500 focus:text-red-500 hover:underline",
      "link-info":
        "text-blue-600 hover:text-blue-500 focus:text-blue-500 hover:underline",
      "link-warning":
        "text-yellow-600 hover:text-yellow-500 focus:text-yellow-500 hover:underline",
      "link-success":
        "text-green-600 hover:text-green-500 focus:text-green-500 hover:underline",
    };

    const getButtonClass = () => {
      if (disabled && loading) {
        return "pointer-events-none opacity-50 cursor-not-allowed";
      }
      if (disabled) {
        return "pointer-events-none opacity-50 cursor-not-allowed";
      }

      const className = buttonClass[variant];
      if (!className) {
        return "";
      }

      return className;
    };

    const createSizeButton = (size) => {
      switch (size) {
        case "sm":
          return "h-8 px-3 text-sm";
        case "lg":
          return "h-12 px-6 text-lg";
        case "xl":
          return "h-14 px-8 text-xl";
        case "xxl":
          return "h-16 px-10 text-2xl";
        default:
          return "h-10 px-4 text-base";
      }
    };
    
    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        type={type}
        disabled={disabled || loading}
        className={`
          ${getButtonClass()}
          ${createSizeButton(size)}
          ${fullWidth ? "w-full" : "w-auto min-w-45"}
          ${size === "small" ? "px-2 py-1 text-xs" : "px-4 py-2 text-sm"}
          flex-${"-" + direction}
          rounded-${rounded}
          flex items-center justify-center
          focus:outline-none font-bold
          transition duration-200 ease-in-out
          ${loading && "animate-spin"}
        `}
        {...props}
      >
        {icon && <Icon variant={variant} iconActive={iconActive} icon={icon} />}
        {children}
      </button>
    );
  }
);
