import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700 mb-4">
        {children}
      </div>
    </div>
  );
};
