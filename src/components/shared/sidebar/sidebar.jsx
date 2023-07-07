import { forwardRef } from "react";
import { NavItem } from "../ui";

const Sidebar = forwardRef(({ showNav }, ref) => {
  const links = [
    {
      path: "/inicio",
      title: "Inicio",
    },
    {
      path: "/patentes",
      title: "Buscar patente",
    },
    {
      path: "/direccion",
      title: "Mi casa",
    },
  ];

  return (
    <aside ref={ref} className="fixed w-56 h-full bg-slate-900 shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <h1 className="text-2xl font-bold text-white">Logo</h1>
      </div>
      <div className="flex flex-col">
        {links.map((item) => (
          <NavItem key={item.path} path={item.path} title={item.title} />
        ))}
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
