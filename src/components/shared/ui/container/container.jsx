import React from "react";

export const Container = ({ children, title = "" }) => {
  return (
    <div className="flex flex-col items-center justify-center px-3 py-6 mx-auto lg:py-0">
      <div className="w-full rounded-lg shadow border md:mt-0 xl:p-0 bg-gray-200 border-gray-200 mb-4">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-slate-900 p-5">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};
