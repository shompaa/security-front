import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

export const NavItem = forwardRef(
  ({ path = "/", title = "", icon = null, classname = "", iconClass={} }, ref) => {
    return (
      <NavLink
        to={path}
        ref={ref}
        className={({ isActive }) =>
          `flex items-center px-4 py-2 text-white transition-all duration-300 hover:bg-slate-800 ${classname} ${
            isActive ? "font-bold bg-slate-700 shadow hover:!bg-slate-700" : ""
          }`
        }
      >
        {icon} <span className="mx-4 font-medium">{title}</span>
      </NavLink>
    );
  }
);
